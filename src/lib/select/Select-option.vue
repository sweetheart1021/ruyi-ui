<!--
 * @Descripttion: select -- option
 * @Author: lvjing
 * @Date: 2019-12-26 16:15:05
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 19:08:32
 -->
<template>
    <li :class="['ruyi-select-item', value === currentValue ? 'ruyi-select-item-checked' : null,
        diabled ? 'ruyi-select-item-disabled' : null]"
        @click.stop="handleClick">
        <slot>{{ label }}</slot>
        <i class="iconfont icon-gou" v-if="value === currentValue" :style="diabled ? {color: '#c5c8ce'} : null"></i>
    </li>
</template>

<script>
export default {
    props: {
        label: {
            type: [String, Number]
        },
        value: {
            type: [String, Number]
        },
        diabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentValue: ''
        }
    },
    methods: {
        handleClick() {
            if (this.diabled) return;
            this.$parent.$parent.currentValue = this.value;
            document.body.click();
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-select-item{
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: #515a6e;
    cursor: pointer;
    height: 32px;
    box-sizing: border-box;
    position: relative;
}
.ruyi-select-item:hover{
    background: #f3f3f3;
}
.ruyi-select-item-checked{
    color: @primary-color;
    background: #f3f3f3;
    transition: background .2s ease-in-out;
}

.icon-gou{
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 10px;
    color: @primary-color;
}

.ruyi-select-item-disabled{
    cursor: not-allowed;
    color: #c5c8ce;
}
.ruyi-select-item-disabled:hover{
    background: white;
}

::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1);
}
</style>