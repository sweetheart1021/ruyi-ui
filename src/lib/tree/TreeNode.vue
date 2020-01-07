<!--
 * @Descripttion: tree 组件
 * @version: 
 * @Author: lvjing
 * @Date: 2020-01-07 20:47:35
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-07 22:37:24
 -->
<template>
    <div class="ruyi-tree-content">
        <div v-for="(item, index) in data" :key="index" class="ruyi-tree-chidlren">
            <div class="ruyi-tree-item">
                <checkbox 
                    v-model="item.checked" :half='true'
                    @change="(val) => handleCheckChange(val, item, index)"
                ></checkbox>
                <span>{{item[props.label]}}</span>
            </div>
            <tree-node :data='item[props.children]'></tree-node>
        </div>
    </div>
</template>

<script>
import checkbox from '../checkbox';
export default {
    name: 'tree-node',
    inject: ['ruyi-tree'],
    components: {
        checkbox
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
        }
    },
    methods: {
        handleCheckChange(val, item, index) {
            console.log(val, item, index);
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-tree-content{
    padding: 0 0 0 18px;
}
.ruyi-tree-item{
    display: flex;
    align-items: center;
}
</style>