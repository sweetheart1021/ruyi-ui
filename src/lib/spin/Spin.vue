<!--
 * @Descripttion: Spin 加載中
 * @Author: lvjing
 * @Date: 2019-12-30 17:53:43
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-07 15:54:36
 -->
<template>
    <div class="ruyi-spin-wapper">
        <div class="ruyi-spin-content" v-show="value">
            <slot name="label">
                <i class="iconfont icon-loading4"></i>
                <br>
                <span>
                    加载中<span v-for="item in dian" :key="item">.</span>
                </span>
            </slot>
        </div>
        <slot></slot>
        <div :class="['ruyi-spin-back', !value ? 'ruyi-spin-hide' : null]" v-if="distoryedDom"
            :style="{background: background}"></div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        // 背景颜色
        background: {
            type: String,
            default: 'rgba(0, 0, 0, 0.8)'
        }
    },
    data() {
        return {
            dian: 1,
            time: null,
            distoryedDom: false
        }
    },
    watch: {
        value: {
            handler(val) {
                if (!val) {
                   clearInterval(this.time);
                   setTimeout(() => {
                        this.distoryedDom = false;
                    }, 300)
                } else {
                    this.handleDian();
                    this.distoryedDom = true;
                }
            },
            immediate: true
        }
    },
    methods: {
        handleDian() {
            this.time = setInterval(() => {
                this.dian+=1;
                if (this.dian === 4) {
                    this.dian = 0
                }
            }, 800)
        }
    },
    destroyed() {
        clearInterval(this.time)
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-spin-wapper{
    position: relative;
}
.ruyi-spin-content{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
    text-align: center;
    color: @primary-color;
    font-size: 14px;
    user-select: none;
}
.icon-loading4{
    color: @primary-color;
    display: inline-block;
    animation: loadings 20s linear infinite;
    margin-bottom: 5px;
}
.ruyi-spin-back{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}

@keyframes loadings{
    from {
       transform: rotate(0)
    }
    to {
      transform: rotate(3600deg);
    }
}

.ruyi-spin-hide {
    animation: animationHide 0.3s forwards;
}

@keyframes animationHide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0
    }
}
</style>