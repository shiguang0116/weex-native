<!-- 建议优先使用native自带的navigator -->
<template>
    <div v-if="show" class="navbar">
        <div class="left"></div>
        <text class="navbar-title"></text>
        <div class="right"></div>
    </div>
</template>

<style lang="less">
@import "../styles/navbar.less";
</style>

<script>
    const Navigator = weex.requireModule('navigator')
    module.exports = {
        props: {
            
        }
    }
</script>