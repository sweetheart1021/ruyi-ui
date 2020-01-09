<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-09 16:52:13
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-09 21:40:41
 -->
<template>
    <div class="ruyi-form-item">
        <label class="ruyi-form-item-label" :style="{width: labelWidth}">{{ label }} {{ labelColon ? ':' : null }}</label>
        <div class="ruyi-form-item-wapper" :style="{'margin-left': labelWidth}">
            <slot></slot>
            <transition name="fade">
                <span class="ruyi-form-item-message">请输入姓名</span>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['ruyi-form'],
    props: {
        label: {
            type: String
        },
        // label宽度
        width: {
            type: [String, Number]
        },
        prop: {
            type: String
        },
        labelColon: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        labelWidth() {
            return parseInt(this.width) + 'px'
        }
    },
    data() {
        return {
            hide: false,
            currentRules: '',
        }
    },
    mounted() {
        this['ruyi-form'].$on("on-rulse", val => {
            console.log(val[this.prop]);
            this.currentRules = val[this.prop]
        });
        this['ruyi-form'].$on("label-width", val => {
            console.log(val)
        })
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-form-item{
    margin-bottom: 18px;
}
.ruyi-form-item-label{
    padding: 0 12px 0 0;
    box-sizing: border-box;
    text-align: right;
    float: left;
    vertical-align: middle;
    line-height: 30px;
}
.ruyi-form-item-wapper{
    min-height: 32px;
    line-height: 32px;
    position: relative;
}
.ruyi-form-item-message{
    color: @danger-color;
    font-size: 12px;
    position: absolute;
    top: 100%;
    left: 0;
    line-height: 1;
    padding-top: 3px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>