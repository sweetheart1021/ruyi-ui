<!--
 * @Descripttion: Tree 树形控件
 * @Author: lvjing
 * @Date: 2020-01-07 18:25:08
 * @LastEditors  : lving
 * @LastEditTime : 2020-01-08 21:17:43
 -->
<template>
    <div class="ruyi-tree">
        <tree-node :data='stateTree' :props='props' :show-checkbox='showCheckbox'></tree-node>
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
        },
        // 设置可选择
        showCheckbox: {
            type: Boolean,
            default: false
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
        handleSetChecked(val, index=1) {
            for (let i = 0; i < val.length; i++) {
                this.$set(val[i], 'checked', false);
                this.$set(val[i], 'extend', false);
                this.$set(val[i], 'index', i);
                if (val[i].children) {
                    this.handleSetChecked(val[i][this.props.children], index + 1);
                }
            }
            return val
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-tree{
    position: relative;
}
</style>