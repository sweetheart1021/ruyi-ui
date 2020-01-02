<!--
 * @Descripttion:  poptip 气泡提示
 * @Author: lvjing
 * @Date: 2019-12-27 12:31:45
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-02 15:01:53
 -->
<template>
    <popper :trigger="trigger" append-to-body :options="{'placement': placement}"
        :delay-on-mouse-over='delayIn' :delay-on-mouse-out='delayOut' root-class='ruyi-poptip'>
        <div class="popper">
            <div class="ruyi-poptip-title" v-if="titleSlot"
                :style="contentSlot ? null : 'border-bottom: none; padding-bottom: 0px'">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="ruyi-poptip-content" v-if="contentSlot">
                <slot name="content">{{ content }}</slot>
            </div>
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
        title: {
            type: [String, Number]
        },
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
        },
        // 方位
        placement: {
            validator: function(value) {
                return [    'auto',
                            'top','top-start', 'top-end',
                            'right', 'right-start', 'right-end',
                            'bottom', 'bottom-start', 'bottom-end',
                            'left', 'left-start', 'left-end'
                        ].some(v => v === value)
            },
            default: 'top'
        }
    },
    computed: {
        titleSlot() {
            let title = this.title ? this.title : this.$slots.title
            return title
        },
        contentSlot() {
            let content = this.content ? this.content : this.$slots.content
            return content
        }
    }
}
</script>

<style lang="less">
.ruyi-poptip{
    .popper[x-placement^="bottom"]{
        margin-top: 14px;
    }
    .popper[x-placement^="top"]{
        margin-bottom: 14px;
    }
    .popper[x-placement^="right"]{
        margin-left: 8px;
    }
    .popper[x-placement^="left"]{
        margin-right: 8px;
    }
    .popper{
        min-width: 150px;
        color: #17233d;
        border: none;
        padding: 5px 0;
        overflow-wrap: break-word;
        border-radius: 2px;
        font-size: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .ruyi-poptip-title{
        font-size: 14px;
        border-bottom: 1px solid #e8eaec;
        padding: 0 3px 5px 3px;
    }
    .ruyi-poptip-content{
        padding: 5px 3px 3px;
        font-size: 14px;
        color: #515a6e
    }
}
</style>