<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-02 14:29:13
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-02 17:01:06
 -->
<template>
    <div :class="['ruyi-dropdown-item',
            disabled ? 'ruyi-dropdown-item-disabled' : null,
            selected ? 'ruyi-dropdown-item-selected' : null,
            divided ? 'ruyi-dropdown-item-divided' : null
        ]" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 当前是否被选中
        selected: {
            type: Boolean,
            default: false
        },
        // 显示分割线
        divided: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            if (this.disabled) return;
            this.$parent.$parent.showPopper = false;
            this.$emit("click");
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-dropdown-item{
    padding: 5px 12px;
    color: #515a6e;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    z-index: inherit;
    transition: background .2s ease-in-out;
    user-select: none;
    box-sizing: border-box;
}
.ruyi-dropdown-item:hover{
    background: #f3f3f3
}
.ruyi-dropdown-item-disabled{
    color: #c5c8ce;
    cursor: not-allowed;
}
.ruyi-dropdown-item-disabled:hover{
    background: none;
}
.ruyi-dropdown-item-selected{
    color: @primary-color;
    background: #f0faff;
}
.ruyi-dropdown-item-selected:hover{
    background: #f0faff;
}
.ruyi-dropdown-item-divided{
    margin-top: 5px;
}
.ruyi-dropdown-item-divided:before {
    content: '';
    height: 1px;
    display: block;
    width: calc(100% + 24px);
    background: #e8eaec;
    position: relative;
    top: -8px;
    left: -12px;
}
</style>