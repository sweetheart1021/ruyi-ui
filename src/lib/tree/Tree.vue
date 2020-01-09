<!--
 * @Descripttion: Tree 树形控件
 * @Author: lvjing
 * @Date: 2020-01-07 18:25:08
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-09 15:59:01
 -->
<template>
    <div class="ruyi-tree">
        <tree-node :data='stateTree' :props='props'
            :show-checkbox='showCheckbox'
            :node-key='nodeKey'>
        </tree-node>
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
        },
        // 唯一标志符
        nodeKey: {
            type: String,
            default: 'id'
        }
    },
    watch: {
        data: {
            handler(val) {
                this.handleSetChecked(val);
            },
            immediate: true
        }
    },
    data() {
        return {
            stateTree: this.data,
            parentData: []
        }
    },
    methods: {
        handleSetChecked(val, index = 1) {
            for (let i = val.length - 1; i >= 0; i--) {
                this.$set(val[i], 'checked', false);
                this.$set(val[i], 'index', index);
                if (val[i].children) {
                    this.$set(val[i], 'half', false); // 半选
                    this.$set(val[i], 'extend', false); // 展开
                    this.handleSetChecked(val[i][this.props.children], index + 1);
                }
            }
        },
        // 查找父级设置半选状态
        handleSetHalf(data, id, data2, isChecked, obj={}) {
            for(let i = data.length - 1; i >= 0; i--) {
                if (data[i][this.nodeKey] === id) {
                    this.parentData.push(obj);
                    if (obj[this.props.children]) {
                        let isAllChecked = obj[this.props.children].every(v => v.checked);
                        let noAllChecked = obj[this.props.children].every(v => !v.checked);
                        console.log(isAllChecked, noAllChecked)
                        // if (isAllChecked) {
                        //     this.$set(obj, 'half', false);
                        //     this.$set(obj, 'checked', true);
                        // } else if (noAllChecked) {
                        //     this.$set(obj, 'half', false);
                        //     this.$set(obj, 'checked', false);
                        // }

                        if (isAllChecked) {
                            this.$set(obj, 'half', false);
                            this.$set(obj, 'checked', true);
                        } else {
                            this.$set(obj, 'half', true);
                            this.$set(obj, 'checked', false);
                        }
                    }
                    if (obj.index === 1) {
                        break;
                    }
                    this.handleSetHalf(data2, obj[this.nodeKey], data2, isChecked, obj);
                    break;
                } else {
                    if (data[i][this.props.children]) {
                        this.handleSetHalf(data[i][this.props.children], id, data2, isChecked,  data[i])
                    }
                }
            }
            return data;
        }
    },
    mounted() {
        this.$on("set-half", item => {
            console.time();
            this.parentData = [];
            this.stateTree = this.handleSetHalf(this.stateTree, item[this.nodeKey], this.stateTree, item.checked);
            console.timeEnd();
        })
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-tree{
    position: relative;
}
</style>