<!--
 * @Descripttion: 返回顶部
 * @Author: lvjing
 * @Date: 2019-12-30 16:22:04
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-30 17:31:03
 -->
<template>
    <div class="ruyi-back-top-wapper" :style="styles" v-if="backTop" @click="back">
        <slot>
            <div class="ruyi-back-top-inner">
                <i class="iconfont icon-jiantouxiangshang"></i>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    props: {
        // 滚动高度达到此参数值才出现
        height: {
            type: [String, Number],
            default: 200
        },
        right: {
            type: [String, Number],
            default: '30px'
        },
        bottom: {
            type: [String, Number],
            default: '30px'
        }
    },
    computed: {
        styles() {
            let styles = {
                right: parseInt(this.right) + "px",
                bottom: parseInt(this.bottom) + "px",
            }
            return styles
        }
    },
    data() {
        return {
            backTop: false
        }
    },
    methods: {
        handleBackTop() {
            this.backTop = window.pageYOffset >= parseInt(this.height);
        },
        back() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            let time = setInterval(() => {
                top = top - 10;
                if (top < 0) {
                    clearInterval(time)
                } else {
                    window.scrollTo(0, top);
                }
            }, 10);
            this.$emit("click");
        }
    },
    mounted() {
        window.addEventListener("scroll", () => {
            this.handleBackTop();
        });
        window.addEventListener('resize', () => {
            this.handleBackTop();
        })
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleBackTop());
        window.removeEventListener('resize', this.handleBackTop());
    }
}
</script>

<style lang="less" scoped>
.ruyi-back-top-wapper{
    position: fixed;
    z-index: 2;
    cursor: pointer;
}
.ruyi-back-top-inner{
    background-color: rgba(0,0,0,.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition: all .2s ease-in-out;
    color: white;
    padding: 12px;
}
.ruyi-back-top-inner:hover{
    background-color: rgba(0,0,0,.7);
}
.icon-jiantouxiangshang{
    font-size: 14px;
}
</style>
