<!--
 * @Descripttion: modal
 * @Author: lvjing
 * @Date: 2019-12-26 09:39:12
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 14:10:19
 -->
<template>
    <transition name="fade">
        <div class="ruyi-modal-wrap" v-if="visible">
            <div class="ruyi-modal-content" :style="{width: width}">
                <div class="ruyi-modal-header">
                    <slot name="header">
                        <div class="ruyi-modal-header-title" v-text="title"></div>
                    </slot>
                    <span class="ruyi-modal-close" @click="handleCancle" v-if='closable'>×</span>
                </div>
                <div class="ruyi-modal-body">
                    <slot></slot>
                </div>
                <div class="ruyi-modal-footer">
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
        // modal的宽度
        width: {
            type: String,
            default: '520px'
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
                    document.body.setAttribute("style", '');
                    this.btnLoading = false;
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
.ruyi-modal-wrap{
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    z-index: 2019;
    background-color: rgba(55,55,55,.6);
    height: 100%;
    width: 100%;
    .ruyi-modal-content{
        box-shadow: 0 4px 12px rgba(0,0,0,.15);
        border-radius: 6px;
        background: white;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translate(-50%, 0);
        .ruyi-modal-header{
            border-bottom: 1px solid #e8eaec;
            padding: 14px 16px;
            line-height: 1;
            .ruyi-modal-close{
                list-style: none;
                font-size: 24px;
                cursor: pointer;
                position: absolute;
                right: 16px;
                top: 10px;
                color: #999;
                user-select: none;
            }
            .ruyi-modal-header-title{
                font-weight: bold;
            }
        }
        .ruyi-modal-body{
            padding: 16px;
            font-size: 14px;
            line-height: 1.5;
        }
        .ruyi-modal-footer{
            border-top: 1px solid #e8eaec;
            padding: 7px 18px;
            text-align: right;
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>