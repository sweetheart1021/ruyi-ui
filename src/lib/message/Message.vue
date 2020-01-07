<!--
 * @Descripttion: message
 * @Author: lvjing
 * @Date: 2019-12-27 13:33:01
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-07 16:37:16
 -->
<template>
    <div class="ruyi-message-content">
        <div :class="['ruyi-message', hideType ? 'ruyi-message-hide' : null]" v-if="visible">
            <span>
                <i class="iconfont icon-alert"  v-if="type === 'primary'"></i>
                <i class="iconfont icon-chenggong" v-if="type === 'success'"></i>
                <i class="iconfont icon-iconjs" v-if="type === 'warning'"></i>
                <i class="iconfont icon-shibai" v-if="type === 'error'"></i>
                <span :class="messageClassName">{{ message }}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            visible: false,
            hideType: false,
            type: '',
            duration: 2000
        }
    },
    computed: {
        messageClassName() {
            return `ruyi-message-${this.type}`
        }
    },
    methods: {
        handleSetTimer() {
            setTimeout(() => {
                this.handleClose()
            }, this.duration);
        },
        handleClose() {
            this.hideType = true;
            setTimeout(() => {
                // this.visible = false;
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            }, 1000);
        }
    },
    mounted() {
        this.handleSetTimer();
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-message{
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    display: inline-block;
    z-index: 2019;
    background: white;
    position: relative;
    animation: animationShow 0.4s forwards;
    top: 20px;
    margin-bottom: 10px;
    transition: all 0.3s;
    span{
        display: flex;
        align-items: center;
    }
}
@keyframes animationShow {
    from{
        top: 0px;
        opacity: 0;
    }
    to{
        opacity: 1
    }
}
.ruyi-message-hide{
    animation: animationHide 2s forwards;
    transition: opacity .3s,top .4s;
}
@keyframes animationHide {
    from{
        opacity: 1;
    }
    to{
        top: -24px;
        opacity: 0.7
    }
}
.iconfont{
    margin-right: 4px;
}
.icon-alert,
.ruyi-message-primary{
    color: @primary-color;
}
.icon-chenggong,
.ruyi-message-success{
    color: @success-color;
}
.icon-iconjs,
.ruyi-message-warning{
    color: @warning-color;
}
.icon-shibai,
.ruyi-message-error{
    color: @danger-color;
}

</style>