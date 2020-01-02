<!--
 * @Descripttion: Dropdown 下来菜单
 * @Author: lvjing
 * @Date: 2020-01-02 11:12:33
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-02 17:01:22
 -->
<template>
    <popper :trigger='trigger' :options="{'placement': placement}" :disabled='disabled'
        :force-show='showOrHide'>
        <div class="ruyi-dropdown-list" root-class='fade'>
            <slot name="list"></slot>
        </div>
        <div class="ruyi-dropdown-content" slot="reference">
            <slot></slot>
        </div>
    </popper>
</template>

<script>
import VuePopper from 'vue-popperjs';
export default {
    components: {
        popper: VuePopper
    },
    props: {
        // 显示方式
        trigger: {
            validator: function(value) {
                return ['hover', 'click'].some(v => v === value)
            },
            default: 'hover'
        },
        // 方位
        placement: {
            validator: function(value) {
                return  ['auto',
                        'top','top-start', 'top-end',
                        'right', 'right-start', 'right-end',
                        'bottom', 'bottom-start', 'bottom-end',
                        'left', 'left-start', 'left-end'
                    ].some(v => v === value)
            },
            default: 'bottom'
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showOrHide: false
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-dropdown-list{
    display: inline-block;
    z-index: 99;
    margin-top: 3px;
}
.ruyi-dropdown-content{
    display: inline-block;
}
</style>