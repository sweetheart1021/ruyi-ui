<!--
 * @Descripttion: 表格组件
 * @Author: lvjing
 * @Date: 2019-12-30 08:52:55
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-30 15:39:00
 -->
<template>
    <div :style="divStyles" class="ruyi-table-wapper">
        <div class="ruyi-table-fixed" style="max-height: 220px">
            <div class="ruyi-table-fixed-header">
                <table cellspacing='0' cellpadding='0' class="ruyi-table" ref="ruyi-table-header">
                    <colgroup>
                        <template v-for="(item, index) in columns">
                            <col :width='item.width ? item.width : cloWidth'
                             :key="index" v-if="item.fixed"/>
                        </template>
                    </colgroup>
                    <thead>
                        <tr>
                            <template v-for="(column, index) in columns">
                                <th  :key="index"
                                    :align='column.align ? column.align : "left"'
                                    v-if="column.fixed">
                                    <div class="ruyi-table-cell" >
                                        <template v-if="column.type !== 'selection'">
                                            {{ column.title }}
                                        </template>
                                        <template v-else>
                                            <ruyi-checkbox v-model="selectAll" @change="handleSelectAll" :half='half'></ruyi-checkbox>
                                        </template>
                                    </div>
                                </th>
                            </template>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="ruyi-table-fixed-body" >
                <table cellspacing='0' cellpadding='0' class="ruyi-table" ref="ruyi-table-fixed-body">
                    <colgroup>
                        <template v-for="(item, index) in columns">
                            <col :width='item.width ? item.width : cloWidth'
                                :key="index"/>
                        </template>
                    </colgroup>
                <tbody>
                    <tr v-for="(item, index) in datas" :key="index"
                        :class="['ruyi-table-row' , stripe && index % 2 ? 'ruyi-table-row-stripe' : null]"
                        @click="handleRow(item)">
                        <template v-for="(column, key) in columns">
                            <td  :key="key" :align='column.align ? column.align : "left"'
                                @click='handleCellClick(item, column)' v-if="column.fixed">
                                <div class="ruyi-table-cell" >
                                    <template v-if="column.type !== 'selection'">
                                        <slot :name="column.key" :row='item' :index='index'>{{ item[column.key] }}</slot>
                                    </template>
                                    <template v-else>
                                        <ruyi-checkbox v-model='item._isChecked' @change="(val) => handleCheckBox(val ,item)"></ruyi-checkbox>
                                    </template>
                                </div>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div class="ruyi-table-header" :style="{'padding-right': scrollWidth - 1 + 'px'}">
            <table cellspacing='0' cellpadding='0' class="ruyi-table" ref="ruyi-table-header">
                <colgroup>
                    <col :width='item.width ? item.width : cloWidth'
                        v-for="(item, index) in columns" :key="index"/>
                </colgroup>
                <thead>
                    <tr>
                        <th v-for="(column, index) in columns" :key="index"
                            :align='column.align ? column.align : "left"'>
                            <div class="ruyi-table-cell" v-show="!column.fixed">
                                <template v-if="column.type !== 'selection'">
                                    {{ column.title }}
                                </template>
                                <template v-else>
                                    <ruyi-checkbox v-model="selectAll" @change="handleSelectAll" :half='half'></ruyi-checkbox>
                                </template>
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="gutter" :style="{width: scrollWidth + 'px', height: '39px'}" v-if="judgeSystemScroll"></div>
        <div class="ruyi-table-body" ref="ruyi-table-body" :style="styles">
            <table cellspacing='0' cellpadding='0' class="ruyi-table">
                <colgroup>
                    <col :width='item.width ? item.width : cloWidth'
                        v-for="(item, index) in columns" :key="index"/>
                </colgroup>
                <tbody>
                    <tr v-for="(item, index) in datas" :key="index"
                        :class="['ruyi-table-row' , stripe && index % 2 ? 'ruyi-table-row-stripe' : null]"
                        @click="handleRow(item)">
                        <td v-for="(column, key) in columns" :key="key"
                            :align='column.align ? column.align : "left"'
                            @click='handleCellClick(item, column)'>
                            <div class="ruyi-table-cell" v-show="!column.fixed">
                                <template v-if="column.type !== 'selection'">
                                    <slot :name="column.key" :row='item' :index='index'>{{ item[column.key] }}</slot>
                                </template>
                                <template v-else>
                                    <ruyi-checkbox v-model='item._isChecked' @change="(val) => handleCheckBox(val ,item)"></ruyi-checkbox>
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
                width: parseInt(this.width) ? parseInt(this.width) + 'px' : '100%',
            }
        }
    },
    watch: {
        data: {
            handler(val) {
                this.datas = JSON.parse(JSON.stringify(val));
                this.datas.forEach(v => {
                    this.$set(v, '_isChecked', true);
                });
            },
            immediate: true
        },
    },
    data() {
        return {
            // window or mac 滚动条问题 window 显示滚动条，mac不显示
            judgeSystemScroll: true,
            // 滚动条宽度
            scrollWidth: 0,
            // header高度
            scrollHeigh: 0,
            datas: [],
            cloWidth: 0,
            tableWidth: 0,
            selectAll: true,
            // 设置checkbox半选状态
            half: false
        }
    },
    methods: {
        /**
         * @msg: 行点击事件
         * @param {type}
         * @return:
         */
        handleRow(row) {
            this.$emit("row-click", row);
        },
        /**
         * @msg: 单元格点击事件
         * @param {type}
         * @return:
         */
        handleCellClick(row, column) {
            this.$emit("cell-click", row, column);
        },
        /**
         * @msg: 设置半选状态
         * @param {type}
         * @return:
         */
        handleHalf() {
            let noChecked = this.datas.some(v => !v._isChecked);
            let isChecked = this.datas.some(v => v._isChecked);
            if (noChecked && isChecked) {
                this.half = true;
                this.selectAll = false;
            } else {
                if (noChecked) {
                    this.selectAll = false;
                    this.half = false;
                } else {
                    this.selectAll = true;
                }
            }
        },
        /**
         * @msg: 当用户手动勾选全选 Checkbox 时触发的事件
         * @param {type}
         * @return:
         */
        handleSelectAll(val) {
            this.datas.forEach((v) => {
                this.$set(v, '_isChecked', val);
            });
            this.handleHalf();
            this.$emit("select-all", val ? this.datas : [])
        },
        /**
         * @msg: 当用户手动勾选数据行的 Checkbox 时触发的事件
         * @param {type}
         * @return: 选中的数据，当前修改的数据
         */
        handleCheckBox(val, row) {
            this.handleHalf();
            let selection = this.datas.filter(v => v._isChecked);
            this.$emit('select', selection, row)
        },
        /**
         * @msg: 判断是mac还是window
         * @param {type}
         * @return:
         */
        judgeSystem(){
            var agent = navigator.userAgent.toLowerCase();
            var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
            if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
                this.judgeSystemScroll = true;
            }
            if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
                this.judgeSystemScroll = true;
            }
            if(isMac){
                this.judgeSystemScroll = false;
            }
        },
        /**
         * @msg: 获取滚动条的宽度
         * @param {type}
         * @return:
         */
        getScrollbarWidth() {
            var odiv = document.createElement('div'),//创建一个div
                styles = {
                    width: '100px',
                    height: '100px',
                    overflowY: 'scroll'//让他有滚动条
                }, i, scrollbarWidth;
            for (i in styles) odiv.style[i] = styles[i];
            document.body.appendChild(odiv);//把div添加到body中
            scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;//相减
            odiv.remove();//移除创建的div
            this.scrollWidth = scrollbarWidth + 1;
        }
    },
    mounted() {
        // 每列最小宽度为80
        this.cloWidth = this.$el.offsetWidth / this.columns.length < 80 ? 80 : (this.$el.offsetWidth / this.columns.length).toFixed();
        this.$refs['ruyi-table-body'].addEventListener("scroll", () => {
            let scrollLeft = this.$refs['ruyi-table-body'].scrollLeft;
            let scrollTop = this.$refs['ruyi-table-body'].scrollTop;
            this.$refs['ruyi-table-header'].setAttribute('style', `right: ${scrollLeft}px; position: relative;`);
            this.$refs['ruyi-table-fixed-body'].setAttribute('style', `bottom: ${scrollTop}px; position: relative;`);
        });
        this.judgeSystem();
        this.getScrollbarWidth();
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
.ruyi-table-wapper{
    position: relative;
}
.ruyi-table-fixed{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    box-shadow: 2px 0 6px -2px rgba(0,0,0,.2);
    overflow: hidden;
    .ruyi-table-fixed-header{
        border-top: 1px solid #e8eaec;
        border-left: 1px solid #e8eaec;
        position: absolute;
        left: 0px;
        top: 0;
        z-index: 3;
        width: inherit;
    }
    .ruyi-table-fixed-body tr td{
        padding: 8px 0;
        height: 38px;
        box-sizing: border-box;
        background: white;
        border-bottom: 1px solid #e8eaec;
    }
    .ruyi-table-fixed-body{
        border-left: 1px solid #e8eaec;
        position: relative;
        top: 39px;
        width: inherit;
    }
    .ruyi-table-fixed-header tr:first-child th{
        border-right: none;
    }
    .ruyi-table-fixed-body tr:last-child td{
        border-bottom: none;
    }
}

.gutter{
    position: absolute;
    right: 0px;
    top: 0px;
    background: #f8f8f9;
    border: 1px solid #e8eaec;
    box-sizing: border-box;
}

.ruyi-table{
    width: inherit;
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
.ruyi-table-header tr th,
.ruyi-table-fixed tr th{
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
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    padding-left: 18px;
    padding-right: 18px;
    width: inherit;
    line-height: inherit;
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