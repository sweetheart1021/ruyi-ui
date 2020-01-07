<!--
 * @Descripttion: Tree 树形控件
 * @Author: lvjing
 * @Date: 2020-01-07 18:25:08
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-07 22:21:01
 -->
<template>
    <div>
        <tree-node :data='stateTree' :props='props'></tree-node>
    </div>
</template>

<script>
import treeNode from './TreeNode';
export default {
    provide() {
        return {
            'ruyi-tree' : this
        }  
    },
    components: {
        treeNode
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
    watch: {
        data: {
            handler(val) {
                this.stateTree = this.handleSetChecked(val);
            },
            immediate: true
        }
    },
    data() {
        return {
            stateTree: this.data
        }
    },
    methods: {
        handleSetChecked(val) {
            val.forEach(v => {
                this.$set(v, 'checked', true);
                if (v.children) {
                    this.handleSetChecked(v[this.props.children])
                }
            });
            return val
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
</style>