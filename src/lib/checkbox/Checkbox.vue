<!--
 * @Descripttion: checkbox 组件
 * @Author: lvjing
 * @Date: 2019-12-25 19:18:50
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-25 21:22:16
 -->
<template>
    <label :class="['ruyi-raido-wapper', disabled ? 'ruyi-raido-disabled' : null]" @click.stop="handleChecked">
        <span :class="['ruyi-checkbox', currentValue.some(v => v === labelValue && labelValue) ? 'ruyi-checkbox-checked':null]">
            <i class='iconfont icon-gou' v-if="currentValue.some(v => v === labelValue && labelValue)"></i>
        </span>
        <span :class="currentValue.some(v => v === labelValue && labelValue) ? 'ruyi-checkbox-checked-label': null ">
            <span class="ruyi-checkbox-label" v-if="slot">
                <slot>{{ labelValue }}</slot>
            </span>
        </span>
    </label>
</template>

<script>
export default {
    name: 'checkbox',
    props: {
        value: {
            type: [Array, Boolean],
            default: () => []
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        slot() {
            return this.label ? this.label: this.$slots.default;
        },
        labelValue() {
            if (typeof this.value === 'boolean') {
                return this.value
            } else {
                let label = '';
                if (this.$slots.default) {
                    return label = this.$slots.default[0].text;
                } else {
                    return label = this.label
                }
            }
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value: {
            handler(val, oldval) {
                if (typeof (val) === 'boolean') {
                    this.currentValue = [val]
                } else {
                    this.currentValue = val;
                }
                if (oldval) {
                    this.$emit("change", val);
                }
            },
            immediate: true
        }
    },
    methods: {
        handleChecked() {
            if (this.disabled) return;
            if (typeof this.value === 'boolean') {
                this.$emit("update:value", !this.value);
                this.$emit("input", !this.value);
            } else {
                if (this.currentValue.some(v => v === this.labelValue)) {
                    this.currentValue = this.currentValue.filter(v => v !== this.labelValue)
                } else {
                    this.currentValue.push(this.labelValue)
                }
                this.$emit('input', this.currentValue);
                if (this.$parent.$options._componentTag === 'ruyi-checkbox-group') {
                    this.$parent.currentValue = this.currentValue;
                }
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
    // margin-right: 5px;
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
.ruyi-checkbox-label{
    margin-left: 5px;
}

.ruyi-raido-disabled{
    cursor: not-allowed;
    color: #ccc;
    .ruyi-checkbox{
        background: #f3f3f3;
    }
    .ruyi-checkbox-label{
        color: #ccc;
    }
    .icon-gou{
        color: #ccc;
    }
    .ruyi-checkbox-checked{
        border-color: #dcdee2;
        box-shadow: none;
    }
}
</style>