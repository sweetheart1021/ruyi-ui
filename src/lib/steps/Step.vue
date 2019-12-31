<!--
 * @Descripttion: step
 * @Author: lvjing
 * @Date: 2019-12-31 09:39:06
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-31 14:26:11
 -->
<template>
    <div :class="[
        direction === 'vertical' ? 'ruyi-step-wapper-vertical' : 'ruyi-step-wapper',
        isLast ? 'ruyi-step-wapper-last' : null,
        types === 0 ? 'ruyi-step-wapper-finish' : null,
        types === 2 ? 'ruyi-step-wapper-wait' : null,
        error || status === 'error' ? 'ruyi-step-wapper-error' : null
    ]">
        <div class="ruyi-steps-step">
            <template v-if="!error && status !== 'error'">
                <template v-if="types">
                    {{ index }}
                </template>
                <template v-else>
                    <slot name="success">
                        <i class="iconfont icon-gou"></i>
                    </slot>
                </template>
            </template>
            <template v-else-if="error || status === 'error'">
                <slot name="error">
                    <i class="iconfont icon-cuowu"></i>
                </slot>
            </template>
        </div>
        <div :class="['ruyi-steps-content', types === 0 || types === 2 ? 'ruyi-steps-staus-finish' : null]">
            <slot name="title">
                <div class="ruyi-steps-title">{{ title }}</div>
            </slot>
            <slot name="content">
                <div class="ruyi-steps-main">{{ content }}</div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        content: {
            type: String
        },
        status: {
            validator: function(value) {
                return ['process', 'error'].some(v => v === value)
            },
            default: 'process'
        }
    },
    data() {
        return {
            isLast: false,
            index: 1,
            types: 0, // 0是已完成，1是当前，2是未完成
            error: false,
            direction: 'horizontal'
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-step-wapper{
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
    margin-right: 20px;
}
.ruyi-step-wapper::after{
    content: "";
    height: 1px;
    width: calc(100% - 20px);
    background: @primary-color;
    position: absolute;
    top: 20px;
    left: 31px;
    box-sizing: border-box;
}

// 垂直显示
.ruyi-step-wapper-vertical{
    display: flex;
    position: relative;
    flex: 1;
    margin-bottom: 33px;
}
.ruyi-step-wapper-vertical::after{
    content: "";
    height: 100%;
    width: 1px;
    background: @primary-color;
    position: absolute;
    top: 30px;
    left: 12px;
    box-sizing: border-box;
}

.ruyi-step-wapper-last{
    margin-right: 0px;
}
.ruyi-step-wapper-last::after{
    content: '';
    height: 0px;
}
.ruyi-steps-step{
    width: 26px;
    height: 26px;
    line-height: 26px;
    color: white;
    border-radius: 90px;
    background: @primary-color;
    text-align: center;
    border: 1px solid  @primary-color;
    box-sizing: border-box;
}
.ruyi-steps-content{
    margin-left: 5px;
}

// 已完成
.ruyi-step-wapper-finish{
    .ruyi-steps-step{
        background: white;
        border-color: @primary-color;
        .icon-gou{
            color: @primary-color;
        }
    }
}
.ruyi-step-wapper-finish::after{
    background: #ccc;
}
// 未完成
.ruyi-step-wapper-wait{
     .ruyi-steps-step{
        background: white;
        border-color: #999;
        color: #999;
    }
}
// 错误状态
.ruyi-step-wapper-error{
    .ruyi-steps-step{
        background: @danger-color;
        border-color: @danger-color;
    }
    .ruyi-steps-content{
        color: @danger-color;
    }
    .icon-cuowu{
        color: white;
    }
}
.ruyi-step-wapper-error::after{
    background: @danger-color;
}
.ruyi-step-wapper-wait::after{
    background: #ccc;
}
// 已完成
.ruyi-steps-staus-finish{
    color: #999;
}
// 进行中
.ruyi-steps-staus-process{
    color: #666;
}
.ruyi-steps-title{
    font-size: 14px;
    font-weight: bold;
}
.ruyi-steps-main{
    font-size: 12px;
}
</style>