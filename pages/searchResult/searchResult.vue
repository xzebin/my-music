<template>
	<view style="padding: 30rpx;">
		<h5 style="margin-bottom: 40rpx;">搜索结果如下，总共搜到了{{ searchResult.length }}条关于【{{ search }}】的记录</h5>
		<view class="song-item" v-for="(item,index) in searchResult" :key="index" style="display: flex;justify-content: space-between;align-items: center;margin-top: 20rpx;font-size: 28rpx;">
			<view class="left" style="display: flex;font-size: 26rpx;">
				<image style="width: 120rpx;height: 124rpx;margin-right: 20rpx;" :src="item.artists[0].img1v1Url" mode=""></image>
				<view class="content">
					<p style="margin-bottom: 10rpx;width: 380rpx;">歌曲：{{ item.name }}</p>
					<p style="margin-bottom: 10rpx;width: 380rpx;">专辑：{{ item.album.name }}</p>
					<p style="margin-bottom: 10rpx;width: 380rpx;">时长：{{ ( item.duration / 1000 ) / 60 }}</p>
					<p>歌手：{{ item.artists[0].name }}</p>
				</view>
			</view>
			<view class="right">
				<image style="width: 40rpx;height: 40rpx;margin-right: 40rpx;" @click="playSong(item)" src="../../static/images/Play.png"
				 mode=""></image>
				<image style="width: 40rpx;height: 40rpx;" src="../../static/list.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				searchResult: []
			}
		},
		methods: {
			playSong(item) {
				console.log(item)
				this.$request.httpRequest({
					url: `playUrl?id=` + item.id,
					method: 'delete'
				}).then((res) => {
					let tempObj = {
						file: res.data[0].url,
						name: item.name,
						singer: item.artists[0].name,
						longth: '00:00',
						view_image: item.artists[0].img1v1Url,
						id: item.id
					}
					this.$EventBus.$emit('playSong',tempObj)
					uni.switchTab({
						url:'../index/index'
					})
				})
			},
		},
		onLoad(opt) {
			this.search = opt.search
			this.$request.httpRequest({
				url: `searchSong?search=` + this.search
			}).then((res) => {
				console.log('res', res.result.songs)
				this.searchResult = res.result.songs
			})
		}
	}
</script>

<style>

</style>
