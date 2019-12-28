<template>
    <div :style="divStyles">
        <div class="ruyi-table-header">
            <table cellspacing='0' cellpadding='0' class="ruyi-table" ref="ruyi-table-header">
                <colgroup>
                    <col :width='item.width ? item.width : cloWidth' 
                        v-for="(item, index) in columns" :key="index"/>
                </colgroup>
                <thead>
                    <tr>
                        <th v-for="(column, index) in columns" :key="index"
                            :align='column.align ? column.align : "left"'>
                            <div class="ruyi-table-cell">
                                <template v-if="column.type !== 'selection'">
                                    {{ column.title }}
                                </template>
                                <template v-else>
                                    <ruyi-checkbox :value.sync='selectAll'></ruyi-checkbox>
                                </template>
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="ruyi-table-body" ref="ruyi-table-body" :style="styles">
            <table cellspacing='0' cellpadding='0' class="ruyi-table">
                <colgroup>
                    <col :width='item.width ? item.width : cloWidth' 
                        v-for="(item, index) in columns" :key="index"/>
                </colgroup>
                <tbody>
                    <tr v-for="(item, index) in datas" :key="index" 
                        :class="['ruyi-table-row' , stripe && index % 2 ? 'ruyi-table-row-stripe' : null]"
                        @click.stop="handleRow(item)">
                        <td v-for="(column, key) in columns" :key="key"
                        :align='column.align ? column.align : "left"'
                        @click.stop='handleCellClick(item, column)'>
                        <div class="ruyi-table-cell">
                            <template v-if="column.type !== 'selection'">
                                <slot :name="column.key" :row='item' :index='index'>{{ item[column.key] }}</slot>
                            </template>
                            <template v-else>
                                <ruyi-checkbox :value.sync='item.select'></ruyi-checkbox>
                            </template>
                        </div>    
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import RuyiCheckbox from '../checkbox';
export default {
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        },
        // 表格固定高度
        height: {
            type: [String, Number]
        },
        // 表格最大高度
        maxHeight: {
            type: [String, Number]
        },
        // 整个组件的宽度
        width: {
            type: [String, Number]
        },
        // 显示斑马纹
        stripe: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        // 设置表格的高度和宽度，可以出现滚动条
        styles() {
            let styles = {};
            if (this.height) {
                styles = {
                    height: parseInt(this.height) + 'px'
                }
            }
            if (this.maxHeight) {
                styles = {
                    maxHeight: parseInt(this.maxHeight) + 'px'
                }
            }
            return styles;
        },
        //整个组件的宽度
        divStyles() {
            return {
                width: parseInt(this.width) ? parseInt(this.width) + 'px' : '100%'
            }
        }
    },
    watch: {
        data: {
            handler(val) {
                this.datas = JSON.parse(JSON.stringify(val));
                this.datas.forEach(element => {
                    element.select = true
                });
            },
            immediate: true
        }
    },
    data() {
        return {
            datas: [],
            cloWidth: 0,
            tableWidth: 0,
            selectAll: true
        }
    },
    methods: {
        // 行点击事件
        handleRow(row) {
            this.$emit("row-click", row);
        },
        // 单元格点击事件
        handleCellClick(row, column) {
            this.$emit("cell-click", row, column);
        },
        // 全选事件
        handleSelectAll() {
            this.selectAll = !this.selectAll;
            this.$nextTick(() => {
                this.datas(v => {
                    v.select = this.selectAll
                });
            });
            console.log(this.datas)
        }
    },
    mounted() {
        // 每列最小宽度为80
        this.cloWidth = this.$el.offsetWidth / this.columns.length < 80 ? 80 : (this.$el.offsetWidth / this.columns.length).toFixed();
        this.$refs['ruyi-table-body'].addEventListener("scroll", () => {
            let scrollLeft = this.$refs['ruyi-table-body'].scrollLeft;
            this.$refs['ruyi-table-header'].setAttribute('style', `right: ${scrollLeft}px; position: relative;`)
        });
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-table{
    width: 100%;
    border-bottom: none;
    border-collapse: collapse; 
    border-spacing:0;
    overflow-x: auto;
    table-layout: fixed;
    border-collapse:separate;
}
.ruyi-table-header{
    width: 100%; 
    border: 1px solid #e8eaec;
    border-bottom: none;
    overflow: hidden;
    box-sizing: border-box;
}
.ruyi-table-header tr th{
    height: 38px;
    box-sizing: border-box;
    background: #f8f8f9;
    white-space: nowrap;
    border-bottom: 1px solid #e8eaec;
    border-right: 1px solid #e8eaec;
    padding:  8px 0;
    white-space: nowrap;
    text-overflow:ellipsis;
}
.ruyi-table-header tr th:last-child{
    border-right:none;
}
.ruyi-table-body{
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    border: 1px solid #dcdee2;
    border-top: none;
}
.ruyi-table-body table:last-child{
    border-top: none;
}
.ruyi-table-body tr td{
    height: 38px;
    box-sizing: border-box;
    border-bottom: 1px solid #e8eaec;
    border-right: 1px solid #e8eaec;
    white-space: nowrap;
    background: #fff;
    box-sizing: border-box;
}
.ruyi-table-body tr td:last-child{
    border-right:none;
}
.ruyi-table-body tr:last-child td{
    border-bottom: none;
}

.ruyi-table-cell{
    display: inline-block;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    padding-left: 18px;
    padding-right: 18px;
    width: inherit; 
}

.ruyi-table-row:hover{
    td{
        background: #ebf7ff !important;
    }
}
.ruyi-table-row-stripe{
    td{
        background: #f8f8f9 !important;
    }
}
</style>