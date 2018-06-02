<template>
<div class="wrapper">
    <app-header title="发现" :show="false"></app-header>
    <div class="main">
        <!-- <wxc-indexlist 
            :normal-list="list.normalList"
            :hot-list-config="hotListConfig"
            :city-location-config="cityLocationConfig"
            @wxcIndexlistItemClicked="wxcIndexlistItemClicked"
            :show-index="showIndex">    
        </wxc-indexlist> -->
    </div>
    <app-nav title="发现"></app-nav>
</div>
</template>

<style scoped>
    .wrapper{}
    .main { 
        margin-top: 100px; 
    }
</style>

<script>
    import AppHeader from '../common/header.vue'
    import AppNav from '../common/nav.vue'
    // import WxcIndexlist from '../include/weex-ui/wxc-indexlist'
    // import { dataList } from '../util/cities.js'
    const modal = weex.requireModule('modal')

    export default {
        components:{
            AppHeader,
            AppNav,
            // WxcIndexlist
        },
        data() {
            return {
                list: dataList,
                showIndex: true,
                hotListConfig: {
                    type: 'group',
                    title: '热门',
                    list: dataList.hotList
                },
                cityLocationConfig: {
                    type: 'group',
                    title: '定位',
                    list: [{ name: '杭州', isLocation: true }]
                }
            }
        },
        methods: {
            wxcIndexlistItemClicked (e) {
                modal.toast({ 'message': JSON.stringify(e.item), 'duration': 1 });
            }
        }
    }
</script>