<!--
 * @Descripttion: switch
 * @Author: lvjing
 * @Date: 2019-12-25 21:30:06
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-25 23:12:24
 * @FilePath: /ruyi-ui/src/components/switch/index.vue
 -->
<template>
    <div class="ruyi-switch-wapper">
        <span :class="['ruyi-switch', currentValue === activeValue ? 'ruyi-switch-checked' : null]" 
            @click="handleChange">
            <template v-if="currentValue === activeValue">
                <span class="ruyi-switch-label-active"><slot name="active"></slot></span>
            </template>
            <template v-if="currentValue === inactiveValue">
                <span class="ruyi-switch-label-inactive"><slot name="inactive"></slot></span>
            </template>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [Boolean, Number, String]
        },
        // 选中的值
        activeValue: {
            type: [Boolean, Number, String],
            default: true
        },
        // 取消的值
        inactiveValue: {
            type: [Boolean, Number, String],
            default: false
        }
    },
    watch: {
        value: {
            handler(val){
                this.currentValue = val;
            },
            immediate: true
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    methods: {
        handleChange() {
            if (typeof(this.currentValue) === 'boolean') {
                this.currentValue = !this.currentValue;
            } else {
                this.currentValue = this.currentValue === this.activeValue ? this.inactiveValue : this.activeValue;
            }
            this.$emit('input', this.currentValue);
            this.$emit('change', this.currentValue);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-switch-wapper{
    display: inline-block;
}
.ruyi-switch{
    -webkit-user-select: none;
    -moz-user-select:none;
    -o-user-select:none;
    -ms-user-select:none;
    display: inline-block;
    min-width: 44px;
    height: 22px;
    box-sizing: border-box;
    border-radius: 22px;
    background: #ccc;
    line-height: 22px;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 12px;
}
.ruyi-switch::after{
    content: '';
    width: 18px;
    height: 18px;
    background: white;
    display: inline-block;
    border-radius: 90px;
    position:absolute;
    left: 2px;
    top: 2px;
    transition: left 0.2s ease-in-out;
}
.ruyi-switch-checked{
    background-color: @primary-color;
    transition: background-color .2s ease-in-out;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
.ruyi-switch-checked::after{
    left: 23px;
    transition: left 0.2s ease-in-out;
}
.ruyi-switch-label-active{
    color: white;
    padding-left: 5px;
}
.ruyi-switch-label-inactive{
    color: white;
    position: absolute;
    right: 5px;
}
</style>