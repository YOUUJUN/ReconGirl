<template>

    <div id="panel">

        <div class="sharer-container">

            <div class="sharer-header">

                <div class="sharer-header-left">

                    <a class="user-img" href="javascript:void(0);">
                        <img src="static/youjun.jpg" @click="test">
                    </a>

                    <div class="user-info">

                        <ul class="user-info-list">
                            <li><a class="user-name">YOUJUN</a></li>
                            <!--                        <li><span class="user-post-time">2021/4/10</span></li>-->
                        </ul>

                    </div>

                </div>


                <button class="yj-btn-icon" style="margin-right:18rpx;">
                    <span class="iconfont icon-gengduo"></span>
                </button>

            </div>

<!--            <div class="yj-divider"></div>-->

            <div class="sharer-content">

                <img src="static/killa.jpg">

            </div>

<!--            <div class="yj-divider"></div>-->

            <div class="sharer-foot">

                <div class="sharer-operator">

                    <div class="sharer-operator-left">

                        <button class="yj-btn-icon">
                            <span class="iconfont icon-aixin"></span>
                        </button>

                        <button class="yj-btn-icon">
                            <span class="iconfont icon-pinglun1"></span>
                        </button>

                        <button class="yj-btn-icon">
                            <span class="iconfont icon-fenxiang"></span>
                        </button>

                    </div>


                </div>


                <h3 class="content-description">
                    <span class="content-name">Human digestive system</span>
                    <span class="content-description-btn"><i ref="icon" class="fa fa-angle-down"></i></span>
                </h3>

                <div class="content-view-info">
                    <span>878万次观看</span><span style="margin:8rpx;">•</span><span>11个月前</span>
                </div>

                <div class="sharer-comments">

                    <span>{{title}}</span>

                </div>

            </div>

            <div class="yj-divider"></div>


        </div>

    </div>

</template>


<script>

    export default {
        data (){
            return {
                title : 'just test'
            }
        },

        methods : {
            test(){
                this.title = 'now I am changed';
                console.log('just a test', this.$refs['icon']);
                this.$axios({
                    url: "/test",
                    method: "POST"
                }).then(msg => {
                    console.log('ok');
                }).catch(err => {
                    console.log(err);
                })

            }
        }


    }


</script>


<style>
    #panel{
        width:100%;
        display: flex;
        flex-direction: column;
        margin:22rpx 0;
    }

    .sharer-container{
        display : flex;
        flex-direction : column;
    }

    .sharer-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .sharer-header-left{
        display: flex;
        flex-direction: row;
        padding:8rpx 0;
    }

    .sharer-operator-left .iconfont{
        font-size: 50rpx;
    }

    .user-img{
        margin-left: 28rpx;
        margin-right: 12rpx;
    }

    .user-img img {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        border: 3rpx solid #fff;
        -webkit-box-shadow: 0 3rpx 13rpx 0 rgba(0,0,0,.15);
        box-shadow: 0 5rpx 13rpx 0 rgba(0,0,0,.15);
    }


    .user-info{
        height:100%;
    }

    .user-info-list{
        list-style: none;
        padding: 0;
        margin: 0 0 0 22rpx;
    }

    .user-info-list li{
        display:flex;
        margin-bottom: 22rpx;
    }

    .user-introduction{
        color: rgba(0,0,0,0.9);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 520rpx;
    }

    .user-info .user-name{
        font-size: 28rpx;
        font-weight: 600;
        margin-top:16rpx;
        font-family: -apple-system,PingFang sC,Hiragino sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
        color:rgba(0,0,0,0.8);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .user-name:hover{
        text-decoration: none;
        color:#409eff;
    }


    /*---content----*/

    .sharer-content{
        /*height : 520rpx;*/
        width : 100%;
    }

    .content-description{
        display: flex;
        flex-direction: row;
        justify-content : space-between;
        font-size: 42rpx;
        line-height: 64rpx;
        padding: 13rpx 32rpx;
    }

    .content-description-btn{
        font-size: 50rpx;
        line-height: 0;
        color : rgba(0,0,0,0.7);
        padding:0 8rpx;
        border-radius: 50%;
    }

    .content-view-info{
        color : rgba(0,0,0,0.6);
        font-size: 26rpx;
        padding: 13rpx 32rpx;
    }


</style>
