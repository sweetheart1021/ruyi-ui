<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-25 17:27:27
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-28 22:22:34
 -->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ruyi-radio-group',
    props: {
        value: {
            type: [String, Number, Boolean]
        },
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value: {
            handler(val) {
                this.currentValue = val;
                this.handleChildren();
            },
            immediate: true
        },
        currentValue(val) {
            this.$emit("input", val)
        }
    },
    methods: {
        handleChildren() {
            let children = this.$children;
            children.forEach(v => {
                v.currentValue = this.currentValue;
            });
        }
    },
    mounted() {
        this.handleChildren();
    }
}
</script>

<style lang="less" scoped>

</style>