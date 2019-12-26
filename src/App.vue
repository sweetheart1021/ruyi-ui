<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 13:53:19
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-26 14:12:16
 -->
<template>
    <div>
        <ruyi-button type='primary' @click="modal=true">Primary</ruyi-button>
        <ruyi-button type='danger' :loading='loading'>Primary</ruyi-button>
        <ruyi-button type='success'>Primary</ruyi-button>
        <ruyi-modal :visible.sync="modal"
            @ok='handleModalOk'
            title="这里是modal的title"
            width="600px"
            loading>
            <!-- <div slot="header">
                <span>这里是modal的title</span>
            </div> -->
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <!-- <div slot="footer">
                <ruyi-button type='danger' @click="handleBtn">danger</ruyi-button>
            </div> -->
        </ruyi-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            modal: false
        }
    },
    methods: {
        handleModalOk() {
            console.log('这里是ok')
        }
    }
}
</script>

<style lang="less">
</style>