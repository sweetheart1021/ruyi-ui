<!--
 * @Descripttion: Cascader 连级选择
 * @Author: lvjing
 * @Date: 2020-01-02 17:05:05
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-02 18:38:10
 -->
<template>
    <popper trigger='click' :options="{'placement': 'bottom-start'}" :disabled='disabled'
        @hide='handleHide'>
        <div class="ruyi-cascader-wapper">
            <div class="ruyi-cascader-list" v-for="(list, i) in ulList" :key="i">
                <ul class="ruyi-cascader-ul">
                    <li
                        v-for="(item, index) in list" :key="index"
                        :class="['ruyi-cascader-item',
                            finallyValue[i] === item.value ? 'ruyi-cascader-item-selected' : null
                        ]"
                        @click="handleLiClick(item, i, index)">
                        <span>{{ item.label }}</span>
                        <i class="iconfont icon-right" v-if="item.children"></i>
                    </li>
                </ul>
            </div>
        </div>

        <div class="ruyi-cascader-input" slot="reference">
            <input type="text" class="ruyi-input" readonly placeholder="请选择..."
                v-model="inputLable">
        </div>
    </popper>
</template>

<script>
import VuePopper from 'vue-popperjs';
export default {
    components: {
        popper: VuePopper
    },
    props: {
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
        }
    },
    computed: {
        inputLable() {
            return this.finallyLable.join(' / ')
        }
    },
    data() {
        return {
            showOrHide: true,
            ulList: [this.options],
            backUpList: [],
            option: this.options,
            selectedValue: [],
            selectedLabel: [],
            finallyLable: [],
            finallyValue: []
        }
    },
    methods: {
        handleLiClick(item, parentIndex, localIndex) {
            this.selectedLabel = this.selectedLabel.slice(0, parentIndex);
            this.selectedLabel.push(item.label);

            this.selectedValue = this.selectedValue.slice(0, parentIndex);
            this.selectedValue.push(item.value);

            if (item.children) {
                this.ulList = this.ulList.slice(0, parentIndex + 1);
                this.ulList.push(item.children);
            } else {
                this.finallyLable = this.selectedLabel;
                this.finallyValue = this.selectedValue;
                this.backUpList = this.ulList;
                document.body.click();
            }
        },
        handleHide() {
            this.ulList = this.backUpList;
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-cascader-input{
    display: inline-block;
    width: 200px;
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
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
}
.ruyi-input:hover{
    border-color: @primary-color;
}
.ruyi-input:focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    border-color: @primary-color;
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
        .ruyi-cascader-item{
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
            background: #f3f3f3
        }
        .icon-right{
            margin-left: 14px;
        }
    }
    .ruyi-cascader-item-selected{
        background: #f0faff;
        span, .icon-right{
             color: @primary-color;
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
</style>