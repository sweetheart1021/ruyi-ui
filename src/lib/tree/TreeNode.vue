<!--
 * @Descripttion: tree 组件
 * @version:
 * @Author: lvjing
 * @Date: 2020-01-07 20:47:35
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-08 18:24:05
 -->
<template>
    <div class="ruyi-tree-content">
        <div v-for="(item, index) in currentData" :key="index" class="ruyi-tree-chidlren">
            <div class="ruyi-tree-item" tabindex="0">
                <template v-if="showCheckbox">
                    <i :class="['iconfont icon-xiangyoujiantou', item.extend ? 'icon-xiangyou-down' : null]"
                        v-if="item[props.children]"
                        @click="item.extend = !item.extend"></i>
                    <ruyi-checkbox
                        :style="{'margin-left': item[props.children] ? null : '20px'}"
                        v-model="item.checked" :half='false'
                        @change="(val) => handleCheckChange(val, item, index)"
                    >
                        <span>{{item[props.label]}}</span>
                    </ruyi-checkbox>
                </template>
                <template v-else>
                    <i :class="['iconfont icon-xiangyoujiantou', item.extend ? 'icon-xiangyou-down' : null]"
                        v-if="item[props.children]"
                        @click="item.extend = !item.extend"></i>
                    <span class="ruyi-tree-item-label" @click="handleLabelClick(item)">{{item[props.label]}}</span>
                </template>
            </div>
            <tree-node :data='item[props.children]' :show-checkbox="showCheckbox"></tree-node>
        </div>
    </div>
</template>

<script>
import ruyiCheckbox from '../checkbox';
export default {
    name: 'tree-node',
    inject: ['ruyi-tree'],
    components: {
        ruyiCheckbox
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        props: {
            type: Object,
            default: () => {
                return {
                    children: 'children',
                    label: 'label',
                    disabled: 'disabled'
                }
            }
        },
        // 设置可选择
        showCheckbox: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentData: this.data
        }
    },
    methods: {
        // 设置全选或者取消权限事件
        handleSetChecked(data, val) {
            if (data[this.props.children]) {
                data[this.props.children].forEach(v => {
                    this.$set(v, 'checked', val);
                    this.handleSetChecked(v, val);
                });
            }
            return data
        },
        // 根据当前数据查找所有父级
        handleFindParsent(data) {

        },
        handleCheckChange(val, item, index) {
            // console.log(val, item, index, item[this.props.children]);
            this.handleSetChecked(item, val);
        },
        // 点击
        handleLabelClick(item) {
            console.log(item);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-tree-content{
    padding-left: 18px;
}

.ruyi-tree-item{
    display: flex;
    align-items: center;
    padding: 3px 0;
}
.ruyi-tree-item:focus{
    outline-color: transparent;
}
.icon-xiangyoujiantou{
    font-size: 12px;
    color: #c0c4cc;
    padding: 4px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: transform .3s ease-in-out;
}
.icon-xiangyou-down{
    transform: rotate(90deg);
}

.ruyi-tree-item-label{
    cursor: pointer;
}

</style>