<template>
	<view style="height: 100%;" v-if="subCategoryList.length > 0">
		<view class="title" style="top: 47px;">
			<view class="flex_col color_fff">
				<view class="flex_grow flex_col flex_center tab">
					<view :class="{ 'active':listType==0 }" data-type="0" @tap="changeType">热搜</view>
					<view :class="{ 'active':listType==1 }" data-type="1" @tap="changeType">推荐</view>
					<view :class="{ 'active':listType==2 }" data-type="2" @tap="changeType">今日</view>
					<view :class="{ 'active':listType==3 }" data-type="3" @tap="changeType">美女</view>
				</view>
			</view>
		</view>
		<swiper class="swiper" :duration="duration" :vertical="true" @change="onChange" :current="activeIndex">
			<swiper-item v-for="(item,index) in subCategoryList" :key="index" @click="test">
				<view class="swiper-item" v-if="activeIndex >= (index-1)">
					<view v-if="isPlay" style="position: absolute;top: 50%;left: 50%;z-index: 66;transform: translate(-50%, -50%);">
						<image src="../../static/images/Play.png" mode="" style="height: 30px;width: 30px;"></image>
						<text style="color: #fff;">播放</text>
					</view>
					<video v-if="index === activeIndex" id="myVideo" :style="{ height: windowHeight + 'px' }" style="width: 100%;"
					 :autoplay="index === activeIndex ? true : false" :src="videourl" @error="videoErr" :poster="item.logo" @timeupdate="videoTimeUpdateEvent">
					</video>
					<view class="info-box">
						<view class="size_16">@ 第{{index+1}}个视频</view>
						<view>{{ item.name }}</view>
						<view class="size_12">第{{index+1}}个视频原创</view>
					</view>
					<view class="sidebar">
						<view class="pic">
							<image :src="item.logo ? item.logo : ''" mode=""></image>
						</view>
						<view class="like">
							<uni-icons type="chat" size="30" color="#fff"></uni-icons>
							<view>{{ item.value ? String(item.value).substr(0,5) : 0 }}</view>
						</view>
						<view class="read">
							<uni-icons type="redo" size="30" color="#fff"></uni-icons>
							<view>999+</view>
						</view>
						<view class="menu">
							<image :src="item.img_url ? item.img_url : ''" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons'
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				listType: 1,
				activeIndex: 0,
				duration: 300,
				rows: 10,
				page: 1,
				dataList: [],
				time: 0,
				windowHeight: 0,
				videourl: '',
				subCategoryList: [],
				videoContext: '',
				isPlay: false,
				searchArr: [],
				popularArr: [],
				hotDouyinArr: [],
				littleSisterArr:[]
			}
		},
		mounted() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.windowHeight = res.windowHeight;
				}
			});
		},
		onLoad(options) {
			this.getList();
			this.setViewport();
		},
		created() {
			this.getHotDouyin()
			this.getHotSearch()
			this.getPopular()
			this.getLittleSisterVideo()
			this.videoContext = uni.createVideoContext('myVideo');
		},
		methods: {
			videoErr(){
				uni.showToast({
					title:"播放失败",
					icon:'none',
					duration: 2000
				})
			},
			videoTimeUpdateEvent(e) { // 播放进度改变
				let currentTime = Number(e.detail.currentTime);
				// 试看结束 this.class_info.freed_time为试看时间
				if (currentTime >= e.detail.duration) {
					// 试看结束,在这做一些想做的操作,例如继续视频播放
					this.videoContext.play()
				}
			},
			test() {
				if (!this.isPlay) {
					this.videoContext.exitFullScreen();
					this.videoContext.pause();
					this.isPlay = true
				} else {
					this.videoContext.play()
					this.isPlay = false
				}
			},
			getVideoDetail(category) {
				let rex = /\/(\d+)\//g
				let id = rex.exec(category.link)[1]
				this.$request.httpRequest({
					url: 'videoDetail?id=' + id,
					method: 'delete'
				}).then((res) => {
					let temp = res.item_list[0].video.play_addr.url_list[0]
					temp = temp.replace(/playwm/, "play")
					temp = temp.replace(/line=0/, "line=1")
					this.videourl = temp
				})
			},
			getHotSearch() {
				uni.showLoading({
					title: "视频正在加载中..."
				})
				this.$request.httpRequest({
					url: 'hotSearch'
				}).then((res) => {
					let tempArr = []
					res.billboard_data.map(v => {
						if (v.extra_list) {
							let {
								img_url,
								link,
								sec_item_id,
								title
							} = v.extra_list[0]
							let tempObj = {}
							tempObj.name = title
							tempObj.logo = img_url
							tempObj.link = link
							tempObj.value = v.value
							tempArr.push(tempObj)
						}
					})
					this.searchArr = tempArr
					this.getVideoDetail(this.searchArr[this.activeIndex])
					// 延时关闭 加载中的 loading框
					uni.hideLoading()
				})
			},
			getPopular() {
				uni.showLoading({
					title: "视频正在加载中..."
				})
				this.$request.httpRequest({
					url: 'popular'
				}).then((res) => {
					let tempArr = []
					res.billboard_data.map(v => {
						let {
							img_url,
							link,
							sec_item_id,
							title,
							value
						} = v
						let tempObj = {}
						tempObj.name = title
						tempObj.logo = img_url
						tempObj.link = link
						tempObj.value = value
						tempArr.push(tempObj)
					})
					this.popularArr = tempArr
					this.getVideoDetail(this.popularArr[this.activeIndex])
					// 延时关闭 加载中的 loading框
					uni.hideLoading()
				})
			},
			getHotDouyin() {
				uni.showLoading({
					title: "视频正在加载中..."
				})
				if (this.hotDouyinArr.length > 0) {
					this.subCategoryList = this.hotDouyinArr
				} else {
					this.$request.httpRequest({
						url: 'hotspotRise'
					}).then((res) => {
						let tempArr = []
						res.billboard_data.map(v => {
							if (v.extra_list) {
								let {
									img_url,
									link,
									sec_item_id,
									title
								} = v.extra_list[0]
								let tempObj = {}
								tempObj.name = title
								tempObj.logo = img_url
								tempObj.link = link
								tempObj.value = v.value
								tempArr.push(tempObj)
							}
						})
						this.hotDouyinArr = tempArr
						this.subCategoryList = tempArr
						this.getVideoDetail(this.hotDouyinArr[this.activeIndex])
						// 延时关闭 加载中的 loading框
						uni.hideLoading()
					})
				}
			},
			getLittleSisterVideo() {
				let tempArr = []
				for (let i = 0; i < 20; i++) {
					tempArr.push(this.$request.httpRequest({
						url: 'littleSisterVideo'
					}))
				}
				let resultArr = []
				Promise.all(tempArr).then((res) => {
					res.map(v => {
						if(v.video){
							resultArr.push(v.video)
						}
					})
					// this.videourl = resultArr[this.activeIndex]
					console.log("this.videourl",this.videourl)
					this.littleSisterArr = resultArr
					console.log("resultArr",resultArr)
				})
			},
			setViewport() {
				const meta = document.querySelector('meta[name=viewport]');
				if (!meta) return;
				meta.setAttribute('name', "referrer");
				meta.setAttribute('content', "never");
			},
			/* 改变类型 */
			changeType(e) {
				if (this.time === 0) {
					setInterval(() => {
						this.time += 1
					}, 1000)
				} else {
					this.time = 0
				}
				this.listType = e.currentTarget.dataset.type;
				this.page = 1;
				this.getList();
				if (Number(this.listType) === 0) {
					this.subCategoryList = this.searchArr
				} else if (Number(this.listType) === 1) {
					this.subCategoryList = this.hotDouyinArr
				} else if (Number(this.listType) === 2) {
					this.subCategoryList = this.popularArr
				} else if (Number(this.listType) === 3) {
					this.videourl = this.littleSisterArr[0]
					this.subCategoryList = this.littleSisterArr
				}
			},
			/* 获取列表 */
			getList() {
				if (this.page == 1) {
					uni.showLoading({
						title: "正在加载",
						mask: true
					})
				}
				new Promise((success, error) => {
					/* 此处为数据，请自行修改 */
					let getImgs = () => {
						let urls = [];
						for (let i = 0; i < 10; i++) {
							urls.push(`/static/images/douyin/${i}.jpg`);
						}
						return urls;
					}

					setTimeout(() => {
						success(getImgs())
					}, 500);
				}).then((data) => {
					uni.hideLoading();
					if (this.page == 1) {
						/* 关闭切换效果 */
						this.duration = 0;
						this.$nextTick(() => {
							this.dataList = data;
							/* 切换到轮播第0个 */
							this.activeIndex = 0;

							this.$nextTick(() => {
								/* 恢复切换效果 */
								this.duration = 300;
							})
						});
					} else {
						this.dataList = [...this.dataList, ...data];
					}
					this.page++;
				});

			},
			/* 切换监听 */
			onChange(e) {
				var index = e.detail.current;
				this.activeIndex = index;
				if(this.listType === 3){
					this.videourl = this.subCategoryList[this.activeIndex]
				}else{
					this.getVideoDetail(this.subCategoryList[this.activeIndex])
				}
				if (index == this.dataList.length - 3) {
					this.getList();
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../lib/global.scss";

	page,
	.swiper,
	.swiper-item {
		height: 100%;
	}

	/* 标题栏 */
	.title {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		padding-top: var(--status-bar-height);
		z-index: 10;
		background-color: rgba(255, 255, 255, 0.08);
		box-shadow: 0 0 10px rgba(255, 255, 255, 0.08);

		&>view {
			height: 44px;
		}

		.box1 {
			width: 100rpx;
			margin: 0 40rpx;
			font-size: 40rpx;
		}


		.tab {
			&>view {
				margin: 0 30rpx;
				line-height: 64rpx;
				font-size: 32rpx;
				position: relative;
				color: rgba(255, 255, 255, 0.5);
				letter-spacing: 2px;

				&.active {
					color: rgba(255, 255, 255, 1);

					&:after {
						content: '';
						display: block;
						height: 2px;
						position: absolute;
						width: 70%;
						background-color: #fff;
						border-radius: 1px;
						left: 15%;
						bottom: 0;
					}
				}
			}
		}
	}

	.test:hover {
		display: none;
	}

	.swiper .swiper-item {
		position: relative;
		background: #FFFFFF;
		overflow: hidden;

		&>image:nth-child(1) {
			display: block;
			width: 100%;
			height: 100%;
			box-sizing: content-box;
			padding: 40px 30px;
			position: absolute;
			z-index: 1;
			top: -40px;
			left: -30px;
			filter: blur(20px);
		}

		&>image:nth-child(2) {
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 2;
			top: 0;
			left: 0;
		}

		/* 添加阴影遮罩，增强文字显示 */
		&:after {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 65%;
			z-index: 3;
			background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
		}
	}

	.info-box {
		position: absolute;
		bottom: 80rpx;
		left: 50rpx;
		z-index: 4;
		color: #fff;
		width: 500rpx;
	}

	.sidebar {
		position: absolute;
		bottom: 100rpx;
		right: 50rpx;
		z-index: 5;
		color: #fff;
		text-align: center;

		.pic {
			margin-bottom: 20rpx;

			&>image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				border: #fff solid 1px;
			}
		}

		.like {
			font-size: 72rpx;
			margin-bottom: 20rpx;

			&>view {
				font-size: 20rpx;
				margin-top: 0;
			}
		}

		.read {
			font-size: 64rpx;
			margin-bottom: 80rpx;

			&>view {
				font-size: 20rpx;
				margin-top: -6rpx;
			}
		}

		.menu {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			border: rgba(0, 0, 0, 0.5) solid 14rpx;
			box-sizing: border-box;

			&>image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		/* 按钮点击缩放效果 */
		&>view {
			transition: transform 0.05s ease 0s;

			&:active {
				transform: scale(0.95, 0.95);
			}
		}
	}
</style>
