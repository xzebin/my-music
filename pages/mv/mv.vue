<template>
	<view>
		<view class="" style="position: fixed;z-index: 99;width: 100vw;">
			<mSearch :show="false" @search="search($event,1)"></mSearch>
		</view>
		<view v-if="currentArr.length" class="content" style="padding: 20rpx 40rpx;display: flex;justify-content: space-between;flex-wrap: wrap;padding-top: 120rpx;">
			<k-scroll-view ref="k-scroll-view" :refreshType="refreshType" :refreshTip="refreshTip" :loadTip="loadTip"
			 :loadingTip="loadingTip" :emptyTip="emptyTip" :touchHeight="touchHeight" :height="height" :bottom="bottom"
			 :autoPullUp="autoPullUp" @onPullDown="handlePullDown" @onPullUp="handleLoadMore">
				<!-- 数据列表 -->
				<view class="item" @click="viewMv(item)" v-for="(item,index) in currentArr" :key="index" style="width: 48%;margin-bottom: 20rpx;font-size: 26rpx;">
					<image :src="item.cover" style="width: 100%;height: 100px;" mode=""></image>
					<p>{{item.name}}</p>
					<view class="" style="width: 100%;display: flex;justify-content: space-between;margin-top: 10rpx;align-items: center;">
						<view class="">
							<image src="../../static/images/Play.png" style="width: 20rpx;height: 20rpx;" mode=""></image><text>{{ item.playCount }}</text>
						</view><text>{{ item.artistName }}</text>
					</view>
				</view>
			</k-scroll-view>
		</view>
		<view class="" style="padding-top: 50%;text-align: center;" v-else>
			暂无推荐mv,试下搜索吧
		</view>
		<popup-layer ref="popupRef" :direction="'top'">
			<sy-video ref="video" tyle="width: 100%;"></sy-video>
			<view class="mv-detail" style="padding: 24rpx;height: 40vh;overflow: auto;">
				<p>mv名：{{ currentPlayObj.name }}</p>
				<p>演唱：{{ currentPlayObj.artistName }}</p>
				<p>简介：{{ currentPlayObj.desc ? currentPlayObj.desc : '该作者很懒，没有留下任何简介'}}</p>
				<p>播放量：{{ currentPlayObj.playCount }}</p>
				<p>喜欢：{{ currentPlayObj.likeCount }}</p>
				<p>分享：{{ currentPlayObj.shareCount }}</p>
				<p>发布时间：{{ currentPlayObj.publishTime }}</p>
			</view>
			<view class="box" style="">
				<view class="" @click="close" style="text-align: center;border-top: 1px solid #ccc;padding:20rpx 0;">
					<text>关闭</text>
				</view>
			</view>
		</popup-layer>
	</view>
</template>

<script>
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	import kScrollView from '@/components/k-scroll-view/k-scroll-view.vue';
	import SyVideo from '@/components/shoyu-video/shoyu-video'
	import popupLayer from '@/components/popup-layer/popup-layer.vue'
	export default {
		data() {
			return {
				val1: '',
				searchResult: [],
				refreshType: 'custom',
				refreshTip: '正在下拉',
				loadTip: '获取更多数据',
				loadingTip: '正在加载中...',
				emptyTip: '--我是有底线的--',
				touchHeight: 50,
				height: 0,
				bottom: 50,
				autoPullUp: true,
				stopPullDown: true, // 如果为 false 则不使用下拉刷新，只进行上拉加载
				list: [],
				videoUri: '',
				currentPlayObj: {},
				currentArr: [],
				currentPage: 1,
				limit: 6
			}
		},
		components: {
			mSearch,
			kScrollView,
			SyVideo,
			popupLayer
		},
		methods: {
			close() {
				this.$refs.video.videoContext.pause()
				this.$refs.popupRef.close(); // 或者 boolShow = false
			},
			viewMv(item) {
				let _this = this
				uni.request({
					url: `https://api88.net/api/mv/?key=857cdf8fa8d3fccb&mv=163&id=${item.id}&type=info&word=%27%27`,
					method: 'get',
					success({
						data
					}) {
						let brs = data.data.brs
						let url1 = brs['240']
						let url2 = brs['480']
						let url3 = brs['720']
						let url4 = brs['1080']
						if (url4) {
							_this.videoUri = url4
						} else if (url3) {
							_this.videoUri = url3
						} else if (url2) {
							_this.videoUri = url2
						} else if (url1) {
							_this.videoUri = url1
						}
						_this.currentPlayObj = data.data
						_this.$EventBus.$emit('getVideoUri', _this.videoUri)
						_this.$refs.popupRef.show();
					}
				})
			},
			handlePullDown(stopLoad) {
				this.searchResult = [];
				this.currentArr = []
				stopLoad ? stopLoad() : '';
			},
			handleLoadMore(stopLoad) {
				const size = this.searchResult.length;
				const size2 = this.currentArr.length
				if (size2 < size) {
					let index = (this.currentPage - 1) * this.limit
					let max = index + this.limit
					let tempArr = []
					if(max > size){
						max = size
					}
					for (let i = index ;i < max;i++) {
						tempArr.push(this.searchResult[i])
					}
					this.currentArr = this.currentArr.concat(tempArr)
					this.currentPage = this.currentPage + 1
					stopLoad ? stopLoad() : '';
				} else {
					stopLoad ? stopLoad({
						isEnd: true
					}) : '';
				}
			},
			handleGoTop() {
				this.$refs['k-scroll-view'].goTop();
			},
			search(e, val) {
				this['val' + val] = e;
				this.currentArr = []
				this.currentPage = 1
				this.$request.httpRequest({
					url: 'searchMv?search=' + e
				}).then((res) => {
					this.searchResult = res.result.mvs
					let index = (this.currentPage - 1) * this.limit
					let max = index + this.limit
					let tempArr = []
					for(let i = index ;i < max ;i++){
						if(i<this.searchResult.length){
							let e = this.searchResult[i]
							tempArr.push(e)
						}
					}
					this.currentArr = this.currentArr.concat(tempArr)
					this.currentPage = this.currentPage + 1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .scroll-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.mv-detail {
		p {
			font-size: 28rpx;
			margin-bottom: 20rpx;
		}
	}
</style>
