<!--
 * @Descripttion: Badge 徽标数
 * @Author: lvjing
 * @Date: 2020-01-02 10:17:00
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-02 11:03:10
 -->
<template>
    <div class="ruyi-badge">
        <slot></slot>
        <template v-if="text === undefined || text === null">
            <div class="ruyi-badge-dot" v-if="count === undefined || count === null"></div>
            <div :class="['ruyi-bader-count', className]">{{ showCount }}</div>
        </template>
        <template v-else>
            <div class="ruyi-bader-count">{{ text }}</div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        // 是否显示成点
        dot: {
            type: Boolean,
            default: true
        },
        // 显示数字
        count: {
            type: [Number, String]
        },
        // 最大数字显示值 配合count使用
        overflowCount: {
            type: [Number, String]
        },
        // 自定义显示
        text: {
            type: [Number, String]
        },
        type: {
            type: String,
            default: 'error'
        }
    },
    computed: {
        className() {
            return `ruyi-bader-count-${this.type}`
        },
        showCount() {
            if (!this.overflowCount) {
                return this.count
            } else {
                if (parseInt(this.overflowCount) < parseInt(this.count)) {
                    return parseInt(this.overflowCount) + '+'
                } else {
                    return parseInt(this.count)
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-badge{
    position: relative;
    display: inline-block;
}
.ruyi-badge-dot{
    position: absolute;
    right: -4px;
    top: -4px;
    min-width: 8px;
    min-height: 8px;
    border-radius: 90px;
    background: @danger-color;
    font-size: 12px;
    color: white;
}
.ruyi-bader-count{
    background: @danger-color;
    position: absolute;
    border-radius: 100px;
    color: white;
    font-size: 12px;
    padding: 0 5px;
    top: -6px;
    right: -12px;
    z-index: 2;
}
.ruyi-bader-count-primary{
    background: @primary-color;
}
.ruyi-bader-count-success{
    background: @success-color;
}
.ruyi-bader-count-warning{
    background: @warning-color;
}
</style>