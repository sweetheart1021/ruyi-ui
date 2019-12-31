<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-31 09:25:09
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-31 14:16:43
 -->
<template>
    <div :class="['ruyi-steps-wapper', direction === 'vertical' ? 'ruyi-steps-wapper-vertical' : null]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        // 步骤条方向
        direction: {
            validator: function(value) {
                return ['horizontal', 'vertical'].some(v => v === value)
            },
            default: 'horizontal'
        },
        value: {
            type: Number,
            default: 1
        },
        status: {
            validator: function(value) {
                return ['process', 'error'].some(v => v === value)
            },
            default: 'process'
        }
    },
    watch: {
        value(val) {
            this.handleValue(val);
        }
    },
    methods: {
        handleValue(val) {
            if (val > this.$children.length + 1) {
                this.$ruyimessage['error'](`事件已经完成啦~~`);
                return false;
            }
            this.$children.forEach((v, i) => {
                if (i === this.$children.length - 1) {
                    v.isLast = true;
                }
                if (val === i + 1) {
                    v.types = 1;
                    if (this.status === 'error') {
                        v.error = true;
                    }
                } else if (val > i + 1) {
                    v.types = 0
                } else {
                    v.types = 2;
                }
                if (this.direction === 'vertical') {
                    v.direction = 'vertical'
                }
                v.index = i + 1;
            })
        }
    },
    mounted() {
        this.handleValue(this.value);
    }
}
</script>

<style lang="less" scoped>
.ruyi-steps-wapper{
    display: flex;
}
.ruyi-steps-wapper-vertical{
    flex-direction: column;
}
</style>