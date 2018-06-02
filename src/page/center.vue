<template>
    <div class="wrapper">
        <app-header title="我的" :show="false"></app-header>
        <div class="main">
            <text>cell</text>
            <!-- <wxc-cell title="我的订单"
                    class="active"
                    link="/web/index.html"
                    @CellClicked="cellClicked"></wxc-cell>
            <wxc-cell title="我的订单"
                    @CellClicked="cellClicked"></wxc-cell>

            <wxc-cell title="我的订单"
                    :hasBottomBorder="false"
                    :cellStyle="{color:'red'}"
                    @CellClicked="cellClicked"></wxc-cell> 

            <text>radio</text>
            <wxc-radio :list="list"
                 @wxcRadioListChecked="wxcRadioListChecked"></wxc-radio> -->
        </div>
        <app-nav title="我的"></app-nav>
    </div>
</template>

<style scoped>
    .wrapper{

    }
    .main { 
        margin-top: 100px; 
    }
    .active {
        color: #ff8000!important;
        background-color: red;
    }
    .red{
        color: red;
    }
</style>

<script>
    import AppHeader from '../common/header.vue'
    import AppNav from '../common/nav.vue'
    // import WxcCell from '../include/weex-ui/wxc-cell';
    // import WxcRadio from '../include/weex-ui/wxc-radio';
    var modal = weex.requireModule('modal')

    export default {
        components:{
            AppHeader,
            AppNav,
            // WxcCell,
            // WxcRadio,

        },
        data() {
            return {
                list: [
                    { title: '选项1', value: 1 },
                    { title: '选项2', value: 2, checked: true },
                    { title: '选项3', value: 3 },
                    { title: '选项4', value: 4 },
                ],
                checkedInfo: { title: '选项2', value: 2 }
            }
        },
        methods: {
            cellClicked(e){
                console.log(e)
                console.log(this.className)
            },
            wxcRadioListChecked (e) {
                this.checkedInfo = e;
                console.log(this.checkedInfo)
            }
        },
        mounted(){
            modal.toast({ message: 'center' })
        }
    }
</script>

