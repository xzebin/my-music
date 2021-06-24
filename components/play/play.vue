<template>
	<view class="">
		<view class="content">
			<view class="player-box">
				<view class="" style="display: flex;align-items: center;margin-bottom: 10rpx;">
					<image :src="currentImg" style="width: 100rpx;height: 100rpx;border-radius: 34rpx;margin-right: 20rpx;" mode=""></image>
					<view class="" style="font-size: 26rpx;">
						<p style="margin-right: 10px;">歌曲：{{ currentName }}</p>
						<p>歌手：{{ currentSonger }}</p>
					</view>
				</view>
				<view class="player-slider">
					<view class="player-currentTime">
						{{audioCurTime[0]}}:{{audioCurTime[1]}}
					</view>
					<slider class="slider" min="0" :max="duration" :value="currentTime" activeColor="#ccc" backgroundColor="#eee"
					 block-size="16" @change="changeProgress" />
					<view class="player-duration">
						<!-- 音频总时长用的是后端的数据，如果用innerAudioContext对象的duration在切换歌曲的时候会出现计算错误的情况 -->
						{{longth}}
						<!-- {{audioDuration[0]}}:{{audioDuration[1]}} -->
					</view>
				</view>
				<view class="play-bar">
					<view class="" @click='pre'>
						<text class="cuIcon-backwardfill" style="color: #ccc;"></text>
					</view>
					<view class="play-menu">
						<text class="cuIcon-playfill" style="color: #ccc;" :class="isPlay?'cuIcon-stop':'cuIcon-playfill'" @tap="playMusic"></text>
					</view>
					<view class="" @click='next'>
						<text class="cuIcon-play_forward_fill" style="color: #ccc;"></text>
					</view>
					<view class="" style="display: flex;align-items: center;">
						<image :src="changeImg[playType]" style="width: 50rpx;height: 50rpx;" mode="" @click="changeType"></image>
					</view>
					<view class="" style="display: flex;align-items: center;">
						<image src="../../static/list.png" style="width: 40rpx;height: 40rpx;" mode="" @click="viewPlayList"></image>
					</view>
				</view>
			</view>
		</view>
		<popup-layer ref="popupRef" :direction="'top'">
			<view class="" style="height: 50vh;overflow: auto;padding: 10px;">
				<h5 style="margin-bottom: 10px;">播放列表</h5>
				<view class="" v-if="audioData.length === 0" style="font-size: 28rpx;text-align: center;margin-top: 50%;transform: translateY(-50%);">
					列表空空，赶紧选歌吧！
				</view>
				<view class="content" style="font-size: 24rpx;" v-else>
					<view class="" @click="playItem" style="width: 100%;display: flex;margin-bottom: 40rpx;position: relative;" v-for="(item,index) in audioData" :key="index">
						<image :src="item.view_image" style="width: 80rpx;height: 80rpx;border-radius: 20rpx;margin-right: 20rpx;" mode=""></image>
						<view class="">
							<p style="margin-bottom: 16rpx;">歌曲：{{ item.name }}</p>
							<p>歌手：{{ item.singer }}</p>
						</view>
						<image  style="width: 50rpx;height: 50rpx;position: absolute;right: 0;" src="../../static/close.png" mode="" @click.stop="closeItem(item.id)"></image>
					</view>
				</view>
			</view>
			<view class="box" style="margin-bottom: 50px;">
				<view class="" @click="close" style="text-align: center;border-top: 1px solid #ccc;padding:20rpx 0;">
					<text>取消</text>
				</view>
			</view>
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '../popup-layer/popup-layer.vue'
	export default {
		data() {
			return {
				audioContext: uni.createInnerAudioContext(),
				currentImg: '',
				playType: 0,
				audioData: [],
				duration: '100',
				currentTime: '0',
				audioDuration: ['0', '00'],
				audioCurTime: ['0', '00'],
				longth: '',
				isPlay: false,
				timer: null,
				system: '',
				styleObj: {
					borderRadius: '50%',
					height: '80rpx',
					width: '80rpx',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%,-50% )',
					transformOrigin: 'center'
				},
				rotateTimer: null,
				rotateDeg: 0,
				currentName: '',
				currentIndex: 0,
				currentSonger: '',
				playList:[],
				changeImg: {
					0: require("../../static/cycle.png"),
					1: require("../../static/random.png"),
					2: require("../../static/single.png")
				}
			}
		},
		components: {
			popupLayer
		},
		created() {
			this.$EventBus.$on('getSong',(obj)=>{
				if(this.audioData.length === 0){
					this.audioData.push(obj)
					this.audioContext.autoplay = false;
					this.audioContext.src = this.audioData[0].file
					this.longth = this.audioData[0].longth
					this.system = uni.getSystemInfoSync().platform
					this.audioContext.onEnded((e) => {
						clearInterval(this.timer)
						clearInterval(this.rotateTimer)
						this.timer = null
						this.rotateTimer = null
						this.isPlay = false
						this.audioContext.seek(0);
						this.audioCurTime = ['0', '00']
						this.currentTime = '0'
					})
					this.currentName = this.audioData[0].name
					this.currentSonger = this.audioData[0].singer
					this.currentImg = this.audioData[0].view_image
					setTimeout(() => {
						var minutes = parseInt(this.audioContext.duration / 60, 10);
						var seconds = parseInt(this.audioContext.duration % 60);
						this.longth = minutes + ":" + seconds
					}, 500)
					this.playMusic()
				}else{
					this.audioData.push(obj)
				}
			})
			if(this.audioData.length > 0){
				this.audioContext.autoplay = false;
				this.audioContext.src = this.audioData[0].file
				this.longth = this.audioData[0].longth
				this.system = uni.getSystemInfoSync().platform
				this.audioContext.onEnded((e) => {
					clearInterval(this.timer)
					clearInterval(this.rotateTimer)
					this.timer = null
					this.rotateTimer = null
					this.isPlay = false
					this.audioContext.seek(0);
					this.audioCurTime = ['0', '00']
					this.currentTime = '0'
				})
				this.currentName = this.audioData[0].name
				this.currentSonger = this.audioData[0].singer
				this.currentImg = this.audioData[0].view_image
				setTimeout(() => {
					var minutes = parseInt(this.audioContext.duration / 60, 10);
					var seconds = parseInt(this.audioContext.duration % 60);
					this.longth = minutes + ":" + seconds
				}, 500)
			}
		},
		methods: {
			closeItem(id){
				this.audioData = this.audioData.filter(v => v.id !== id)
			},
			playItem(){
				console.log("点击歌曲")
			},
			viewPlayList() {
				this.$refs.popupRef.show();
			},
			close() {
				this.$refs.popupRef.close(); // 或者 boolShow = false
			},
			changeType() {
				if (this.playType === 2) {
					this.playType = 0
				} else {
					this.playType = this.playType + 1
				}
			},
			changeAudio(info) {
				this.currentTime = '0'
				this.isPlay = false
				clearInterval(this.timer)
				this.timer = null
				clearInterval(this.rotateTimer)
				this.rotateTimer = null
				this.longth = info.longth
				this.audioCurTime = ['0', '00']
				this.duration = info.longth.slice(0, 2) * 60 + parseInt(info.longth.slice(3, 6))
				this.audioContext.seek(0);
				this.currentName = info.name
			},
			next() {
				// next song function, the main thought of next song function is that we should find out the index of song which is playing. 
				// first of all , clear the timer and stop rotating cover, and then find out the index 
				clearInterval(this.rotateTimer)
				this.rotateTimer = null
				let src = this.audioContext.src
				//tips: (complex array may cause performance issues)
				this.audioData.filter((currentValue, index, arr) => {
					if (currentValue.file == src) {
						if (index + 1 >= arr.length) {
							this.currentIndex = 0
							clearInterval(this.timer)
							let timer = null
							this.isPlay = false;
							// once click next button , pause and reset playingtime 
							this.audioContext.seek(0);
							this.currentTime = '0'
							this.audioCurTime = ['0', '00']
							this.audioContext.src = this.audioData[0].file
							this.longth = this.audioData[0].longth
							this.currentName = this.audioData[0].name
							this.currentSonger = this.audioData[0].singer
							this.currentImg = this.audioData[0].view_image
						} else {
							this.currentIndex = index + 1
							clearInterval(this.timer)
							let timer = null
							this.isPlay = false;
							this.audioContext.seek(0);
							this.currentTime = '0'
							this.audioCurTime = ['0', '00']
							this.audioContext.src = this.audioData[index + 1].file
							this.longth = this.audioData[index + 1].longth
							this.currentName = this.audioData[index + 1].name
							this.currentSonger = this.audioData[index + 1].singer
							this.currentImg = this.audioData[index + 1].view_image
						}
						this.playMusic()
					} else {}
				});
			},
			pre() {
				clearInterval(this.rotateTimer)
				this.rotateTimer = null
				let src = this.audioContext.src
				this.audioData.filter((currentValue, index, arr) => {
					if (currentValue.file == src) {
						if (index == 0) {
							clearInterval(this.timer)
							let timer = null
							this.isPlay = false;
							this.audioContext.seek(0);
							this.currentTime = '0'
							this.audioCurTime = ['0', '00']
							this.audioContext.src = this.audioData[arr.length - 1].file
							this.longth = this.audioData[arr.length - 1].longth
							this.currentName = this.audioData[arr.length - 1].name
							this.currentSonger = this.audioData[arr.length - 1].singer
							this.currentImg = this.audioData[arr.length - 1].view_image
						} else {
							clearInterval(this.timer)
							let timer = null
							this.isPlay = false;
							this.audioContext.seek(0);
							this.currentTime = '0'
							this.audioCurTime = ['0', '00']
							this.audioContext.src = this.audioData[index - 1].file
							this.longth = this.audioData[index - 1].longth
							this.currentName = this.audioData[index - 1].name
							this.currentSonger = this.audioData[index - 1].singer
							this.currentImg = this.audioData[index - 1].view_image
						}
						this.playMusic()
					} else {}
				});
			},
			playMusic() {
				// reset duration time by clicking midbutton only
				let duration = this.audioContext.duration;
				let currentTime = this.audioContext.currentTime;
				this.duration = duration;
				this.currentTime = currentTime;
				this.audioCurTime[0] = Math.floor(Math.floor(currentTime) / 60);
				this.audioCurTime[1] = Math.floor(currentTime) % 60;
				if (this.isPlay) {
					this.isPlay = false;
					clearInterval(this.timer)
					clearInterval(this.rotateTimer)
					this.timer = null
					this.rotateTimer = null
					this.audioContext.pause();
				} else {
					this.isPlay = true;
					this.rotateTimer = setInterval(() => {
						this.rotateDeg++
						this.styleObj.transform = `translate(-50%,-50%) rotate(${this.rotateDeg}deg)`
					}, 50)
					this.audioContext.play();
					this.timer = setInterval(() => {
						this.currentTime++
						if (this.audioCurTime[1] > 58) {
							this.audioCurTime[0]++
							this.audioCurTime[1] = 0
							this.audioCurTime[1]++
						} else {
							this.audioCurTime[1]++
						}
					}, 1000)
				}
				setTimeout(() => {
					var minutes = parseInt(this.audioContext.duration / 60, 10);
					var seconds = parseInt(this.audioContext.duration % 60);
					this.longth = minutes + ":" + seconds
				}, 500)
			},
			changeProgress(e) {
				// ios 拖动slider 会出现漂移，定位不准，苹果暂时用拖动时暂停播放来规避
				// ios pause music when dragging , Android could still play
				this.audioContext.seek(e.detail.value);
				// pause music when dragging , in order to load timer repeatly
				if (this.system == 'ios') {
					this.audioCurTime[0] = Math.floor(Math.floor(e.detail.value) / 60);
					this.audioCurTime[1] = Math.floor(e.detail.value) % 60;
					clearInterval(this.timer)
					clearInterval(this.rotateTimer)
					this.timer = null
					this.rotateTimer = null
					this.isPlay = false
					this.audioContext.pause();
				} else {
					clearInterval(this.timer)
					clearInterval(this.rotateTimer)
					this.timer = null
					this.rotateTimer = null
					this.isPlay = false;
					this.playMusic()
				}
			}
		}
	}
</script>

<style>
	@import url("../../colorui/main.css");
	@import url("../../colorui/icon.css");
	@import url("./index.css");
</style>
