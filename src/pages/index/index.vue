<template>
	<view class="content">

		<scroll-panel></scroll-panel>

<!--		<img class="logo" src="/static/logo.png" />-->

	</view>
</template>

<script>

	// import Navigation from '@/components/Navigation/Navigation.vue';

	import scrollPanel from '@/components/ScrollPanel/ScrollPanel.vue';

	export default {
		data() {
			return {
				title: 'Hello2'
			}
		},

		components : {scrollPanel},

		onNavigationBarButtonTap(obj){
			let index = obj.index;
			switch (index) {
				case 0:
					this.openCamera();
					break;
				case 1:
					uni.navigateTo({
						url: '/pages/post/post',
						success : result => {
							console.log('result', result);
						},
						fail : msg =>{
							console.log('msg', msg);
						}
					});
					console.log('hello');
					break;
			}
		},

		onLoad() {

			this.checkApp();

			this.checkPage();
		},


		created (){
			uni.getSystemInfo({
				success (obj){
					console.log('obj',obj);
				}
			})

		},

		methods: {

			openCamera(){
				let camera = plus.camera.getCamera(1);
				camera.captureImage();
			},


			checkApp (){
				console.log('global',global);
				const app = getApp();
				console.log('app-->',app);
				console.log('data-->',app.globalData);
				console.log('$scope-->',this.$scope);
			},


			checkPage (){
				const page = getCurrentPages();
				console.log('page-->',page[0]);

				// let webView = page[0].$getAppWebview();
				let route = page[0].route;
				// console.log('webview',webView);
				console.log(route);
				const currentView = this.$scope.$getAppWebview();
				this.title = currentView;
			},

		}

	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}


	page,.main{
		width: 100%;
		height: 100%;
	}



</style>
