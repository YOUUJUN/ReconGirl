<template>
    <view>


        <movable-area>
            <movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>
        </movable-area>



<!--        <view >-->
<!--            <button type="warn" @click="chooseImg" >选择图片</button>-->
<!--        </view>-->
<!--        <gmy-img-cropper-->
<!--                ref="gmyImgCropper"-->
<!--                quality="0.5"-->
<!--                cropperType="free"-->
<!--                fileType="jpg"-->
<!--                imgSrc=""-->
<!--                @getImg="getImg"-->
<!--        ></gmy-img-cropper>-->
    </view>
</template>

<script>
    import gmyImgCropper from '@/components/gmy-img-cropper/gmy-img-cropper.vue'
    export default {
        components:{
            gmyImgCropper
        },
        data() {
            return {
                x: 0,
                y: 0,
                scale: 2,
                old: {
                    x: 0,
                    y: 0,
                    scale: 2
                }
            }
        },
        methods: {
            chooseImg:function(){
                // 调用实例的chooseImg方法，拉起图片选择界面，待图片选择完毕后直接进入图片截取界面
                this.$refs.gmyImgCropper.chooseImage();
            },

            // 点击完成时，返回截取图片的临时路径
            getImg:function(e){
                console.log("父页面拿到了图片",e);
                this.imgCropperShow = false;
            },

            tap: function(e) {
                // 解决view层不同步的问题
                this.x = this.old.x
                this.y = this.old.y
                this.$nextTick(function() {
                    this.x = 30
                    this.y = 30
                })
            },
            tap2() {
                // 解决view层不同步的问题
                this.scale = this.old.scale
                this.scale = this.old.scale
                this.$nextTick(function() {
                    this.scale = 3
                })
            },
            onChange: function(e) {
                this.old.x = e.detail.x
                this.old.y = e.detail.y
            },
            onScale: function(e) {
                this.old.scale = e.detail.scale
            }
        }
    }
</script>

<style>
</style>

<style>
    movable-view {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150rpx;
        width: 150rpx;
        background-color: #007AFF;
        color: #fff;
    }

    movable-area {
        height: 300rpx;
        width: 100%;
        background-color: #D8D8D8;
        overflow: hidden;
    }

    .max {
        width:500rpx;
        height: 500rpx;
    }
</style>
