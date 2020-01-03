<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 15:39:00
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-03 18:02:17
 -->
<template>
    <div class="ruyi-select">
        <popper trigger="click" tagName='div' visible-arrow :disabled='disabled'
            @show="reverse=true" @hide='handlePopperHide'>
            <div class="ruyi-select-options-wapper">
                <div class="ruyi-select-options-content">
                    <ul>
                        <slot></slot>
                    </ul>
                </div>
            </div>

            <div class="ruyi-select-content" slot="reference" ref="ruyi-select-content"
                @mouseenter="handleChangeIcon" @mouseout="handleChangeIcon">
                <input type="text" class="ruyi-input" :placeholder="placeholder" readonly :value="currentLabel">
                <i :class="['iconfont icon-icon32210', reverse && !disabled ? 'is-reverse' : null]"
                    v-if="!changeIcon || !clearable || currentLabel === undefined || currentLabel === ''"
                    @mouseenter="handleChangeIcon" @mouseout="handleChangeIcon"></i>
                <i class="iconfont icon-icon-test"
                    v-if="clearable && currentLabel !== undefined && currentLabel !== '' && changeIcon"
                    @click.stop="handleClear" @mouseenter="handleChangeIcon" @mouseout="handleChangeIcon"></i>
            </div>
        </popper>
    </div>
</template>

<script>
import VuePopper from 'vue-popperjs';
import utils from './utils';
export default {
    name: 'select-option',
    mixins: [utils],
    components: {
        'popper': VuePopper
    },
    props: {
        value: {
            type: [String, Number]
        },
        placeholder: {
            type: String,
            default: '请选择...'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        // 开启搜索功能
        filterable: {
            type: Boolean,
            default: false
        },
        // 显示清空图标
        clearable: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value: {
            handler(val) {
                this.currentValue = val;
                utils.$emit("parent-set-value", this.currentValue);
            },
            immediate: true
        },
        currentValue(val) {
            this.$emit('input', val);
        }
    },
    data() {
        return {
            currentValue: this.value,
            currentLabel: '',
            reverse: false,
            // 清空图标和下拉图标切换
            changeIcon: false
        }
    },
    methods: {
        handlePopperHide() {
            this.reverse = false;
        },
        handleClear() {
            this.$emit('input', "");
        },
        handleChangeIcon() {
            this.changeIcon = !this.changeIcon;
        }
    },
    mounted() {
        utils.$on("child-select-value", (val) => {
            this.currentValue = val;
        });
        utils.$on("child-select-label", (val) => {
            this.currentLabel = val;
        });
        utils.$emit("parent-set-value", this.value);

    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';

.ruyi-select{
    display: inline-block;
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
    cursor: pointer;
    color: #515a6e;
    background: white;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    position: relative;
    font-family: inherit;
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
}
.ruyi-select-content:hover{
    .ruyi-input{
        border-color: @primary-color;
    }
}
.ruyi-input:focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    border-color: @primary-color;
}


.ruyi-select-content{
    display: inline-block;
    width: inherit;
    position: relative;
    width: 100%;
}

.ruyi-select-options-wapper{
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    max-height: 180px;
    overflow: auto;
    text-align: left;
    z-index: 2019;
    .ruyi-select-options-content{
        animation: ivuSlideUpIn .3s;
        width: 200px;
    }
}

.select-no-option{
    font-size: 14px;
    text-align: center;
    padding: 26px;
    cursor: not-allowed;
    user-select: none;
    i{
        margin-right: 5px;
    }
}

.icon-icon32210,
.icon-icon-test{
    position: absolute;
    right: 8px;
    top: 8px;
    transition: transform .3s;
    font-size: 12px;
    cursor: pointer;
    z-index: inherit;
}

.is-reverse{
    transform: rotate(180deg);
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