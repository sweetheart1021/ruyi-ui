<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-25 19:18:50
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-25 21:22:16
 -->
<template>
    <label class="ruyi-raido-wapper" @click="handleChecked">
        <span :class="['ruyi-checkbox', currentValue.some(v => v === label) ? 'ruyi-checkbox-checked':null]">
            <i class='iconfont icon-gou' v-if="currentValue.some(v => v === label)"></i>
        </span>
        <span :class="currentValue.some(v => v === label) ? 'ruyi-checkbox-checked-label': null ">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'checkbox',
    props: {
        value: {
            type: Array,
            default: () => []
        },
        label: {
            type: [String, Number]
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value: {
            handler(val) {
                this.currentValue = val;
            },
            immediate: true
        }
    },
    methods: {
        handleChecked() {
            if (this.currentValue.some(v => v === this.label)) {
                this.currentValue = this.currentValue.filter(v => v !== this.label)
            } else {
                this.currentValue.push(this.label)
            }
            this.$emit('input', this.currentValue);
            if (this.$parent.$options._componentTag === 'ruyi-checkbox-group') {
                this.$parent.currentValue = this.currentValue;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-raido-wapper{
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select:none;
    -o-user-select:none;
    -ms-user-select:none;
}
.ruyi-checkbox{
    width: 14px;
    height: 14px;
    display: inline-block;
    border: 1px solid #dcdee2;
    line-height: 1;
    border-radius: 2px;
    white-space: nowrap;
    vertical-align: middle;
    margin-right: 5px;
    position: relative;
    box-sizing: border-box;
    .icon-gou{
        font-size: 12px;
        position: relative;
        color: @primary-color;
        left: 01px;
        top: -2px;
        font-weight: bold;
    }
}
.ruyi-checkbox-checked{
    border-color: @primary-color;
    transition: border-color 0.2s  ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
}
.ruyi-checkbox-checked-label{
    color: @primary-color;
    transition: color 0.2s  ease-in-out;
}

</style>