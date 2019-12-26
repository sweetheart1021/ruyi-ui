<!--
 * @Descripttion: select -- option
 * @Author: lvjing
 * @Date: 2019-12-26 16:15:05
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 19:08:32
 -->
<template>
    <li :class="['ruyi-select-item', value === currentValue ? 'ruyi-select-item-checked' : null]"
        @click.stop="handleClick">
        <slot>{{ label }}</slot>
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
        }
    },
    data() {
        return {
            currentValue: ''
        }
    },
    watch: {
        currentValue: {
            handler(val) {
                if (val === this.value) {
                    let label = this.label ? this.label : this.$slots.default[0].text;
                    this.$parent.$parent.currentLabel = label
                }
            },
            immediate: true
        }
    },
    methods: {
        handleClick() {
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
}
.ruyi-select-item:hover{
    background: #f3f3f3;
}
.ruyi-select-item-checked{
    color: @primary-color;
    background: #f3f3f3;
    transition: background .2s ease-in-out;
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