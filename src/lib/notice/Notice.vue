<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2020-01-07 15:59:30
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-07 18:20:30
 -->
<template>
    <div :class="['ruyi-notice', remove ? 'ruyi-notice-remove': null]">
        <div class="ruyi-notice-main">
            <i class="iconfont icon-alert" v-if="type === 'primary'"></i>
            <i class="iconfont icon-chenggong" v-if="type === 'success'"></i>
            <i class="iconfont icon-iconjs" v-if="type === 'warning'"></i>
            <i class="iconfont icon-shibai" v-if="type === 'error'"></i>
            <div class="ruyi-notice-content">
                <div class="ruyi-notice-title">
                    {{ title }}
                </div>
                <div class="ruyi-notice-desc">
                    {{ message }}
                </div>
            </div>
        </div>
        <span class="ruyi-notice-close" @click="hanldeClose">×</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            duration: '',
            title: '',
            message: '',
            type: '',
            remove: false
        }
    },
    computed: {
        noticeClassName() {
            return `ruyi-notice-${this.type}`
        }
    },
    watch: {
        duration(val) {
            this.hanldeRemove(val);
        }
    },
    methods: {
        hanldeClose() {
            this.remove = true;
            setTimeout(() => {
                this.$destroy(true);
                this.$el.parentNode ? this.$el.parentNode.removeChild(this.$el) : null;
            }, 300);
        },
        hanldeRemove(val) {
            if (!val) return;
            setTimeout(()=> {
                this.remove = true;
                setTimeout(() => {
                    this.$destroy(true);
                    this.$el.parentNode ? this.$el.parentNode.removeChild(this.$el) : null;
                }, 300);
            }, val)
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-notice{
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.12), 0 0 6px rgba(0,0,0,.04);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 300px;
    padding: 12px;
    background: white;
    margin-bottom: 10px;
    animation: notificationFadeIn .3s forwards;
    transform: all 0.3s;
}
.ruyi-notice-remove{
    animation: notificationFadeOut .3s forwards;
}
.ruyi-notice-close{
    list-style: none;
    font-size: 20px;
    cursor: pointer;
    color: #d2d2d2;
    user-select: none;
}
.ruyi-notice-close:hover{
    color: #444;
}

.ruyi-notice-main{
    display: flex;
}

.ruyi-notice-title{
    color: #17233d;
    font-weight: bold;
    text-align: left;
    line-height: 24px;
}
.ruyi-notice-desc{
    font-size: 12px;
    color: #515a6e;
    text-align: left;
}

.iconfont{
    margin-right: 12px;
    font-size: 24px;
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


@keyframes notificationFadeIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes notificationFadeOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>