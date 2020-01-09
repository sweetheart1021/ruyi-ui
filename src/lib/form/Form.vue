<!--
 * @Descripttion: form 表单
 * @Author: lvjing
 * @Date: 2020-01-09 16:47:36
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-09 21:39:18
 -->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            "ruyi-form": this
        }
    },
    props: {
        // 行内显示
        inline: {
            type: Boolean,
            default: false
        },
        // 验证规则
        rules: {
            type: Object,
            default: () => {}
        },
        labelWidth: {
            type: [String, Number],
            default: 80
        }
    },
    mounted() {
        this.$emit("on-rulse", this.rules);
        this.$emit("label-width", this.labelWidth);
    }
}
</script>

<style lang="less" scoped>

</style>