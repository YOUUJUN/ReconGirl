<template>

    <view id="panel">

        <view class="sharer-container">

            <view class="sharer-header">

                <view class="sharer-header-left">

                    <navigator class="user-img" href="javascript:void(0);">
                        <image src="@/static/youjun.jpg" @click="test">
                    </navigator>

                    <view class="user-info">

                        <ul class="user-info-list">
                            <li><navigator class="user-name">YOUJUN</navigator></li>
                            <!--                        <li><text class="user-post-time">2021/4/10</text></li>-->
                        </ul>

                    </view>

                </view>


                <button class="yj-btn-icon" style="margin-right:18rpx;">
                    <text class="iconfont icon-gengduo"></text>
                </button>

            </view>

<!--            <view class="yj-divider"></view>-->

            <view class="sharer-content">

                <image src="@/static/killa.jpg" mode="aspectFill">

            </view>

<!--            <view class="yj-divider"></view>-->

            <view class="sharer-foot">

                <view class="sharer-operator">

                    <view class="sharer-operator-left">

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-aixin"></text>
                        </button>

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-pinglun1"></text>
                        </button>

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-fenxiang"></text>
                        </button>

                    </view>


                </view>

<!--                <h3 class="content-description">-->
<!--                    <text class="content-name">Human digestive system</text>-->
<!--                    <text class="content-description-btn"><i ref="icon" class="fa fa-angle-down"></i></text>-->
<!--                </h3>-->

                <view class="content-view-info">
                    <text class="count">878万</text><text>次赞</text>
                </view>

                <view class="sharer-comments">

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">YOUJUN</text>
                        <text class="sharer-comments-content">{{title}}</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">LVNDMARK</text>
                        <text class="sharer-comments-content">Let's go kill some killa</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">ERIC</text>
                        <text class="sharer-comments-content">Well, this is a test message, this is a test message,this is a test message, this is a test message</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>


                </view>

                <view class="sharer-time">
                    <text>11个月前</text>
                </view>

            </view>

            <view class="yj-divider"></view>


        </view>

        <view class="sharer-container">

            <view class="sharer-header">

                <view class="sharer-header-left">

                    <navigator class="user-img" href="javascript:void(0);">
                        <image src="@/static/youjun.jpg" @click="test">
                    </navigator>

                    <view class="user-info">

                        <ul class="user-info-list">
                            <li><navigator class="user-name">YOUJUN</navigator></li>
                            <!--                        <li><text class="user-post-time">2021/4/10</text></li>-->
                        </ul>

                    </view>

                </view>


                <button class="yj-btn-icon" style="margin-right:18rpx;">
                    <text class="iconfont icon-gengduo"></text>
                </button>

            </view>

            <!--            <view class="yj-divider"></view>-->

            <view class="sharer-content">

                <image src="@/static/judy.jpg" mode="aspectFill">

            </view>

            <!--            <view class="yj-divider"></view>-->

            <view class="sharer-foot">

                <view class="sharer-operator">

                    <view class="sharer-operator-left">

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-aixin"></text>
                        </button>

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-pinglun1"></text>
                        </button>

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-fenxiang"></text>
                        </button>

                    </view>


                </view>

                <!--                <h3 class="content-description">-->
                <!--                    <text class="content-name">Human digestive system</text>-->
                <!--                    <text class="content-description-btn"><i ref="icon" class="fa fa-angle-down"></i></text>-->
                <!--                </h3>-->

                <view class="content-view-info">
                    <text class="count">878万</text><text>次赞</text>
                </view>

                <view class="sharer-comments">

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">YOUJUN</text>
                        <text class="sharer-comments-content">{{title}}</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">LVNDMARK</text>
                        <text class="sharer-comments-content">Let's go kill some killa</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">ERIC</text>
                        <text class="sharer-comments-content">Well, this is a test message, this is a test message,this is a test message, this is a test message</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>


                </view>

                <view class="sharer-time">
                    <text>11个月前</text>
                </view>

            </view>

            <view class="yj-divider"></view>


        </view>

        <view class="sharer-container">

            <view class="sharer-header">

                <view class="sharer-header-left">

                    <navigator class="user-img" href="javascript:void(0);">
                        <image src="@/static/youjun.jpg" @click="test">
                    </navigator>

                    <view class="user-info">

                        <ul class="user-info-list">
                            <li><navigator class="user-name">YOUJUN</navigator></li>
                            <!--                        <li><text class="user-post-time">2021/4/10</text></li>-->
                        </ul>

                    </view>

                </view>


                <button class="yj-btn-icon" style="margin-right:18rpx;">
                    <text class="iconfont icon-gengduo"></text>
                </button>

            </view>

            <!--            <view class="yj-divider"></view>-->

            <view class="sharer-content">

<!--                <image src="@/static/killa.jpg">-->
                <image-sharer></image-sharer>

            </view>

            <!--            <view class="yj-divider"></view>-->

            <view class="sharer-foot">

                <view class="sharer-operator">

                    <view class="sharer-operator-left">

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-aixin"></text>
                        </button>

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-pinglun1"></text>
                        </button>

                        <button class="yj-btn-icon">
                            <text class="iconfont icon-fenxiang"></text>
                        </button>

                    </view>


                </view>

                <!--                <h3 class="content-description">-->
                <!--                    <text class="content-name">Human digestive system</text>-->
                <!--                    <text class="content-description-btn"><i ref="icon" class="fa fa-angle-down"></i></text>-->
                <!--                </h3>-->

                <view class="content-view-info">
                    <text class="count">878万</text><text>次赞</text>
                </view>

                <view class="sharer-comments">

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">YOUJUN</text>
                        <text class="sharer-comments-content">{{title}}</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">LVNDMARK</text>
                        <text class="sharer-comments-content">Let's go kill some killa</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>

                    <view class="sharer-comments-item">
                        <text class="sharer-comments-user">ERIC</text>
                        <text class="sharer-comments-content">Well, this is a test message, this is a test message,this is a test message, this is a test message</text><text class="sharer-comments-postfix">{{postfix}}</text>
                    </view>


                </view>

                <view class="sharer-time">
                    <text>11个月前</text>
                </view>

            </view>

            <view class="yj-divider"></view>


        </view>

    </view>

</template>


<script>

    import ImageSharer from '../ImageSharer/ImageSharer.vue';

    export default {
        data (){
            return {
                title : 'just test',
                content : 'sasasaa',
                postfix : '...更多'
            }
        },

        components : {ImageSharer},

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
        margin-bottom : 42rpx;
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
    }

    .sharer-operator{
        padding: 0 14rpx;
    }

    .sharer-operator-left .iconfont{
        font-size: 50rpx;
        margin : 10rpx;
    }

    .user-img{
        margin-left: 28rpx;
        margin-right: 12rpx;
    }

    .user-img image {
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
        width : 100%;
        border-top: 2rpx solid rgba(0,0,0,0.1);
    }

    .sharer-content image{
        width:100%;
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
        padding: 0 32rpx;
    }

    .content-view-info .count {
        color : rgba(0,0,0,0.8);
        font-weight: 600;
        margin-right: 8rpx;
    }


    /*---comments---*/

    .sharer-comments{
        display: flex;
        flex-direction: column;
        padding: 13rpx 32rpx;
    }

    .sharer-comments-user{
        font-size: 28rpx;
        font-weight: 600;
        font-family: -apple-system,PingFang sC,Hiragino sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
        color:rgba(0,0,0,0.9);
        margin-right:16rpx;
    }

    .sharer-comments-content{
        font-size: 28rpx;
        font-weight: 500;
        font-family: -apple-system,PingFang sC,Hiragino sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
        color:rgba(0,0,0,0.6);
    }

    .sharer-comments-postfix{
        color:rgba(0,0,0,0.3);
        font-size: 28rpx;
        margin-left:6rpx;
    }


    /*---time---*/

    .sharer-time{
        color:rgba(0,0,0,0.3);
        font-size: 24rpx;
        padding: 0 32rpx;
    }



</style>
