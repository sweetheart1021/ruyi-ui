<!--
 * @Descripttion:  tag 组件
 * @version: 
 * @Author: lvjing
 * @Date: 2019-12-31 21:47:20
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-01 21:33:17
 -->
<template>
    <div class="ruyi-tag">
        <span class="ruyi-tag-label">
            <slot></slot>
            <i class="iconfont icon-cuowu" v-if="closable" @click="handleClose"></i>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        // 显示关闭按钮 
        closable: {
            type: Boolean,
            default: false
        },
        // 是否可选择
        checkable: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            this.$emit("close-click");
        }
    }
}
</script>

<style lang="less" scoped>
.ruyi-tag{
    padding: 0 12px;
    border: 1px solid #e8eaec;
    display: inline-block;
    border-radius: 3px;
    background: #f7f7f7;
    vertical-align: middle;
    opacity: 1;
    height: 32px;
    box-sizing: border-box;
    cursor: text;
}
.ruyi-tag:hover{
    opacity: 0.85;
}
.ruyi-tag-label{
    font-size: 12px;
    line-height: 32px;
}
.icon-cuowu{
    font-size: 12px;
    cursor: pointer;
    color: #666;
    opacity: 0.66;
    margin-left: 3px;
}
</style>