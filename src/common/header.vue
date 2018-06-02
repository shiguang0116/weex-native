<template>
    <div class="top">
        <div class="left" @click="back">
            <image v-if="show" src="https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png" class="left-button"></image>
        </div>
        <text class="middle-title">{{title}}</text>
        <div class="right">
            <text class="rightText" v-if="rightText">{{rightText}}</text>
            <image :src="rightButton" class="right-button" v-if="rightButton"></image>
        </div>
    </div>
</template>

<style scoped>
    .top{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        width: 750px;
        height: 80px;
        background-color: #abcdef;
    }  
    .middle-title{
        font-size: 40px;
    }
    .left{
        width: 80px;
    }
    .left-button {
        width: 21px;
        height: 36px;
        margin-left: 40px;
    }
    .right {
        width: 80px;
    }
    .right-button {
        /*width: 32px;
        height: 32px;
        margin-right: 16px;*/
    }
</style>

<script>
    var navigator = weex.requireModule('navigator')
    
    export default {
        data() {
            return {
                
            }
        },
        props: {
            title:  { type: String, default: '首页'},
            show:   { type: Boolean, default: true},
            rightText: {
                type: String,
                default: ''
            },
            rightButton: {
                type: String,
                default: ''
            }
        },
        methods: {
            back: function(){
                navigator.pop()
            }
        }
    }
</script>