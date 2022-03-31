<template>

    <view class="uni-margin-wrap">
        <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
            <swiper-item>
                <image src="@/static/killa.jpg" class="swiper-item">
            </swiper-item>
            <swiper-item>
                <image src="@/static/judy.jpg" class="swiper-item">
            </swiper-item>
            <swiper-item>
                <image src="@/static/judy.jpg" class="swiper-item">
            </swiper-item>
        </swiper>
    </view>

</template>

<script>
    export default {
        name: "ImageSharer",
        data() {
            return {
                background: ['color1', 'color2', 'color3'],
                indicatorDots: true,
                autoplay: false,
                interval: 2000,
                duration: 500
            }
        },
    }

</script>

<style scoped>

    .uni-margin-wrap {
        width:100%;
    }
    .swiper {
        height: 600rpx !important;
        min-height: 600rpx;
    }
    .swiper-item {
        display: block;
        width : 100%;
        height: auto;
    }

    .swiper-item image{
        width:100%;
    }

</style>

