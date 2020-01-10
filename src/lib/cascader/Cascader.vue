<!--
 * @Descripttion: Cascader 连级选择
 * @Author: lvjing
 * @Date: 2020-01-02 17:05:05
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-10 10:08:24
 -->
<template>
    <div class="ruyi-cascader">
        <popper trigger='clickToToggle' :options="{'placement': 'bottom-start'}" :disabled='disabled'
            @hide='handleHide' @show='handlePopperTogger'  tagName='div'>
            <div class="ruyi-cascader-wapper">
                <div class="ruyi-cascader-list" v-for="(list, i) in ulList" :key="i">
                    <ul class="ruyi-cascader-ul">
                        <li
                            v-for="(item, index) in list" :key="index"
                            :class="['ruyi-cascader-item',
                                selectedValue[i] === item[props.value] ? 'ruyi-cascader-item-selected' : null,
                                item[props.disabled] ? 'ruyi-cascader-item-disabled' : null,

                            ]"
                            @click="handleLiClick(item, i, index)"
                            @mouseenter="handleLiMouse(item, i, index)">
                            <span>{{ item[props.label] }}</span>
                            <i class="iconfont icon-right" v-if="item[props.children]"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="ruyi-cascader-input" slot="reference">
                <input type="text" :class="['ruyi-input',
                    disabled ? 'ruyi-cascader-disabled' : null,
                    !background ? 'no-background' : null,
                    error ? 'ruyi-form-error' : null
                    ]"
                    readonly :placeholder="placeholder"
                    v-model="inputLable">
                <i :class="['iconfont icon-icon32210', reverse && !disabled ? 'is-reverse' : null]"></i>
            </div>
        </popper>
    </div>
</template>

<script>
import VuePopper from 'vue-popperjs';
export default {
    components: {
        popper: VuePopper
    },
    props: {
        // 练级展开方式
        trigger: {
            validator: function(value) {
                return ['hover', 'click'].some(v => v === value)
            },
            default: 'click'
        },
        value: {
            type: Array,
            default: () => []
        },
        options: {
            type: Array,
            default: () => []
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请选择...'
        },
        // 禁用状态下是否输入框有背景色, 默认灰色，不需要false就为白色
        background: {
            type: Boolean,
            default: true
        },
        // 定义key
        props: {
            type: Object,
            default: () => {
                return {
                    value: 'value',
                    label: 'label',
                    children: 'children',
                    disabled: 'disabled'
                }
            }
        },
        // 支持清空
        clearable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        inputLable() {
            return this.finallyLable.join(' / ')
        },
        showClearable() {
            return this.clearable && this.finallyValue.length
        },
        hideJiantou() {
            return !this.clearableIcon
        }
    },
    watch: {
        value: {
            handler(val) {
                this.finallyValue = val;
                this.finallyLable = [];
                this.ulList = this.handleSetValue(val, this.options);
            },
            immediate: true
        },
    },
    data() {
        return {
            ulList: [this.options],
            backUpList: [],
            selectedValue: [],
            selectedLabel: [],
            finallyLable: [],
            finallyValue: [],
            // 旋转箭头
            reverse: false,
            // 显示清空按钮
            clearableIcon: false,
            forceShow: false,
            error: true
        }
    },
    methods: {
        handleLiClick(item, parentIndex, localIndex) {
            if (item[this.props.disabled]) return ;
            this.selectedLabel = this.selectedLabel.slice(0, parentIndex);
            this.selectedLabel.push(item[this.props.label]);

            this.selectedValue = this.selectedValue.slice(0, parentIndex);
            this.selectedValue.push(item[this.props.value]);

            if (item[this.props.children]) {
                this.ulList = this.ulList.slice(0, parentIndex + 1);
                this.ulList.push(item[this.props.children]);
            } else {
                this.finallyLable = this.selectedLabel;
                this.finallyValue = this.selectedValue;
                this.backUpList = this.ulList;
                document.body.click();
                this.$emit('input', this.finallyValue);
                this.$emit("change", this.finallyValue);
            }
        },
        handleLiMouse(item, parentIndex, localIndex) {
            if (item[this.props.disabled]) return ;
            if (this.trigger !== 'hover') return;
            this.selectedLabel = this.selectedLabel.slice(0, parentIndex);
            this.selectedLabel.push(item[this.props.label]);

            this.selectedValue = this.selectedValue.slice(0, parentIndex);
            this.selectedValue.push(item[this.props.value]);
            if (item[this.props.children]) {
                this.ulList = this.ulList.slice(0, parentIndex + 1);
                this.ulList.push(item[this.props.children]);
            }
        },
        handleHide() {
            if (this.backUpList.length) {
                this.ulList = this.backUpList;
            }
            if (!this.finallyValue.length) {
                this.ulList = [this.options]
            }
            this.handlePopperTogger();
        },
        handlePopperTogger() {
            this.reverse = !this.reverse;
            if (this.finallyValue.length) {
                this.selectedValue = this.finallyValue;
            }
        },
        // 设置默认值
        handleSetValue(val, data) {
            if (!val.length) {
                return [this.options]
            }
            let arr = [];
            let children = [];
            val.forEach((v, i) => {
                if (i === 0) {
                    if (data.filter(c =>  c[this.props.value] === v).length) {
                        this.finallyLable.push(data.filter(c =>  c[this.props.value] === v)[0][this.props.label])
                        arr.push(data);
                        children = data.filter(c =>  c[this.props.value] === v)[0][this.props.children]
                    }
                } else {
                    if (children.filter(c =>  c[this.props.value] === v).length) {
                        this.finallyLable.push(children.filter(c =>  c[this.props.value] === v)[0][this.props.label])
                        arr.push(children);
                        children = children.filter(c =>  c[this.props.value] === v)[0][this.props.children]
                    }
                }

            });
            return arr
        },
        handleShowCleaable() {
            this.clearableIcon = !this.clearableIcon;
        },
        handleClearAble(e) {
            // e.stopPropagation();
            // this.forceShow = false;
            Object.assign(this.$data, this.$options.data());
            this.$emit('input', [])
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-cascader{
    display: inline-block;
}

.ruyi-cascader-input{
    display: inline-block;
    position: relative;
    width: 100%;
}
.ruyi-input{
    border: 1px solid #dcdee2;
    padding: 4px 7px;
    width: 100%;
    height: 32px;
    line-height: 32px;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
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
.ruyi-input:hover{
    border-color: @primary-color;
}
.ruyi-input:focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    border-color: @primary-color;
}

.ruyi-cascader-disabled{
    background: #f3f3f3;
    color: #ccc;
    opacity: 1;
}
.ruyi-cascader-disabled:focus{
    border-color: #dcdee2;
    box-shadow: none;
}
.ruyi-cascader-disabled:hover{
    cursor: not-allowed;
    border-color: #dcdee2;
}

.ruyi-cascader-wapper{
    display: flex;
    flex: 1;
    z-index: 99;
    width: initial;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-radius: 4px;
    overflow: hidden;
    .ruyi-cascader-ul{
        border-right: 1px solid #e8eaec;
        list-style: none;
        height: 180px;
        box-sizing: border-box;
    }
    .ruyi-cascader-list{
        background-color: #fff;
        box-sizing: border-box;
        padding: 5px 0;
        animation: ivuSlideUpIn .3s;
        z-index: 99;
        height: 180px;
        min-width: 90px;
        font-size: 14px;
    }
    .ruyi-cascader-item{
        line-height: 24px;
        padding: 5px 12px;
        padding-right: 5px;
        color: #515a6e;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        z-index: inherit;
        transition: background .2s ease-in-out;
        user-select: none;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        transition: background .2s ease-in-out;
    }
    .ruyi-cascader-item:hover{
        background: #f3f3f3;
        span{
            color: @primary-color;
        }
    }
    .icon-right{
        margin-left: 14px;
    }
    .ruyi-cascader-item-selected{
        background: #f0faff;
        span, .icon-right{
             color: @primary-color;
        }
    }
    .ruyi-cascader-item-disabled{
        cursor: not-allowed;
        span{
            color: #c5c8ce;
        }
        .icon-right{
            color: #c5c8ce;
        }
    }
    .ruyi-cascader-item-disabled:hover{
        background: none;
        span{
            color: #c5c8ce;
        }
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
}
.no-background{
    background-color: white !important;
    color: #515a6e !important;
}
.icon-icon32210,
.icon-qingkong{
    position: absolute;
    right: 8px;
    top: 2px;
    line-height: 28px;
    color: #c0c4cc;
    transition: transform .3s;
    font-size: 12px;
}
.icon-qingkong{
    color: #515a6e;
    cursor: pointer;
    display: none;
}
.is-reverse{
    transform: rotate(180deg)
}


.ruyi-form-error{
    border-color: @danger-color;
}
.ruyi-form-error:hover{
    border-color: @danger-color;
}
.ruyi-form-error:focus{
    border-color: @danger-color;
     box-shadow: 0 0 0 2px rgba(237,64,20,.2);
}
</style>