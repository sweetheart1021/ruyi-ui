<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-02 14:28:39
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-02 17:37:48
 -->
<template>
    <div class="ruyi-dropdown-menu">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-dropdown-menu{
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    padding: 5px 0;
    animation: ivuSlideUpIn .3s;
    min-width: 90px;
}
@keyframes ivuSlideUpIn {
    0% {
        opacity: 0;
        transform-origin: 0% 0%;
        transform: scaleY(.8);
    }
    100% {
        opacity: 1;
        transform-origin: 0% 0%;
        transform: scaleY(1);
    }
}
</style>