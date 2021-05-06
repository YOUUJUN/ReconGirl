<template>

    <view class="uni-combox__input-box">

        <button class="yj-btn-icon" @click="toggleSelector">
            <slot></slot>
            <uni-icons class="uni-combox__input-arrow" type="arrowdown" size="14"></uni-icons>
        </button>

        <view class="uni-combox__selector" v-if="showSelector">
            <scroll-view scroll-y="true" class="uni-combox__selector-scroll">
                <view class="uni-combox__selector-empty" v-if="candidates === 0">
                    <text>{{emptyTips}}</text>
                </view>
                <view class="uni-combox__selector-item" v-for="(item,index) in filterCandidates" :key="index" @click="onSelectorClick(index)">
                    <text>{{item}}</text>
                </view>
            </scroll-view>
        </view>

    </view>


</template>

<script>
    export default {
        name: "ComBox",

        props : {
            candidates: {
                type: Array,
                default () {
                    return []
                }
            },
        },

        data() {
            return {
                // candidates: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
                showSelector: false,
                emptyTips: '无匹配项'
            }
        },

        computed :{
            filterCandidates() {
                return this.candidates;
            },
        },

        methods : {
            toggleSelector(){
                this.showSelector = !this.showSelector
            },

            onFocus() {
                this.showSelector = true
            },
            onBlur() {
                setTimeout(() => {
                    this.showSelector = false
                }, 30)
            },

            onSelectorClick(){

            }
        }
    }
</script>

<style scoped>

    .uni-combox__input-box {
        position: relative;
        /* #ifndef APP-NVUE */
        display: inline-block;
        /* #endif */
    }

    .uni-combox__input-arrow {
        padding: 10px;
    }

    .uni-combox__selector {
        /* #ifndef APP-NVUE */
        box-sizing: border-box;
        /* #endif */
        position: absolute;
        top: 42px;
        left: 0;
        width: 320rpx;
        background-color: #FFFFFF;
        border-radius: 6px;
        box-shadow: #DDDDDD 4px 4px 8px, #DDDDDD -4px -4px 8px;
        z-index: 2;
    }

    .uni-combox__selector-scroll {
        /* #ifndef APP-NVUE */
        max-height: 200px;
        box-sizing: border-box;
        /* #endif */
    }

    .uni-combox__selector::before {
        /* #ifndef APP-NVUE */
        content: '';
        /* #endif */
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: solid 6px #FFFFFF;
        border-right: solid 6px transparent;
        border-left: solid 6px transparent;
        left: 50%;
        top: -6px;
        margin-left: -6px;
    }

    .uni-combox__selector-empty,
    .uni-combox__selector-item {
        /* #ifndef APP-NVUE */
        display: flex;
        cursor: pointer;
        /* #endif */
        line-height: 36px;
        font-size: 14px;
        text-align: center;
        border-bottom: solid 1px #DDDDDD;
        margin: 0px 10px;
    }

    .uni-combox__selector-empty:last-child,
    .uni-combox__selector-item:last-child {
        /* #ifndef APP-NVUE */
        border-bottom: none;
        /* #endif */
    }
</style>
