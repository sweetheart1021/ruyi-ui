<!--
 * @Descripttion: Breadcrumb 面包屑
 * @Author: lvjing
 * @Date: 2020-01-03 10:21:28
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-03 10:40:38
 -->
<template>
    <span @click="handleClick"
        :class="['ruyi-breadcrumb-item', last ? 'ruyi-breadcrumb-item-last' : null]">
        <slot></slot>
        <span class="ruyi-breadcrumb-item-interval" v-if="!last" v-html="separator"></span>
    </span>
</template>

<script>
export default {
    props: {
        to: {
            type: String
        },
    },
    data() {
        return {
            last: false,
            separator: '/'
        }
    },
    methods: {
        handleClick() {
            this.$router.push({path: this.to});
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-breadcrumb-item{
    cursor: pointer;
    user-select: none;
    font-size: 14px;
}
.ruyi-breadcrumb-item-last{
    font-weight: bold;
    color: #515a6e;
}
.ruyi-breadcrumb-item-interval{
    margin: 0 5px;
    color: #dcdee2;
}
</style>