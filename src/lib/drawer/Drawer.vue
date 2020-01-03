<!--
 * @Descripttion: Drawer 抽屉
 * @Author: lvjing
 * @Date: 2019-12-26 11:17:31
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-03 13:39:09
 -->
<template>
    <transition name="slide-fade">
        <div class="ruyi-drawer-wrap" v-if="visible">
            <div class="ruyi-drawer-content" :style="{width: width}">
                <div class="ruyi-drawer-header">
                    <slot name="header">
                        <div class="ruyi-drawer-header-title" v-text="title"></div>
                    </slot>
                    <i class="ruyi-drawer-close" @click="handleCancle" v-if='closable'>×</i>
                </div>
                <div class="ruyi-drawer-body">
                    <slot></slot>
                </div>
                <div class="ruyi-drawer-footer">
                    <template>
                        <slot name="footer">
                            <ruyi-button style="margin-right: 15px" @click="handleCancle" v-text="cancleText"></ruyi-button>
                            <ruyi-button type='primary' @click="handleOk" :loading='btnLoading'>{{ onText }}</ruyi-button>
                        </slot>
                    </template>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import RuyiButton from '../button';
export default {
    components: {
        RuyiButton
    },
    props: {
        title: {
            type: [Number, String]
        },
        visible: {
            type: Boolean,
            default: false
        },
        // 显示右上角关闭按钮
        closable: {
            type: Boolean,
            default: true
        },
        //确定按钮文字
        onText: {
            type: String,
            default: '确定'
        },
        // 取消文字
        cancleText: {
            type: String,
            default: '取消'
        },
        // drawer的宽度
        width: {
            type: String,
            default: '400px'
        },
        // 确定按钮显示loading
        loading: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        visible: {
            handler(val) {
                if (val) {
                    document.body.setAttribute("style", 'overflow:hidden');
                } else {

                    this.btnLoading = false;
                    setTimeout(() => {
                        document.body.setAttribute("style", '');
                    }, 500)
                }
            },
            immediate: true
        }
    },
    data() {
        return {
            btnLoading: false
        }
    },
    methods: {
        handleCancle() {
            this.$emit("update:visible", false)
        },
        handleOk() {
            if (this.loading) {
                this.btnLoading = true;
            }
            this.$emit("ok")
        }
    }
}
</script>

<style lang="less" scoped>
.ruyi-drawer-wrap{
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    z-index: 2019;
    background-color: rgba(55,55,55,.6);
    height: 100%;
    width: 100%;
    .ruyi-drawer-content{
        box-shadow: 0 4px 12px rgba(0,0,0,.15);
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        background: white;
        position: absolute;
        right: 0;
        height: 100%;
        overflow: hidden;
        animation: ivuSlideRightIn .6s forwards;
        .ruyi-drawer-header{
            border-bottom: 1px solid #e8eaec;
            padding: 14px 16px;
            line-height: 1;
            .ruyi-drawer-close{
                font-size: 24px;
                cursor: pointer;
                position: absolute;
                right: 16px;
                top: 10px;
                color: #999;
                user-select: none;
            }
            .ruyi-drawer-header-title{
                font-weight: bold;
            }
        }
        .ruyi-drawer-body{
            padding: 16px;
            font-size: 14px;
            line-height: 1.5;
            overflow: auto;
            height: calc(100vh - 130px);
        }
        .ruyi-drawer-footer{
            border-top: 1px solid #e8eaec;
            padding: 7px 18px;
            text-align: right;
            position: absolute;
            bottom: 0px;
            width: 100%;
            box-sizing: border-box;
        }
    }
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
}
@keyframes ivuSlideRightIn {
    0% {
        // opacity: 0;
        transform-origin: 100% 0%;
        transform: scaleX(.8);
    }
    100% {
        opacity: 1;
        transform-origin: 100% 0%;
        transform: scaleX(1);
    }
}
</style>