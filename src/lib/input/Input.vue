<!--
 * @Descripttion: 输入框
 * @Author: lvjing
 * @Date: 2019-12-25 11:23:09
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-09 20:38:30
 -->
<template>
    <div :class="['ruyi-input-wapper', prepend ? 'ruyi-input-wapper-prepend' : null, append ? 'ruyi-input-wapper-append' : null ]">
        <div class="ruyi-input-prepend" v-if="prepend && type === 'text'">
            <slot name="prepend"></slot>
        </div>
        <input
            :type="currentType"
            :class="['ruyi-input', !background ? 'no-background' : null]"
            ref="input"
            :placeholder="placeholder"
            :value="currentValue"
            :readOnly="readOnly"
            :disabled="disabled"
            :background="background"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"
            :maxLength="maxLength">
        <template v-if="type === 'password'">
            <i class="iconfont icon-xianshimima"
                v-if="currentPassword"
                @click="handleChangePassword"></i>
            <i class="iconfont icon-xianshimima1"
                v-else-if="!currentPassword"
                @click="handleChangePassword"></i>
        </template>
        <template v-if="maxLength && showWordLimit">
            <div class="show-limit">
                <span v-text="limitNum"></span>/<span v-text="maxLength"></span>
            </div>
        </template>
        <div class="ruyi-input-append" v-if="append && type === 'text'">
            <slot name="append"></slot>
        </div>
        <template v-if="clearable && value">
            <i class="iconfont icon-icon-test" @click="handleClearAble"></i>
        </template>
        <template v-if="search">
            <i class="iconfont icon--search" @click="handleSearch"></i>
        </template>
    </div>
</template>


<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入...'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        // 禁用状态下是否输入框有背景色, 默认灰色，不需要false就为白色
        background: {
            type: Boolean,
            default: true
        },
        // 在 password 下显示眼睛图标
        password: {
            type: Boolean,
            default: false
        },
        // 最大字数
        maxLength: {
            type: [String, Number]
        },
        // 显示字数统计 必须搭配 maxLength
        showWordLimit: {
            type: Boolean,
            default: false
        },
        // 是否显示清空按钮
        clearable: {
            type: Boolean,
            default: false
        },
        // 显示查询图标
        search: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value(val) {
            this.setCurrentValue(val);
        },
    },
    computed: {
        limitNum() {
            return String(this.currentValue).length
        },
        prepend() {
            return this.$slots.prepend
        },
        append() {
            return this.$slots.append
        }
    },
    data() {
        return {
            currentValue: this.value,
            currentType: this.type,
            currentPassword: this.password
        }
    },
    methods: {
        handleInput(event) {
            let value = event.target.value;
            this.setCurrentValue(value);
            this.$emit('input', value);
            this.$emit('change', value)
        },
        handleBlur(event) {
            this.$emit('blur', event)
        },
        handleFocus(event) {
            this.$emit('focus', event)
        },
        setCurrentValue(value) {
            if (value === this.currentValue) return;
            this.currentValue = value;
        },
        handleChangePassword() {
            if (this.currentType === 'password') {
                this.currentType = 'text'
            } else if (this.currentType === 'text') {
                this.currentType = 'password'
            }
            this.currentPassword = !this.currentPassword
        },
        handleClearAble() {
            this.currentValue = '';
            this.$emit('input', '');
        },
        handleSearch() {
            this.$emit('search');
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-input-wapper{
    display: inline-block;
    width: 100%;
    position: relative;
}
.ruyi-input{
    border: 1px solid #dcdee2;
    padding: 4px 7px;
    width: 100%;
    height: 32px;
    line-height: 32px;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    cursor: text;
    color: #515a6e;
    background: white;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position: relative;
    font-family: inherit;
    font-size: 14px;
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
}
.ruyi-input:focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    border-color: @primary-color;
}

.ruyi-input:disabled{
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc;
}
.ruyi-input-wapper:hover{
    .icon-icon-test{
        display: block;
    }
}
.no-background{
    background-color: white !important;
    color: #515a6e !important;
}
.icon-xianshimima,
.icon-icon-test,
.icon--search,
.icon-xianshimima1{
    font-size: 12px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 10px;
    cursor: pointer;
    color: #515a6e;
}
.icon-icon-test{
    display: none;
}

.show-limit{
    font-size: 12px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 5px;
    cursor: pointer;
    color: #515a6e;
}

.ruyi-input-wapper-prepend{
    display: inline-table;
    width: 100%;
    .ruyi-input{
        display: table-cell;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
}
.ruyi-input-wapper-append{
    display: inline-table;
    width: 100%;
    .ruyi-input{
         display: table-cell;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
}
.ruyi-input-prepend{
    box-sizing: border-box;
    display: table-cell;
    background: #f5f7fa;
    border: 1px solid #dcdee2;
    padding: 0 7px;
    border-right: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.ruyi-input-append{
    box-sizing: border-box;
    display: table-cell;
    background: #f5f7fa;
    border: 1px solid #dcdee2;
    padding: 0 7px;
    border-left: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>