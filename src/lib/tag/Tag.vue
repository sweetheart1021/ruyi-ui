<!--
 * @Descripttion:  tag 组件
 * @version:
 * @Author: lvjing
 * @Date: 2019-12-31 21:47:20
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-02 10:09:58
 -->
<template>
    <div :class="['ruyi-tag',
        color ? 'ruyi-tag-primary' : null,
        color && type === 'error' ? 'ruyi-tag-error' : null,
        color && type === 'success' ? 'ruyi-tag-success' : null,
        color && type === 'warning' ? 'ruyi-tag-warning' : null]">
        <span class="ruyi-tag-label">
            <div :class="['ruyi-tag-dot',
                type === 'error' ? 'ruyi-tag-dot-error' : null,
                type === 'success' ? 'ruyi-tag-dot-success' : null,
                type === 'warning' ? 'ruyi-tag-dot-warning' : null,
                ]" v-if="dot"></div>
            <slot></slot>
            <i class="iconfont icon-cuowu" v-if="closable" @click="handleClose"></i>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        // 显示关闭按钮
        closable: {
            type: Boolean,
            default: false
        },
        // 显示点
        dot: {
            type: Boolean,
            default: false
        },
        // 背景 边框颜色是否跟type一样
        color: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            this.$emit("close-click");
        },
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-tag{
    padding: 0 12px;
    border: 1px solid #e8eaec;
    display: inline-block;
    border-radius: 3px;
    background: #f7f7f7;
    vertical-align: middle;
    opacity: 1;
    height: 32px;
    box-sizing: border-box;
    cursor: text;
}
.ruyi-tag:hover{
    opacity: 0.85;
}
.ruyi-tag-label{
    font-size: 12px;
    line-height: 32px;
}
.ruyi-tag-dot{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 90px;
    box-sizing: border-box;
    background: @primary-color;
    margin-right: 5px;
}
.ruyi-tag-dot-error{
    background: @danger-color;
}
.ruyi-tag-dot-success{
    background: @success-color;
}
.ruyi-tag-dot-warning{
    background: @warning-color;
}
.icon-cuowu{
    font-size: 12px;
    cursor: pointer;
    color: #666;
    opacity: 0.66;
    margin-left: 3px;
}
.icon-cuowu:hover{
    opacity: 1;
}
.ruyi-tag-checkable{
    border: none;
    background: none;
    cursor: pointer;
    user-select: none;
}

.ruyi-tag-primary{
    background: @primary-color;
    color: white;
    .icon-cuowu{
        color: white;
    }
    .ruyi-tag-dot{
        background: white;
    }
}
.ruyi-tag-success{
    background: @success-color;
    color: white;
    .icon-cuowu{
        color: white;
    }
    .ruyi-tag-dot{
        background: white;
    }
}
.ruyi-tag-warning{
    background: @warning-color;
    color: white;
    .icon-cuowu{
        color: white;
    }
    .ruyi-tag-dot{
        background: white;
    }
}
.ruyi-tag-error{
    background: @danger-color;
    color: white;
    .icon-cuowu{
        color: white;
    }
    .ruyi-tag-dot{
        background: white;
    }
}
</style>