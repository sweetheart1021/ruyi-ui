<!--
 * @Descripttion: Tooltip
 * @Author: lvjing
 * @Date: 2019-12-27 09:45:43
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-27 11:29:24
 -->
<template>
    <popper :trigger="trigger" append-to-body
        :delay-on-mouse-over='delayIn' :delay-on-mouse-out='delayOut'>
        <div class="popper">
            <slot name="content">{{ content }}</slot>
        </div>

        <span slot="reference">
            <slot></slot>
        </span>
  </popper>
</template>

<script>
import VuePopper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
export default {
    components: {
        popper: VuePopper
    },
    props: {
        content: {
            type: [String, Number]
        },
        // 显示方式
        trigger: {
            validator: function(value) {
                return ['hover', 'click'].some(v => v === value)
            },
            default: 'hover'
        },
        // 延迟多久显示
        delayIn: {
            type: Number,
            default: 10
        },
        // 延迟多久隐藏
        delayOut: {
            type: Number,
            default: 10
        }
    }
}
</script>

<style lang="less">
.popper[x-placement^="bottom"]{
    margin-top: 14px;
}
.popper[x-placement^="top"]{
    margin-bottom: 14px;
}
.popper{
    color: rgb(255, 255, 255);
    background: rgb(48, 49, 51);
    border: none;
    padding: 10px;
    overflow-wrap: break-word;
    border-radius: 4px;
    font-size: 12px;
    box-shadow: none;
}
.popper[x-placement^="top"] .popper__arrow{
    border-color: rgb(48, 49, 51) transparent transparent transparent !important;
}
.popper[x-placement^="bottom"] .popper__arrow{
    border-color: transparent transparent rgb(48, 49, 51) transparent !important;
}
</style>