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
<!--            <view class="ctrl" @click="statusChange">图库</view>-->
<!--            <view class="ctrl" @tap="selectImg">上传图片</view>-->
<!--            <view class="ctrl" @tap="changeImg">图片模式</view>-->
<!--            <view class="ctrl" @tap="cutImg">裁剪图片</view>-->
            <u-button class="ctrlBtn" @click="statusChange" :ripple="true" :hairLine="false" :type="'default'">图库</u-button>
            <u-button class="ctrlBtn" @click="selectImg" :ripple="true" :hairLine="false" :type="'default'">选择图片</u-button>
            <u-button class="ctrlBtn" @click="changeImg" :ripple="true" :hairLine="false" :type="'default'">图片模式</u-button>
            <u-button class="ctrlBtn" @click="cutImg" :ripple="true" :hairLine="false" :type="'default'">裁剪图片</u-button>
        </view>

        <view class="photo-picker-body">

            <scroll-view class="picker-content" scroll-y="true">

<!--                <radio-group @change="radioChange">-->
<!--                    <view class="scroll-view-item picker-row"  :style="'width :'+imgSize+'px;height:' + imgSize + 'px;'" v-for="(item, index) in currentImgs">-->

<!--                        <label class="radio-wrap">-->
<!--                            <radio :value="item.url" :checked="index === current" />-->
<!--                            <img class="picker-img" :src="item.url">-->
<!--                        </label>-->

<!--                    </view>-->
<!--                </radio-group>-->

                <!-- <image class="picker-img" src="/storage/emulated/0/Pictures/QQ/QQ图片20201203200758.png"> -->

                <checkbox-group class="group-wrap">
                    <label @click="choiceImg(item, index)" class="img-wrap" v-for="(item, index) in currentImgs"  :style="'max-width :'+imgSize+'px;height:' + imgSize + 'px;'">
                        <checkbox class="img-check" value="item.url"/>
                        <image class="picker-img" :class="{choiced : index === choicedImgIndex}" :src="item.url" mode="aspectFill">
                        <!-- <img class="picker-img" :src="item.url"   :style="'width :'+imgSize+'px;height:' + imgSize + 'px;'"> -->
                    </label>
                </checkbox-group>


<!--                <view class="scroll-view-item picker-row" v-for="item of currentImgs"  :style="'width :'+imgSize+'px;height:' + imgSize + 'px;'">-->
<!--                    <img class="picker-img" :src="item.url">-->
<!--                </view>-->


<!--                <view class="scroll-view-item picker-row" v-for="item of 100"  :style="'width :'+imgSize+'px;height:' + imgSize + 'px;'">-->
<!--                    <img class="picker-img" src="static/judy.jpg">-->
<!--                </view>-->


            </scroll-view>

        </view>



        <u-picker
                :mode="'selector'"
                v-model="showPicker"
                @confirm="confirm"
                :range="range"
                :range-key="rangKey"
                :defaultSelector = "defaultSelector"
        ></u-picker>
    </view>
</template>
<script>
    import ImageCropper from '@/components/post-cropper/post-cropper.vue'
    // import func from 'vue-editor-bridge';
    // import ImageCropper from '@/components/uniapp-nice-cropper-mode-1/cropper.vue'
    // import ImageCropper from '@/components/kd/cropper/cropper.vue'


    export default {
        components: {
            ImageCropper,
        },
        data() {
            return {
                imgSize: 0,
                currentImgs: [],
                pageHeight : "auto",

                src: '',
                img: '',
                ctrl : false,

                imgDirList : [],
                range: ['一', '片', '冰', '心', '在', '玉', '壶'],
                rangKey: 'name',
                showPicker : false,
                defaultSelector : [0],


                items: [{
                    value: 'USA',
                    name: '美国'
                },
                    {
                        value: 'CHN',
                        name: '中国',
                        checked: 'true'
                    },
                    {
                        value: 'BRA',
                        name: '巴西'
                    },
                    {
                        value: 'JPN',
                        name: '日本'
                    },
                    {
                        value: 'ENG',
                        name: '英国'
                    },
                    {
                        value: 'FRA',
                        name: '法国'
                    },
                ],

                current: 0,


                choicedImg : {},
                choicedImgIndex : '',
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


            radioChange(evt) {
                for (let i = 0; i < this.currentImgs.length; i++) {
                    if (this.currentImgs[i].url === evt.detail.value) {
                        console.log('i==============>', i);
                        this.current = i;
                        break;
                    }
                }
            },

















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
                let innerStorage = "file:///storage/emulated/0";
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

                        let imgDirList = [];
                        for(let item of entries){
                            let obj = {};
                            if(item.isFile === false){
                                obj.name = item.name;
                                obj.cursor = item;
                                imgDirList.push(obj);
                            }
                        }

                        this.imgDirList = imgDirList;

                        let cache = [];
                        for(let item of imgDirList){
                            cache.push(item.name);
                        }

                        this.range = cache;
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


            getAllLoot(entries,callback){
                console.log('get in getAllLoot');
                let namesCache = [];
                let cache = [];
                let imgFace = ['jpg','png','gif','jpeg'];

                entries.forEach((item, index) =>{
                    if(item.isDirectory){
                        let fileReader = item.createReader();
                        fileReader.readEntries((files) => {
                            for(let file of files){

                                if(imgFace.includes(file.name.split('.')[1])){
                                    if(!namesCache.includes(item.name)){
                                        let obj = {
                                            name : item.name,

                                            cursor : item,
                                            fullPath : item.fullPath
                                        };
                                        cache.push(obj);
                                        namesCache.push(item.name);
                                    }
                                    break;
                                }
                            }

                            if(index === entries.length - 1){
                                callback(cache);
                            }
                        });
                    }
                })
            },

            setImgData(files){
                let cache = [];
                let prefix = "file://";
                for(let item of files){
                    let obj = {};
                    if(item.isFile === true){
                        obj.url = prefix.concat(item.fullPath);
                        cache.push(obj);
                    }
                }

                console.log("cache", cache);

                this.currentImgs = cache;
            },


            /*---picker---*/

            statusChange(index) {
                console.log('ok');
                // this.showPicker = index == 0 ? true : false;
                this.showPicker = true;
            },

            confirm(e){
                console.log('choice===>',e);
                let index = e[0];
                let fileReader = this.imgDirList[index].cursor.createReader();
                fileReader.readEntries((files) => {
                    console.log('files==>', files);
                    this.setImgData(files);
                })
            },






            /*---选中图片---*/

            choiceImg (item, index){
                this.choicedImg = item;
                this.choicedImgIndex = index;
                this.src = item.url;
                console.log('choicedImg',item);
            }






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
        box-sizing: border-box;
        width:100%;
        height:100%;
        display: inline-block;
        box-sizing: border-box;
        background-color: red;
    }



    /*---uView-ui-picker--*/
    .u-datetime-picker{
        width:100%;
    }












    /*---checkbox---*/

    .group-wrap{
        display:flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .img-wrap{
        position: relative;
        width: 25%;
        padding:0;
        border:0.5px solid #fff;
        margin:0;
        flex: auto;
        box-sizing: border-box;
    }

    .img-check{
        position: absolute;
        right:0;
        top:0;
        z-index: 2;
    }

    .picker-img{
        box-sizing: border-box;
        width:100%;
        height:100%;
        padding:0;
        z-index: 1;
    }

    .choiced{
        filter: opacity(50%);
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
            height: 800rpx;
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


<style>

    .ctrls-wrap .ctrlBtn{
        flex: 1;
        font-size: 34rpx;
        color: rgba(0,0,0,0.6);
        background: #fafafa;
        border:0px solid #fff;
        line-height: 96rpx;
        height:96rpx;
    }

</style>













