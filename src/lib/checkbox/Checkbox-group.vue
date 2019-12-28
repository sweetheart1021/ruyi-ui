<!--
 * @Descripttion: checkbox-group
 * @Author: lvjing
 * @Date: 2019-12-25 20:52:51
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-25 21:21:32
 * @FilePath: /ruyi-ui/src/components/checkbox/checkbox-group.vue
 -->
<template>
    <div>
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'ruyi-checkbox-group',
    props: {
        value: {
            type: Array,
            default: () => []
        }
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
            this.$emit("change", val);
            this.$emit("input", val);
        }
    },
    methods: {
        handleChildren() {
            setTimeout(() => {
                let children = this.$children;
                this.$children.forEach(v => {
                    v.currentValue = this.currentValue;
                });
            }, 0)
        }
    }
}
</script>

