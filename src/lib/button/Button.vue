<!--
 * @Descripttion: 按钮
 * @Author: lvjing
 * @Date: 2019-12-25 09:20:02
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-27 14:03:30
 -->
<template>
    <button :class="['ruyi-button' ,'ruyi-button-' + type, loading ? 'ruyi-button-loading' : null]"
        @click="handleClick"
        :disabled="disabled">
        <i class="iconfont icon-xingzhuang" v-if="loading"></i>
        <span class="ruyi-button-span">
            <slot></slot>
        </span>
    </button>
</template>


<script>
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            if (this.loading) return;
            this.$emit("click")
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-button{
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background: none;
    height: 32px;
    padding: 0 12px;
    box-sizing: border-box;
    line-height: 1;
    border:1px solid #dcdee2;
    color: #515a6e;
}
.ruyi-button:disabled{
    background: #f7f7f7;
    color: #c5c8ce;
    border-color: #dcdee2;
    cursor: not-allowed;
}
.ruyi-button:focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
.ruyi-button:active{
    transition: border .2s ease-in-out, background .2s ease-in-out, box-shadow .2s ease-in-out;
}
.ruyi-button-default:hover,
.ruyi-button-dashed:hover{
    color: @primary-color;
    border-color: @primary-color;
}
.ruyi-button-dashed{
    border: 1px dashed #dcdee2;
}
.ruyi-button-primary{
    background: @primary-color;
    color: white;
    border-color: transparent;
}

.ruyi-button-danger{
    background: @danger-color;
    color: white;
    border-color: transparent;
}
.ruyi-button-danger:focus{
    box-shadow: 0 0 0 2px rgba(237,64,20,.2);
}

.ruyi-button-info{
    background: @info-color;
    color: white;
    border-color: transparent;
}
.ruyi-button-info:focus{
    box-shadow: 0 0 0 2px rgba(66,206,206,.2);
}

.ruyi-button-warning{
    background: @warning-color;
    color: white;
    border-color: transparent;
}
.ruyi-button-warning:focus{
    box-shadow: 0 0 0 2px rgba(255,153,0,.2);
}

.ruyi-button-success{
    background: @success-color;
    color: white;
    border-color: transparent;
}
.ruyi-button-success:focus{
    box-shadow: 0 0 0 2px rgba(25,190,107,.2);
}

.ruyi-button-loading{
    opacity: 0.6;
    cursor: default;
}
.icon-xingzhuang{
    display: inline-block;
    font-size: 12px;
    animation: loadings 10s linear infinite;
}
@keyframes loadings{
    from {
       transform: rotate(0)
    }
    to {
      transform: rotate(3600deg);
    }
}
</style>