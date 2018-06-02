<template>
    <div class="nav">
        <div class="list" v-for="item in list">
            <div class="button" @click="jump(item.url)"><!-- :href="item.url" -->
                <text :class="['icon', item.title == title ? 'active' : '']">{{item.icon}}</text>
                <text :class="['title', item.title == title ? 'active' : '']">{{item.title}}</text>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .nav{
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        z-index: 1000;
        width: 750px;
        height: 100px;
        background-color: white;
        border-top-color: #ddd; 
        border-top-style: solid; 
        border-top-width: 1px; 
    }
    .button{
        flex-direction: column;
        align-items: center;
    }
    .title{
        font-size: 35px;
    }
    .icon{
        font-size: 35px;
    }
    .active{
        color: #ff8000;
    }
</style>

<script>
    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')

    export default {
        data(){
            return {
                list: [
                    {url:'/web/index.html?page=/page/home.js',title:'首页',icon:'1'},
                    {url:'/web/index.html?page=/page/news.js',title:'消息',icon:'2'},
                    {url:'/web/index.html?page=/page/find.js',title:'发现',icon:'3'},
                    {url:'/web/index.html?page=/page/center.js',title:'我的',icon:'4'}
                ]
            }
        },
        props: {
            'title': {default: '首页'}
        },
        methods: {
            jump (url,title) {
                navigator.push({
                    url: url,
                    animated: "false"
                },function(){
                    // modal.toast({ message: 'callback: ' + title })
                })
            }
        }
    }
</script>