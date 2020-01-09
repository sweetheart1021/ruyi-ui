<!--
 * @Descripttion: form 表单
 * @Author: lvjing
 * @Date: 2020-01-09 16:47:36
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-09 17:02:06
 -->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        // 行内显示
        inline: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>

</style>