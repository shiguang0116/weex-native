<template>
<div class="wrapper">
    <app-header title="index" :show="false"></app-header>
    <div class="main">
        <text class="detail-btn" @click="jump">点击进入详情</text>
        <text class="detail-btn" @click="jump2">setBundleUrl</text>
        <text class="detail-btn" @click="jump3">百度jump</text>
        <a href="https://www.baidu.com/">
            <text>百度a</text>
        </a>
    </div>
    <app-nav title="首页"></app-nav>
</div>
</template>

<style>
    .wrapper { align-items: center; margin-top: 200px; }
    .main{
        
    }
    .detail-btn{
        border: 1px solid #d9d9d9;
        display: inline-block;
        margin-bottom: 50px;
    }
</style>

<script>
    import _util from './util/util.js'

    import AppHeader from './common/header.vue'
    import AppNav from './common/nav.vue'
    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')

    export default {
        components:{
            AppHeader,
            AppNav
        },
        data() {
            return {
                logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png'
            }
        },
        methods: {
            jump(){
                navigator.push({
                    url: 'home',
                    animated: "true"
                },function(){
                    // modal.toast({ message: '你点击了详情按钮' })
                })
            },
            jump2(){
                var url = this.$getConfig().bundleUrl;
                // modal.toast({ message: url })
                var url2 = _util.setUrl(url, 'center.js');
                modal.toast({ message: url2 })
                navigator.push({
                    url: _util.setUrl(url, 'center.js') ,
                },function(){
                    modal.toast({ message: '你点击了按钮' })
                })
            },
            jump3(){
                navigator.push({
                    url: _util.setUrl(url, 'www.baidu.com/'),
                },function(){
                    modal.toast({ message: '你点击了baidu' })
                })
            },
        },
        mounted(){
            
        }
    }
</script>