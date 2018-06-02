<!-- 按钮组件，后期会继续扩展 -->
<template>
    <div>
        <text 
            :class="['btn', 'btn-' + (disabled ? 'disabled' : type), size ? 'btn-small' : '']"
            @longpress="_longpress($event)"
            @click="_click($event)">{{value}}</text>
    </div>
</template>

<style lang="less">
    @import "../styles/button.less";
</style>

<script>
    module.exports = {
        props: {
            "type": {default: 'default'},
            "size": {default: ''},
            "value": {default: 'Button'},
            "disabled": {default: false},
        },
        methods: {
            "_click": function (e) {
                if (!this.disabled) {
                    this.$emit("click",e);
                }
            },
            "_longpress": function (e) {
                if (!this.disabled) {
                    this.$emit("longpress",e);
                }
            }
        }
    }
</script>
