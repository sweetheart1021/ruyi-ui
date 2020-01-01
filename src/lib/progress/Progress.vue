<!--
 * @Descripttion: Progress 进度条
 * @Author: lvjing
 * @Date: 2019-12-31 15:58:24
 * @LastEditors  : lving
 * @LastEditTime : 2019-12-31 21:36:40
 -->
<template>
    <div class="ruyi-progress-wapper">
        <div class="ruyi-progress-inner" :style="{height: parseInt(height) + 'px'}">
            <div :class="['ruyi-progress-bg',
                status === 'success' || isSuccess === 100 ? 'ruyi-progress-bg-success' : null,
                status === 'error' ? 'ruyi-progress-bg-error' : null,
            ]"
                :style="{width: isSuccess + '%','background-image':
                    strokeColorLength ? `linear-gradient(to right, ${strokeColor[0]} 0%, ${strokeColor[1]} 100%` : null,
                    'line-height': parseInt(height) + 'px',
                }">
                <span class="ruyi-progress-label" v-if="textInside">{{ percent + "%" }}</span>
            </div>
        </div>
        <div class="ruyi-progress-slot" v-if="!textInside">
            <slot>
                <span class="ruyi-progress-percent" v-if="!hideInfo">{{ isSuccess + '%' }}</span>
                <i class="iconfont icon-benpao" v-if='hideInfo && isSuccess < 100'></i>
                <i class="iconfont icon-chenggong" v-if='hideInfo && isSuccess === 100 && status !== "error"'></i>
                <i class="iconfont icon-shibai" v-if='hideInfo && status === "error"'></i>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 进度百分比
        percent: {
            type: [String, Number],
            default: 0
        },
        // 进度条高度
        height: {
            type: [String, Number],
            default: 10
        },
        status: {
            validator: function(value) {
                return ['normal', 'active', 'error', 'success'].some(v => v === value)
            },
            default: 'normal'
        },
        // 显示数字还是图标
        hideInfo: {
            type: Boolean,
            default: false
        },
        // 设置渐变色
        strokeColor: {
            type: Array,
            default: () => []
        },
        // 步骤条方向
        direction: {
            validator: function(value) {
                return ['horizontal', 'vertical'].some(v => v === value)
            },
            default: 'horizontal'
        },
        // 百分比数字是否显示到里面
        textInside: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isSuccess() {
            let value = parseInt(this.percent);
            return value > 100 ? 100 : value
        },
        strokeColorLength() {
            return this.strokeColor.length
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-progress-wapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
}
.ruyi-progress-slot{
    white-space:nowrap;
    .icon-benpao{
        color: @primary-color;
    }
    .icon-chenggong{
        color: @success-color;
        font-size: 12px;
    }
    .icon-shibai{
        font-size: 14px;
        color: @danger-color;
    }
}
.ruyi-progress-inner{
    height: 10px;
    display: inline-block;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 100px;
    position: relative;
    margin-right: 10px;
}
.ruyi-progress-bg{
    background: @primary-color;
    height: inherit;
    border-radius: 100px;
    transition: all 0.4s ease;
    text-align: right;
    padding-right: 7px;
}
.ruyi-progress-bg-success{
    background: @success-color;
}
.ruyi-progress-bg-error{
    background: @danger-color;
}
.ruyi-progress-percent{
    color: #808695;
    font-size: 12px;
}
.ruyi-progress-label{
    font-size: 12px;
    color: white;
}
</style>