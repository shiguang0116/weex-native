<template>
    <div 
        :class="['cell', 
        hasTopBorder && 'cell-top-border', 
        hasBottomBorder && 'cell-bottom-border', 
        hasMargin && 'cell-margin', 
        hasVerticalIndent && 'cell-indent', 
        desc && 'has-desc']"
        :style="cellStyle"
        @click="cellClicked"
        :link="link">
        <slot name="label">
            <div v-if="label">
                <text class="cell-label">{{label}}</text>
            </div>
        </slot>
        <div class="cell-title">
            <slot name="title">
                <text class="cell-content">{{title}}</text>
                <text v-if="desc" class="cell-desc">{{desc}}</text>
            </slot>
        </div>
        <slot name="value"></slot>
        <image 
            v-if="hasArrow" 
            class="cell-arrow-icon" 
            :src="arrowIcon"></image>
    </div>
</template>

<style lang="less">
@import "../styles/cell.less";
</style>

<script>
import Utils from "../utils"
module.exports = {
    props: {
        label: {type: String, default: ''},
        title: {type: String, default: ''},
        desc: {type: String, default: ''},
        link: {type: String, default: ''},
        hasTopBorder: {type: Boolean, default: false},
        hasMargin: {type: Boolean, default: false},
        hasBottomBorder: {type: Boolean, default: true},
        hasArrow: {type: Boolean, default: false},
        arrowIcon: {type: String, default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'},
        hasVerticalIndent: {type: Boolean, default: true},
        cellStyle: {type: Object, default: ()=>({})}
    },
    methods: {
        cellClicked (e) {
            const link = this.link;
            this.$emit('CellClicked', { e });
            link && Utils.goToH5Page(link, true);
        }
    }
}
</script>
