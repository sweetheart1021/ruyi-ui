<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 15:39:00
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 21:45:32
 -->
<template>
    <div class="ruyi-select" ref="ruyi-select">
        <!-- @documentClick='handleDocumentClick' -->
        <popper trigger="click" @show='handlePopperTogger' @hide='handlePopperTogger'
            tagName='div' visible-arrow :disabled='disabled'>
            <div class="ruyi-select-options-wapper popper" :style="optionWapperWidth">
                <template v-if="slots">
                    <ul>
                        <slot></slot>
                    </ul>
                </template>
                <template v-else>
                    <div class="select-no-option">
                        <slot name="no-data">
                            <i class="iconfont icon-wushuju"></i>
                            <span>暂无数据</span>
                        </slot>
                    </div>
                </template>
            </div>

            <div :class="['ruyi-select-wapper', reverse && !disabled ? 'ruyi-select-wapper-focus' : null,
                disabled ? 'ruyi-select-disabled' : null]" slot="reference" :contenteditable="filterable"
                @input="handleFilterInput"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave">
                {{ currentLabel }}
                <span class="ruyi-select-placeholder" v-if="currentLabel === undefined || currentLabel === ''">{{ placeholder }}</span>
                <i :class="['iconfont icon-icon32210', reverse && !disabled ? 'is-reverse' : null]"
                    ref="icon-icon32210"></i>
                <i class="iconfont icon-qingkong" v-if="clearable && currentLabel !== undefined && currentLabel !== ''"
                    @click.stop="hgandleClearable"></i>
            </div>
        </popper>
    </div>
</template>

<script>
import VuePopper from 'vue-popperjs';
export default {
    name: 'select-option',
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
                this.handleChilrenValue();
            },
            immediate: true
        },
        currentValue(val) {
            this.$emit('input', val);
            this.$emit("change", val);
            this.handleSetLabel(val);
        },
    },
    computed: {
        slots(){
            return this.$slots.default
        },
        label() {
            let children = this.$children[0].$children;
            let labels = children.filter(v => v.value === this.value);
            if (labels.length) {
                return labels[0].label ? labels[0].label : labels[0].$slots.default[0].text
            }
            return ''
        }
    },
    data() {
        return {
            reverse: false,
            currentValue: this.value,
            currentLabel: '',
            optionWapperWidth: '',
        }
    },
    methods: {
        handleChilrenValue() {
            setTimeout(() => {
                let children = this.$children[0].$children;
                children.forEach(v => {
                    v.currentValue = this.currentValue;
                });
            }, 0)
        },
        handleSetLabel(val) {
            let children = this.$children[0].$children;
            let labels = children.filter(v => v.value === val);
            if (labels.length) {
                this.currentLabel =  labels[0].label ? labels[0].label : labels[0].$slots.default[0].text
            } else {
                this.currentLabel = ''
            }
        },
        handlePopperTogger() {
            this.reverse = !this.reverse;
        },
        // handleDocumentClick() {
        //     console.log('设置关闭')
        // }
        handleFilterInput(event) {
            let children = this.$children[0].$children;
            children.forEach(v => {
                let label = v.label ? v.label : v.$slots.default[0].text;
                console.log(label);
            });
        },
        // 鼠标划入隐藏箭头
        handleMouseenter() {
            if (this.currentLabel && this.clearable) {
                this.$refs['icon-icon32210'].setAttribute('style', 'display:none')
            }
        },
        // 鼠标滑出显示箭头
        handleMouseleave() {
            if (this.currentLabel && this.clearable) {
                this.$refs['icon-icon32210'].setAttribute('style', 'display:block')
            }
        },
        // 清空事件
        hgandleClearable() {
            this.$nextTick(() => {
                this.handleSetLabel('');
                this.$emit('input', '');
            });
        }
    },
    mounted() {
        this.optionWapperWidth = this.$refs['ruyi-select'].getAttribute("style");
        this.handleSetLabel(this.value);
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-select{
    display: inline-table;
}
.ruyi-select-wapper{
    display: inline-table;
    position: relative;
    border: 1px solid #dcdee2;
    padding: 4px 7px;
    width: 100%;
    height: 32px;
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
    .icon-qingkong{
        display: none;
    }
}
.ruyi-select-wapper:hover{
    border-color: @primary-color;
    .icon-qingkong{
        display: block;
    }
}
.ruyi-select-wapper-focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    border-color: @primary-color;
}
.ruyi-select-disabled{
    background: #f3f3f3;
    color: #ccc;
    opacity: 1;
}
.ruyi-select-disabled:hover{
    cursor: not-allowed;
    border-color: #dcdee2;
}
.ruyi-select-placeholder{
    color: #c5c8ce;
}
.icon-icon32210,
.icon-qingkong{
    position: absolute;
    right: 8px;
    top: 0px;
    line-height: 28px;
    color: #c0c4cc;
    transition: transform .3s;
    font-size: 12px;
}
.icon-qingkong{
    color: #515a6e;
}
.is-reverse{
    transform: rotate(180deg)
}

.ruyi-select-options-wapper{
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    max-height: 200px;
    overflow: auto;
    text-align: left;
}

.select-no-option{
    font-size: 14px;
    text-align: center;
    padding: 20px;
    i{
        margin-right: 5px;
    }
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