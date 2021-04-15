<script>
	export default {

	    globalData : {
	        text : 'text'
        },

		onLaunch() {
			console.log('App Launch')
		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		},
        onError(){

        },

        onUniNViewMessage(){

        },

        onUnhandledRejection(){

        },

        onPageNotFound(){

        },

        onThemeChange(){

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

</style>
