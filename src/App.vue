<script>
	export default {

	    globalData : {
	        text : 'text'
        },

		onLaunch() {
            uni.onTabBarMidButtonTap((options) => {
                console.log('options');
                setTimeout(()=>{
                    uni.navigateTo({
                        url: '/pages/post/post',
                        success : result => {
                            console.log('result', result);
                        },
                        fail : msg =>{
                            console.log('msg', msg);
                        }
                    });
                },0)
            })

		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		},
        onError(){

        },

        onReady (){
            uni.onTabBarMidButtonTap((options) => {
                console.log('well->now mid btn is taped', options);


            })
        },

        onUniNViewMessage(){

        },

        onUnhandledRejection(){

        },

        onPageNotFound(){

        },

        onThemeChange(){

        },


        methods : {

        }

	}
</script>

<style>
	/*每个页面公共css */

    @import 'assets/uni.css';
    @import 'assets/youjun_base_app.css';

    @import "assets/iconfont/iconfont.css";

    /* H5 兼容 pc 所需 */
    /* #ifdef H5 */
    @media screen and (min-width: 768px) {
        body{
            overflow-y: scroll;
        }
    }

    /*---rewrite swiper---*/

    uni-swiper .uni-swiper-wrapper {
        overflow: visible;
        position: relative;
        width: 100%;
        height: 100%;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    uni-swiper .uni-swiper-dots-horizontal {
        left: 50%;
        bottom: -18px;
        text-align: center;
        white-space: nowrap;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
    }

    uni-swiper-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /*.uni-scroll-view-content{*/
    /*    display: flex;*/
    /*    flex-wrap: wrap;*/
    /*}*/

</style>
