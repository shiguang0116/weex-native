<template>
<div class="wrapper">
    <app-header title="首页" :show="false"></app-header>
    <div class="main">
        <!-- <wxc-button type="jishi" text="查看详情"
            @wxcButtonClicked="jump">
        </wxc-button><wxc-button type="jishiBorder" style="margin-top: 10px" text="查看详情"
            @wxcButtonClicked="jump">
        </wxc-button> -->
        <text class="detail-btn" @click="jump">点击进入详情11</text>
    </div>
    <app-nav title="首页"></app-nav>
</div>
</template>

<style scoped>
    .wrapper{
        /*margin-top: 100px;*/
    }
    .main { 
        margin-top: 100px;
    }

</style>

<script>
    import AppHeader from '../common/header.vue'
    import AppNav from '../common/nav.vue'
    // import {WxcButton} from 'weex-ui';
    // import WxcButton from '../include/weex-ui/wxc-button';

    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')

    export default {
        components:{
            AppHeader,
            AppNav,
            // WxcButton
        },
        data() {
            return {
                isShow: false,
                list: [
                    { title: '选项1', value: 1 },
                    { title: '选项2', value: 2, checked: true },
                    { title: '选项3', value: 3 },
                    { title: '选项4', value: 4 }
                ],
                checkedList: [2]
            }
        },
        methods: {
            jump () {
                navigator.push({
                  url: '/web/index.html?page=/dist/page/detail.js',
                  animated: "true"
                }, event => {
                  modal.toast({ message: 'callback: ' + event })
                })
            },
            wxcCheckBoxListChecked (e) {
                this.checkedList = e.checkedList;
          }
        }
    }
</script>