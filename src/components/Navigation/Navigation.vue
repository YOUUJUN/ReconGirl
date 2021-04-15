<template>

    <div class="navigation" v-bind:style="{  }">

        <div class="title">动态</div>

        <div class="navigation-border"></div>
    </div>

</template>

<script>
    export default {
        name: "Navigation",
        data (){
            return {

            }
        },

        created (){
            uni.getSystemInfo({
                success (obj){
                    console.log('obj',obj);
                }
            })

        },



    }
</script>

<style scoped>

    .navigation{
        position: relative;
        height:60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navigation-border{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: rgba(0, 0, 0, 0.33);
    }


</style>
