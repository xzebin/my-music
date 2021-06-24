<template>
	<view class="" style="margin-bottom: 320rpx;">
		<view class="" style="font-size: 12px;padding: 10px;">
			心灵鸡汤：<text style="color: red;">{{ chickenSoupData }}</text>
		</view>
		<carousel :img-list="imgList" url-key="url" @selected="selectedBanner" />
		<view class="">
			<mSearch :show="false" @search="search($event,1)"></mSearch>
		</view>
		<scroll-view scroll-y="true" refresher-enabled="true" :refresher-triggered="refreshering" @refresherrefresh="refresher">
			<view class="content">
				<!-- 将导航栏数据放入navData中,默认为{[name: 'XXX']}，可到componets/Nav.vue中修改 -->
				<Nav :navData="navData" @changeTab='changeTab' :changeNavIndex="current"></Nav>
				<!-- 内容页 -->
				<swiper :current="current" :autoplay="false" ::duration="100" style="height: 90vh;overflow: auto;" @change="changeSwiper">
					<swiper-item v-for="(item, index) in classifyData">
						<!-- 内容页面位置 -->
						<view class="swiper-item">
							<view class="song-item" v-if="item.songs.length === 10" v-for="(v,flag) in item.songs" :key='flag' style="display: flex;justify-content: space-between;align-items: center;margin-bottom: 28rpx;font-size: 24rpx;">
								<image style="width: 100rpx;height: 100rpx;margin-right: 20rpx;" :src="v.picurl" mode=""></image>
								<p style="width: 180rpx">{{ v.name }}</p>
								<p style="width: 140rpx">{{v.artistsname }}</p>
								<p>播放</p>
								<p @click="nextPlay(v)">下一首</p>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</scroll-view>
		<view class="" style="position: fixed;bottom: 50px;">
			<play ref="play"></play>
		</view>
	</view>
</template>

<script>
	import Nav from '@/components/zq-Nav/zq-Nav'
	import carousel from '@/components/vear-carousel/vear-carousel'
	import play from '@/components/play/play.vue'
	import popupLayer from '@/components/popup-layer/popup-layer.vue';
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	export default {
		data() {
			return {
				val1: '',
				imgList: [{
					url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					id: 1
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					id: 2
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					id: 3
				}, {
					url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					id: 4
				}, ],
				// 导航栏数据
				navData: [{
					name: '热搜榜'
				}, {
					name: '新歌榜'
				}, {
					name: '抖音榜'
				}, {
					name: '飙升榜'
				}, {
					name: '电音榜'
				}],
				// 分类数据
				classifyData: [{
						content: '热歌榜',
						songs: []
					},
					{
						content: '新歌榜',
						songs: []
					},
					{
						content: '抖音榜',
						songs: []
					},
					{
						content: '飙升榜',
						songs: []
					},
					{
						content: '电音榜',
						songs: []
					}
				],
				// swiper动态高度
				swiperHeight: 0,
				current: 0,
				refreshering: true,
				chickenSoupData: ''
			}
		},
		components: {
			Nav: Nav,
			carousel,
			play,
			popupLayer,
			mSearch
		},
		onHide() {
			this.$refs.play.audioContext.destroy()
			this.$refs.play.isPlay = false
		},
		onShow() {
			this.getChickenSoup()
			this.getHotSong()
			this.$EventBus.$on('playSong',(obj)=>{
				this.nextPlay(obj,true)
			})
		},
		methods: {
			nextPlay(item,bool=false){
				if(!bool){
					let req = /id=(\d+)/g
					let tempObj = {
						file:item.url,
						name:item.name,
						singer:item.artistsname,
						longth:'00:00',
						view_image:item.picurl,
						id:Number(req.exec(item.url)[1])
					}
					this.$EventBus.$emit('getSong',tempObj)
				}else{
					this.$EventBus.$emit('getSong',item)
				}
			},
			search(e, val) {
				this['val' + val] = e;
				uni.navigateTo({
					url: '../searchResult/searchResult?search=' + e
				})
			},
			async getHotSong() {
				if(this.classifyData[this.current].songs.length){
					return 
				}
				for (let i = 0; i < 10; i++) {
					let r = await this.$request.httpRequest({
						url: 'getHotSongs?sort=' + this.classifyData[this.current].content + '&json=json',
					})
					this.classifyData[this.current].songs.push(r.data)
				}
			},
			getChickenSoup() {
				this.$request.httpRequest({
					url: 'chickenSoup',
					method: 'get'
				}).then((res) => {
					this.chickenSoupData = res.txt
				})
			},
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			},
			// 选择导航栏事件
			changeTab(index) {
				this.current = index
			},
			// 滑动内容页事件
			changeSwiper(e) {
				this.current = e.detail.current
				this.getHotSong()
				this.$emit('changeNavIndex', e.detail.current)
			},
			// 下拉刷新事件
			refresher() {
				var that = this
				that.refreshering = true
				console.log('下拉刷新')
				setTimeout(function() {
					that.refreshering = false
					console.log('刷新成功')
				}, 2000)
			}
		}
	}
</script>

<style lang="scss">
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	scroll-view {
		height: 100%;

		.content {
			box-sizing: border-box;
			height: 100%;
			padding: 20rpx; //页面内边距

			swiper {
				height: calc(100% - 150rpx);

				swiper-item {
					// 内容页样式
					box-sizing: border-box;
					padding: 10rpx;

					.swiper-item {
						height: 100%;
						overflow: auto;
					}
				}
			}
		}
	}
</style>
