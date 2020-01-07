<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-25 17:27:27
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-07 15:20:28
 -->
<template>
    <div class="ruyi-radio-group">
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
        }
    },
    methods: {
        handleChildren() {
            let children = this.$children;
            children.forEach(v => {
                v.currentValue = v.label === this.currentValue;
                v.group = true;
            });
        },
        handleChange(data) {
            this.currentValue = data;
            this.$emit("input", data);
            this.$emit("change", data);
        }
    },
    mounted() {
        this.handleChildren();
    }
}
</script>

<style lang="less" scoped>

</style>