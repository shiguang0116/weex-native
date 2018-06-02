<template>
<div class="wrapper">
    <app-header title="详情"></app-header>
        <div class="main">
            <text>详情页</text>
        </div>
    <app-nav title="首页"></app-nav>
</div>
</template>

<style>
    .wrapper { align-items: center; margin-top: 50px; }
    .main{
        
    }
</style>

<script>
    import AppHeader from '../common/header.vue'
    import AppNav from '../common/nav.vue'

    export default {
        components:{
            AppHeader,
            AppNav
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>