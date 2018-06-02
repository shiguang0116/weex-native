<template>
<div class="wrapper">
    <app-header title="消息" :show="false"></app-header>
    <div class="main">
        <text>select</text>
        <!-- <div class="demo">
            <wxc-grid-select
              :list="testData1"
              :limit="5"
              :cols="4"
              :customStyles="customStyles"
              @overLimit="onOverLimit"
              @select="function(params){onSelect('res1', params)}">
            </wxc-grid-select>

            <text class="res">{{res1}}</text>
        </div> -->
   
    </div>
    <app-nav title="消息"></app-nav>
</div>
</template>

<style scoped>
    .wrapper{}
    .main { 
        margin-top: 100px; 
        margin-bottom: 100px; 
    }
</style>

<script>
    import AppHeader from '../common/header.vue';
    import AppNav from '../common/nav.vue';
    // import { WxcGridSelect } from 'weex-ui';
    const modal = weex.requireModule('modal');

    export default {
        components:{
            AppHeader,
            AppNav,
            // WxcGridSelect
        },
        data() {
            return {
                res1: '',
                testData1: [
                    {
                      'title': '上海'
                    },
                    {
                      'title': '杭州',
                      'checked': true
                    },
                    {
                      'title': '北京'
                    },
                    {
                      'title': '广州'
                    },
                    {
                      'title': '深圳'
                    },
                    {
                      'title': '南京'
                    },
                    {
                      'title': '合肥'
                    },
                    {
                      'title': '武汉'
                    },
                    {
                      'title': '长沙'
                    },
                    {
                      'title': '最多展示两行内容'
                    },
                    {
                      'title': '超过两行文本将被截断展示'
                    },
                    {
                      'title': '西安'
                    },
                    {
                      'title': '郑州'
                    },
                    {
                      'title': '福州'
                    }
                ],
                customStyles: {
                    lineSpacing: '12px',
                    width: '80px',
                    height: '30px',
                    icon: '',
                    color: '#333',
                    checkedColor: '#fff',
                    disabledColor: '#eee',
                    borderColor: '#ddd',
                    checkedBorderColor: '#ffb200',
                    backgroundColor: '#fff',
                    checkedBackgroundColor: '#ffb200'
                }
            }
        },
        methods: {
            onSelect (res, { selectIndex, checked, checkedList }) {
                Vue.set(this, res, `本次选择的index：${selectIndex}\n是否选中：${checked
                  ? '是'
                  : '否'}\n选中列表：${checkedList.map(item => item.title).join(',')}`);
            },
            onOverLimit (limit) {
                modal.toast({
                  message: `最多选择${limit}个`,
                  duration: 0.8
                });
            }
        }
    }
</script>