<!--
 * @Descripttion: Alert 警告提示
 * @Author: lvjing
 * @Date: 2020-01-03 10:45:44
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-03 17:06:17
 -->
<template>
    <div :class="['ruyi-alert', className]" v-if="visible">
        <div class="ruyi-alert-wapper">
            <template>
                <slot name="icon">
                    <i class="iconfont icon-alert" v-if="type === 'primary' && showIcon"></i>
                    <i class="iconfont icon-chenggong" v-if="type === 'success' && showIcon"></i>
                    <i class="iconfont icon-iconjs" v-if="type === 'warning' && showIcon"></i>
                    <i class="iconfont icon-shibai" v-if="type === 'error' && showIcon"></i>
                </slot>
            </template>
            <div style="margin-left: 10px">
                <span class="ruyi-alert-label"><slot></slot></span>
                <span class="ruyi-alert-desc">
                    <slot name="desc"></slot>
                </span>
            </div>
            <div class="ruyi-alert-close" @click="handleClose" v-if="close">
                <slot name="close">
                    <i class="iconfont icon-cuowu"></i>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        // 显示关闭
        close: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        className() {
            return `ruyi-alert-${this.type}`
        }
    },
    data() {
        return {
            visible: true
        }
    },
    methods: {
        // 关闭之后时候
        handleClose() {
            this.visible = false;
            this.$emit('close')
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-alert{
    border: 1px solid @primary-color;
    border-radius: 4px;
    padding: 8px 16px;
    background: #f0faff;
}
.ruyi-alert-success{
    border-color: @success-color;
    background: #edfff3;
}
.ruyi-alert-error{
    border-color: @danger-color;
    background: #ffefe6;
}
.ruyi-alert-warning{
    border-color: @warning-color;
    background: #fff9e6;
}

.ruyi-alert-wapper{
    display: flex;
    align-items: center;
    position: relative;
}
.icon-alert{
    color: @primary-color;
}
.icon-chenggong{
    color: @success-color;
}
.icon-iconjs{
    color: @warning-color;
}
.icon-shibai{
    color: @danger-color;
}

.ruyi-alert-label{
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
}
.ruyi-alert-desc{
    font-size: 14px;
    color: #515a6e;
    line-height: 21px;
}
.ruyi-alert-close{
    position: absolute;
    top: 0px;
    right: -6px;
    cursor: pointer;
    i{
        font-size: 12px;
        transition: color .2s ease;
        color: #999;
    }
}
</style>