<template>
    <list class="page" :bounce="false" fixFreezing="true">
        <cell>
            <view id="head" class="header">

                <movable-area>
                    <movable-view :x="x" :y="y" direction="all" inertia="false" scale="true" animation="false" @change="onChange">
                        <img src="static/killa.jpg">
                    </movable-view>
                </movable-area>

            </view>
        </cell>

        <cell>
            <view class="photo-picker" :style="'height:' + pageHeight + 'px'">

                <div class="photo-picker-header">

                    <view class="example-body">

                        <com-box :candidates = "dirList">图库</com-box>

                        <button @click="openFile">点我</button>

                    </view>

                </div>

                <div class="photo-picker-body">

                    <scroll-view class="picker-content" scroll-y="true">

                        <view class="scroll-view-item picker-row" v-for="item of currentImgs"  :style="'width :'+imgSize+'px;height:' + imgSize + 'px;'">
                            <img class="picker-img" :src="item.url">
                        </view>


                        <view class="scroll-view-item picker-row" v-for="item of 100"  :style="'width :'+imgSize+'px;height:' + imgSize + 'px;'">
                            <img class="picker-img" src="static/judy.jpg">
                        </view>


                    </scroll-view>

                </div>

            </view>
        </cell>

    </list>
</template>

<script>
    // #ifdef APP-PLUS
    const dom = weex.requireModule('dom');
    // #endif

    import swiperPage from './swiper-page.vue';
    import ComBox from '@/components/ComBox/ComBox.vue';

    export default {
        components: {
            swiperPage,
            ComBox
        },

        data() {
            return {
                dirList: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
                pageHeight: 300,
                imgSize : 170,
                currentImgs : [],

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

        onLoad() {
            this.getImg();
        },
        onReady() {
            this.pageHeight = uni.getSystemInfoSync().windowHeight;
            this.imgSize = uni.getSystemInfoSync().windowWidth / 4;
        },
        methods: {
            ontabtap(e) {


            },

            openFile(){
                let callback = plus.gallery.pick((result)=>{
                    console.log('result',result);
                },(reject)=>{

                }, {
                    editable : true,
                    multiple : true
                });

                console.log('callback==>',callback);
            },

            getImg(){
                var publicDoc = plus.io.PUBLIC_DOCUMENTS;
                var privateDoc = plus.io.PRIVATE_DOC;
                var localDoc = "file:///storage/emulated/0/Pictures";
                console.log('privateDoc=>',privateDoc);
                var FileSystem = plus.io.resolveLocalFileSystemURL(localDoc, (fs) => {
                    console.log('fs',fs);
                    var directoryReader = fs.createReader();
                    console.log('directoryReader',directoryReader);
                    directoryReader.readEntries( ( entries ) => {
                        console.log('entries',entries);
                        let fileReader = entries[12].createReader();
                        fileReader.readEntries((files) =>{
                            console.log('files==>',files);
                            console.log('this==>',this);
                            this.setImgData(files);
                        })
                    })

                },(err) => {
                    console.log(err);
                });

            },

            setImgData (data){

                let imgs = [];
                console.log('length',data.length);
                for(let item of data){
                    let obj = {
                        url : item.fullPath
                    };
                    imgs.push(obj);
                }

                this.currentImgs = imgs;
                console.log('currentImgs',this.currentImgs);
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


    .header {
        height: 600rpx;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #f4f4f4;
    }

    .header-title {
        font-size: 30px;
        font-weight: bold;
        color: #444;
    }


    .photo-picker {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background-color: #ffffff;
    }

    /* #ifndef APP-NVUE */
    .tab-bar ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
    }

    .photo-picker-header{
        display: flex;
        flex: 0;
        padding: 10rpx 30rpx;
        flex-direction: row;
        align-content: center;
        align-items: center;
    }

    .photo-picker-body{
        position: relative;
        flex: 1;
    }

    .picker-content{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    /deep/ .uni-scroll-view-content{
        display: flex;
        flex-wrap: wrap;
    }

    /deep/ .uni-combox__input-box .uni-scroll-view-content{
        display: flex;
        flex-direction: column;
    }

    .picker-row{
        display: inline-block;
    }

    .picker-img{
        box-sizing: border-box;
        width:100%;
        height:100%;
        padding: 0.5px;
    }


    /*--可缩放视图--*/
    movable-view {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        width: auto;
        background-color: #007AFF;
        color: #fff;
        /*transition: all .3s;*/
    }

    movable-area {
        height: 600rpx;
        width: 100%;
        background-color: #fafafa;
        overflow: hidden;
    }

    .max {
        width:500rpx;
        height: 500rpx;
    }

</style>
