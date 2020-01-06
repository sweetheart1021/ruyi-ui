<!--
 * @Descripttion: select -- option
 * @Author: lvjing
 * @Date: 2019-12-26 16:15:05
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-06 14:09:29
 -->
<template>
    <li :class="['ruyi-select-item', value === currentValue ? 'ruyi-select-item-checked' : null,
        diabled ? 'ruyi-select-item-disabled' : null]"
        :style="hidden ? 'display: none' : null"
        @click.stop="handleClick">
        <slot :label='label'>{{ label }}</slot>
        <i class="iconfont icon-gou" v-if="value === currentValue && (!diabled && !showDiabled)" :style="diabled ? {color: '#c5c8ce'} : null"></i>
        <i class="iconfont icon-ban" v-if="diabled && showDiabled"></i>
    </li>
</template>

<script>
export default {
    name: 'select-option',
    inject: ['select'],
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
        },
        // 显示禁用图标
        showDiabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentValue: '',
            hidden: false, // 是否隐藏
        }
    },
    watch: {
        currentValue: {
            handler(val) {
                if (val === this.value) {
                    this.select.$emit("child-select-label", this.$slots.default ? this.$slots.default[0].text : this.label);
                } else if (val === '' || val === undefined) {
                    this.select.$emit("child-select-label", '');
                }
            },
            immediate: true
        }
    },
    methods: {
        handleClick() {
            if (this.diabled) return;
            this.select.$emit("child-select-value", this.value);
            this.select.$emit("child-select-label", this.$slots.default ? this.$slots.default[0].text : this.label);
            document.body.click();
        }
    },
    mounted() {
        this.select.$on("parent-set-value", (val) => {
            this.currentValue = val;
        });
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
.icon-ban{
    position: absolute;
    right: 14px;
    top: 10px;
    font-size: 12px;
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
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1);
}
</style>