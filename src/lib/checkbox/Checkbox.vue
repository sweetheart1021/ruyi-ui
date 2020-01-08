<!--
 * @Descripttion: checkbox 组件
 * @Author: lvjing
 * @Date: 2019-12-25 19:18:50
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-08 16:33:13
 -->
<template>
    <div class="ruyi-checkbox-main">
        <label :class="['ruyi-raido-wapper', disabled ? 'ruyi-raido-disabled' : null]">
            <span :class="['ruyi-checkbox', currentValue || model.some(v => v === label) || half ? 'ruyi-checkbox-checked' : null]">
                <i class='iconfont icon-gou' v-if="currentValue || model.some(v => v === label)"></i>
                <i class="iconfont icon-hengxian" v-if="half"></i>
            </span>
            <span :class="currentValue || model.some(v => v === label) ? 'ruyi-checkbox-checked-label' : null">
                <span class="ruyi-checkbox-label">
                    <slot>{{ label }}</slot>
                </span>
            </span>
            <input type="checkbox" class="ruyi-checkbox-input"
                v-if="!group"
                :value="slot"
                :checked='currentValue'
                @change.stop="handleCheckboxChange">
            <input type="checkbox" class="ruyi-checkbox-input"
                v-else
                v-model="model"
                :value="label"
                @change="handleGroupChange">
        </label>
    </div>
</template>

<script>
export default {
    name: 'checkbox',
    props: {
        value: {
            type: [Array, Boolean],
            default: false
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        // 设置半选中
        half: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        slot() {
            if (typeof this.value === 'boolean') {
                return '';
            }
            return this.label ? this.label: this.$slots.default[0].text;
        },
    },
    data() {
        return {
            currentValue: null,
            // 输入框组
            group: false,
            model: [],
        }
    },
    watch: {
        value: {
            handler(val, oldval) {
                if (typeof (val) === 'boolean') {
                    this.currentValue = val
                } else {
                    this.model = val;
                }
            },
            immediate: true
        }
    },
    methods: {
        // 原生change事件
        handleCheckboxChange(val) {
            if (this.disabled) return;
            this.$emit("input", val.target.checked);
            this.$emit("change", val.target.checked);

        },
        // group的change事件
        handleGroupChange(val) {
            this.$parent.handleAllValue(this.model);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-checkbox-main{
    display: inline-block;
}
.ruyi-raido-wapper{
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select:none;
    -o-user-select:none;
    -ms-user-select:none;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
.ruyi-raido-wapper:hover{
    .ruyi-checkbox-label{
        color: @primary-color;
    }
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
        position: absolute;
        color: white;
        left: 1px;
        top: 0px;
        font-weight: bold;
    }
}
.ruyi-checkbox-checked{
    border-color: @primary-color;
    transition: border-color 0.2s  ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
    background: @primary-color;
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

.ruyi-checkbox-input{
    display: none;
}

.icon-hengxian{
    font-size: 12px;
    position: relative;
    top: -2px;
    color: white;
    font-weight: bold;
}
</style>