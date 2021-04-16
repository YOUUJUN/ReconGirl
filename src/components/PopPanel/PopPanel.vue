<template>

    <div id="panel">

        <div class="sharer-container">

            <div class="sharer-header">

                <a class="user-img">
                    <img src="/static/youjun.jpg">
                </a>

                <div class="user-info">

                    <ul class="user-info-list">
                        <li><a class="user-name">YOUJUN</a></li>
<!--                        <li><span class="user-post-time">2021/4/10</span></li>-->
                    </ul>

                </div>


            </div>

<!--            <div class="yj-divider"></div>-->

            <div class="sharer-content">

                <img src="/static/killa.jpg">

            </div>

<!--            <div class="yj-divider"></div>-->

            <div class="sharer-foot">

                <h3 class="content-description">
                    <span class="content-name">Human digestive system</span>
                    <span class="content-description-btn"><i class="fa fa-angle-down"></i></span>
                </h3>

                <div class="content-view-info">
                    <span>878万次观看</span><span style="margin:8rpx;">•</span><span>11个月前</span>
                </div>

                <div class="sharer-comments">



                </div>

            </div>

            <div class="yj-divider"></div>


        </div>

    </div>

</template>


<script>

    export default {
        data (){

        },


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
        padding:8rpx 0;
    }

    .user-img{
        margin-left: 28rpx;
    }

    .user-img img {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        margin-right: 22rpx;
        width: 120rpx;
        height: 120rpx;
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
        color: rgba(0,0,0,0.6);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 520rpx;
    }

    .user-info .user-name{
        font-size: 34rpx;
        font-weight: 600;
        font-family: -apple-system,PingFang sC,Hiragino sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
        color:rgba(0,0,0,0.6);
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
