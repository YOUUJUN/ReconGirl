<template>
    <view class="container">
        <view class="cropper-wrap">
            <image-cropper
                    id="image-cropper"
                    ref="cropper"
                    :zoom="1"
                    :angle="0"
                    :max-zoom="3"
                    :min-zoom="1"
                    :src="src"
                    :disablePreview = false
                    :imageCenter = true
                    :fit = true
            />
        </view>
        <view class="ctrls-wrap">
            <view class="ctrl" @click="showDrawer('showLeft')">图库</view>
            <uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
                <view class="close">
                    <view class="word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70" @click="closeDrawer('showLeft')">
                        <text class="word-btn-white">关闭Drawer</text>
                    </view>



                </view>
            </uni-drawer>

            <view class="ctrl" @tap="selectImg">上传图片</view>
            <view class="ctrl" @tap="changeImg">图片模式</view>
            <view class="ctrl" @tap="cutImg">裁剪图片</view>
        </view>

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
</template>
<script>
    import ImageCropper from '@/components/post-cropper/post-cropper.vue'
    // import ImageCropper from '@/components/uniapp-nice-cropper-mode-1/cropper.vue'
    // import ImageCropper from '@/components/kd/cropper/cropper.vue'


    export default {
        components: {
            ImageCropper,
        },
        data() {
            return {
                imgSize: 170,
                currentImgs: [],
                pageHeight : "auto",

                src: '',
                img: '',
                ctrl : false,
            }
        },

        onReady(){
            // this.pageHeight = uni.getSystemInfoSync().windowHeight + 'px';
            this.imgSize = uni.getSystemInfoSync().windowWidth / 4;
        },

        onLoad() {
            this.getImg();
        },
        methods: {
            load(path, info) {
                // console.log(path, info)
                // setTimeout(() => {
                //     // 0.5秒钟后自动旋转45度
                //     // this.$refs.cropper.setRotate(45)
                // }, 500)
            },
            beforeDraw(context, transform) {
                // context.setFillStyle('yellow')
                // transform.zoom = 2
            },
            afterDraw(ctx, info) {
                // ctx.setFillStyle('red')
                // ctx.fillText('我是一行小水印', info.width - 100, info.height - 20)
            },
            cropped(e) {
                console.log(e)
                this.img = e
            },
            errHandle(e) {
                console.log('图片加载失败了')
            },
            selectImg() {
                uni.chooseImage({
                    count: 1,
                    sizeType: ['original'],
                    sourceType: ['album', 'camera'],
                    success: res => {
                        var tempFilePaths = res.tempFilePaths
                        this.src = tempFilePaths[0]
                    }
                })
            },

            changeImg(){
                if(this.ctrl){
                    this.$refs['cropper'].initImage();
                    this.ctrl = false;
                }else{
                    this.$refs['cropper'].initImage2();
                    this.ctrl = true;
                }


            },

            cutImg(){
                this.$refs['cropper'].draw();
            },




            getImg() {
                var publicDoc = plus.io.PUBLIC_DOCUMENTS;
                var privateDoc = plus.io.PRIVATE_DOC;
                var localDoc = "file:///storage/emulated/0/Pictures";
                let canvasDoc = "_doc";
                console.log('privateDoc=>', privateDoc);


                plus.io.resolveLocalFileSystemURL(localDoc, (fs) => {
                    console.log('fs', fs);

                    fs.getDirectory("youjun", {create: true, exclusive: false}, (dir) => {
                        console.log("Directory Entry Name: ", dir);
                    }, (err) => {
                        console.log('err==>', err);
                    });

                    var directoryReader = fs.createReader();
                    directoryReader.readEntries((entries) => {
                        console.log('entries++>', entries);
                    })

                }, (err) => {
                    console.log(err);
                });


                let sys = plus.io.requestFileSystem(privateDoc, (res) => {
                    console.log("res ==>", res)
                    var fullPath = res.root.fullPath;

                    plus.io.resolveLocalFileSystemURL("_doc", (fs) => {
                        console.log('fs==>', fs);
                        var directoryReader = fs.createReader();
                        directoryReader.readEntries((entries) => {
                            console.log('entries2==>', entries);
                            let fileReader = entries[0].createReader();
                            console.log('fileReader', fileReader);
                            fileReader.readEntries((files) => {
                                console.log('files==>', files);
                                console.log('this==>', this);
                                this.setImgData(files);
                            })
                        })
                    })

                }, (err) => {
                    console.error(err);
                });


                // var FileSystem = plus.io.resolveLocalFileSystemURL(localDoc, (fs) => {
                //     console.log('fs',fs);
                //     var directoryReader = fs.createReader();
                //     console.log('directoryReader',directoryReader);
                //     directoryReader.readEntries( ( entries ) => {
                //         console.log('entries',entries);
                //         let fileReader = entries[12].createReader();
                //         fileReader.readEntries((files) =>{
                //             console.log('files==>',files);
                //             console.log('this==>',this);
                //             this.setImgData(files);
                //         })
                //     })
                //
                // },(err) => {
                //     console.log(err);
                // });

            },



            /*--图库抽屉--*/
            showDrawer(e) {
                this.$refs[e].open()
            },
            // 关闭窗口
            closeDrawer(e) {
                this.$refs[e].close()
            },
            // 抽屉状态发生变化触发
            change(e, type) {
                console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
                this[type] = e
            },


        }
    }
</script>
<style>
    page {
        height: 100%;
        /*overflow: hidden;*/
        background: #fafafa;
        /* #ifdef MP-ALIPAY */
        /*position: absolute;*/
        width: 100%;
        /* #endif */
    }



    /*--下拉--*/
    .photo-picker-body{
        position: relative;
        height:100%;
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
</style>
<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        & .cropper-wrap {
            // flex: 1;
            height: 700rpx;
        }
        & .ctrls-wrap {
            display: flex;
            color: rgba(0,0,0,0.6);
            font-size: 34rpx;
            text-align: center;
            line-height: 96rpx;
            border-bottom: 1px solid #FFF;
            height: 96rpx;
            & .ctrl {
                flex: 1;
                flex-basis: 0;
            }
        }
    }
</style>
