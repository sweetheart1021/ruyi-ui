<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 15:39:00
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 19:09:03
 -->
<template>
    <div>
        <!-- @documentClick='handleDocumentClick' -->
        <popper trigger="click" @show='handlePopperTogger' @hide='handlePopperTogger'
            tagName='div'>
            <div class="ruyi-select-options-wapper" visible-arrow>
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

            <div :class="['ruyi-select-wapper', reverse ? 'ruyi-select-wapper-focus' : null ]" slot="reference">
                {{ currentLabel }}
                <span class="ruyi-select-placeholder" v-if="currentLabel === undefined || currentLabel === ''">{{ placeholder }}</span>
                <i :class="['iconfont icon-icon32210', reverse ? 'is-reverse' : null]"></i>
            </div>
        </popper>


    </div>
</template>

<script>
import VuePopper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
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
            this.$emit('input', val)
        },
    },
    computed: {
        slots(){
            return this.$slots.default
        }
    },
    data() {
        return {
            reverse: false,
            currentValue: this.value,
            currentLabel: '',
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
        handlePopperTogger() {
            this.reverse = !this.reverse;
        },
        // handleDocumentClick() {
        //     console.log('设置关闭')
        // }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
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
}
.ruyi-select-wapper:hover{
    border-color: @primary-color;
}
.ruyi-select-wapper-focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    border-color: @primary-color;
}
.ruyi-select-placeholder{
    color: #c5c8ce;
}
.icon-icon32210{
    position: absolute;
    right: 8px;
    top: 0px;
    line-height: 28px;
    color: #c0c4cc;
    transition: transform .3s
}
.is-reverse{
    transform: rotate(180deg)
}

.ruyi-select-options-wapper{
    min-width: 200px;
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