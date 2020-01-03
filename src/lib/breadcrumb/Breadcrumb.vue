<!--
 * @Descripttion: Breadcrumb 面包屑
 * @Author: lvjing
 * @Date: 2020-01-03 10:20:29
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-03 10:39:51
 -->
<template>
    <div class="ruyi-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        // 自定义图标
        separator: {
            type: String,
            default: '/'
        }
    },
    mounted() {
        this.$children.forEach((v, i) => {
            if (i === this.$children.length - 1) {
                v.last = true
            }
            v.separator = this.separator;
        })
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-breadcrumb{
    display: flex;
    font-size: 14px;
}
</style>