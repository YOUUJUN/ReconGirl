<template>
    <view>


        <movable-area>
            <movable-view :x="x" :y="y" direction="all" inertia="true" scale="true" @change="onChange">
                <img src="static/killa.jpg">
            </movable-view>
        </movable-area>

        <button @click="openFile">点我</button>

        <button @click="getImg">Test Invoke</button>



    </view>


<!--    <view>-->

<!--        <swiper-list></swiper-list>-->
<!--        <h1>hello2\</h1>-->

<!--    </view>-->



</template>

<script>

    import swiperList from "@/components/swiper-list/swiper-list.vue";

    console.log('swiperList',swiperList);
    export default {
        components:{
            swiperList
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
            openFile(){
                let callback = plus.gallery.pick((result)=>{
                    console.log('result',result);
                },(reject)=>{

                }, {

                });

                console.log('callback==>',callback);
            },

            // 调用native API弹出提示框
            testInvoke(){
                var mainActivity = plus.android.runtimeMainActivity();
                // 由于Builder类是android.app.AlertDialog类的内部类，这里需要使用$符号分割
                var dlg = plus.android.newObject("android.app.AlertDialog$Builder",mainActivity);
                // 设置提示框标题
                plus.android.invoke(dlg,"setTitle","自定义标题");
                // 设置提示框内容
                plus.android.invoke(dlg,"setMessage","使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
                // 设置提示框按钮
                plus.android.invoke(dlg,"setPositiveButton","确定(或者其他字符)",null);
                // 显示提示框
                plus.android.invoke(dlg,"show");
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
                    directoryReader.readEntries( function( entries ){
                        console.log('entries',entries);
                        let fileReader = entries[0].createReader();
                        fileReader.readEntries((files) =>{
                            console.log('files==>',files);
                        })
                    })

                },(err) => {
                    console.log(err);
                });



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
        height: auto;
        width: auto;
        background-color: #007AFF;
        color: #fff;
    }

    movable-area {
        height: 600rpx;
        width: 100%;
        background-color: #D8D8D8;
        overflow: hidden;
    }

    .max {
        width:500rpx;
        height: 500rpx;
    }
</style>
