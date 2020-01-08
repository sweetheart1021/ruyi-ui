<!--
 * @Descripttion: radio
 * @Author: lvjing
 * @Date: 2019-12-25 15:22:14
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-08 16:34:08
 -->
<template>
    <label :class="['ruyi-raido-wapper', disabled ? 'ruyi-radio-disabled' : null]">
        <span :class="['ruyi-radio', currentValue ? 'ruyi-radio-checked':null]">
            <span class="ruyi-radio-inner" v-if="currentValue"></span>
        </span>
        <span :class="['ruyi-raido-label',currentValue? 'ruyi-radio-checked-label': null]">
            <slot>{{ label }}</slot>
        </span>
        <input type="radio"
            class="ruyi-radio-input"
            :value="label"
            :checked='currentValue'
            @change="handleGroupChange"
        >
    </label>
</template>

<script>
export default {
    name: 'radio',
    props: {
        value: {
            type: [String, Number, Boolean]
        },
        label: {
            type: [String, Number, Boolean]
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 记录上次选中的值, 在 switch 有效
            preValue: null,
            currentValue: this.value,
            // 选择框组
            group: false
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
        handleGroupChange(val) {
            if (this.disabled) return;
            if (this.group) {
                this.$parent.handleChange(val.target.value)
            } else {
                this.$emit("input", val.target.checked);
                this.$emit('change', val.target.checked);
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
.ruyi-raido-wapper:hover{
    .ruyi-raido-label{
        color: @primary-color;
    }
}
.ruyi-radio{
    width: 14px;
    height: 14px;
    display: inline-block;
    border: 1px solid #dcdee2;
    border-radius: 90px;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    margin-right: 5px;
    position: relative;
    box-sizing: border-box;
    .ruyi-radio-inner{
        width: 8px;
        height: 8px;
        display: inline-block;
        background: @primary-color;
        transition: background-color 0.2s ease-in-out;
        border-radius: 90px;
        line-height: 1;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
.ruyi-radio-checked{
    border-color: @primary-color;
    transition: border-color 0.2s  ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
}
.ruyi-radio-checked-label{
    color: @primary-color;
    transition: color 0.2s  ease-in-out;
}

.ruyi-radio-disabled{
    cursor: pointer;
    .ruyi-radio{
        background: #f3f3f3;
    }
    .ruyi-radio-checked-label{
        color: #ccc;
    }
    .ruyi-radio-inner{
        background: #ccc;
    }
    .ruyi-radio-checked{
        box-shadow: none;
        border-color: #dcdee2;
    }
}
.ruyi-radio-input{
    display: none;
}
</style>