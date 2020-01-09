<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-09 16:52:13
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-09 17:15:12
 -->
<template>
    <div class="ruyi-form-item">
        <label class="ruyi-form-item-label" :style="{width: labelWidth}">{{ label }} {{ labelColon ? ':' : null }}</label>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        },
        // label宽度
        width: {
            type: [String, Number]
        },
        props: {
            type: String
        },
        labelColon: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        labelWidth() {
            return parseInt(this.width) + 'px'
        }
    },
}
</script>

<style lang="less" scoped>
.ruyi-form-item{
    display: flex;
    margin-bottom: 20px;
}
.ruyi-form-item-label{
    line-height: 30px;
    text-align: right;
    display: inline-block;
    margin-right: 10px;
}
</style>