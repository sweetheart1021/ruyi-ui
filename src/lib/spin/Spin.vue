<!--
 * @Descripttion: Spin 加載中
 * @Author: lvjing
 * @Date: 2019-12-30 17:53:43
 * @LastEditors  : lving
 * @LastEditTime : 2019-12-30 20:03:04
 -->
<template>
    <div class="ruyi-spin-wapper">
        <div class="ruyi-spin-content">
            <slot name="label">
                <i class="iconfont icon-Loading"></i>
                <br>
                <span>
                    加载中<span v-for="item in dian" :key="item">.</span>
                </span>
            </slot>
        </div>
        <slot></slot>
        <div class="ruyi-spin-back"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dian: 1,
            time: null
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
    mounted() {
        this.handleDian();
    },
    destroyed() {
        clearInterval(this.time)
    }
}
</script>

<style lang="less" scoped>
.ruyi-spin-wapper{
    display: inline-block;
    position: relative;
}
.ruyi-spin-content{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-size: 14px;
}
.icon-Loading{
    color: white;
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
    background: rgba(0, 0, 0, 0.8);
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