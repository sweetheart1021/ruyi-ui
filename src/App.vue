<!--
 * @Descripttion:
 * @Author: lvjing
 * @Date: 2019-12-26 13:53:19
 * @LastEditors  : lvjing
 * @LastEditTime : 2019-12-29 12:34:33
 -->
<template>
    <div>
        <!-- <div style="margin-bottom: 20px">
            <ruyi-button>default</ruyi-button>
            <ruyi-button type='primary' @click="handleBtn" :loading="loading">Primary</ruyi-button>
            <ruyi-button type='info' disabled @click="handleBtn">info</ruyi-button>
            <ruyi-button type='danger' @click="handleBtn">danger</ruyi-button>
            <ruyi-button type='warning'>warning</ruyi-button>
            <ruyi-button type='success' @click="drawer=true">success</ruyi-button>
            <ruyi-button type='dashed' @click="modal=true">dashed</ruyi-button>
            <ruyi-button type='text' @click="modal=true">text</ruyi-button>
            <ruyi-button type='dashed'>
                <i class="iconfont icon-wushuju" slot="icon"></i>
                slot icon
            </ruyi-button>
        </div> -->
        <!-- <div style="margin-bottom: 20px">
            <ruyi-input v-model="inputValue" style="width: 200px"
                @keyup.enter.native='handleInputKeyUpEnter'
                @change="handleInputChange"
                @blur="handleInputBlur"
                @focus="handleInputFouce"
                clearable></ruyi-input>
            <ruyi-input v-model="inputValue" style="width: 200px" search @search='handleInputSearch'></ruyi-input>
            <ruyi-input v-model="inputValue" style="width: 200px" show-word-limit maxLength='15'></ruyi-input>
            <ruyi-input v-model="inputValue" style="width: 200px" disabled></ruyi-input>
            <ruyi-input v-model="inputValue" style="width: 200px" readOnly></ruyi-input>
            <ruyi-input v-model="inputValue" style="width: 200px" disabled :background="false"></ruyi-input>
            <ruyi-input v-model="inputValue" style="width: 200px;margin-top: 15px" type='password' password></ruyi-input>
            <ruyi-input v-model="inputValue" style="margin-top: 15px; width: 200px">
                <template slot="prepend">Http://</template>
            </ruyi-input>
            <ruyi-input v-model="inputValue" style="margin-top: 15px; width: 200px">
                <template slot="append">.com</template>
            </ruyi-input>
        </div> -->
        <div style="margin-top: 20px">
            <!-- :value.sync="checkBool" -->
            <ruyi-checkbox  v-model="checkBool" style="margin-right: 30px"
                @change="handleCheckboxChange">单个</ruyi-checkbox>
            <br>
            <span>多个checkbox请用checkbox-group</span>
            <ruyi-checkbox-group v-model="checkboxGroup" @change="handleCheckboxChange">
                <ruyi-checkbox label='橛子' style="margin-right: 30px"></ruyi-checkbox>
                <ruyi-checkbox label='苹果' style="margin-right: 30px">这里是苹果</ruyi-checkbox>
                <ruyi-checkbox label='xiangjiao' style="margin-right: 30px">这里是香蕉</ruyi-checkbox>
                <ruyi-checkbox label='草莓'>这里是草莓</ruyi-checkbox>
            </ruyi-checkbox-group>
        </div>
        <div style="margin-bottom: 20px">
            <ruyi-radio v-model="radioBool" style="margin-right: 30px" @change="handleRadioChange">单个</ruyi-radio>
            <br>
            <span>多个radio请用radio-group</span>
            <ruyi-radio-group v-model="radioValue" @change="handleRadioChange">
                <ruyi-radio label='1' style="margin-right: 30px">橛子</ruyi-radio>
                <ruyi-radio label='2' style="margin-right: 30px">苹果</ruyi-radio>
                <ruyi-radio label='3'>橘子</ruyi-radio>
            </ruyi-radio-group>
        </div>
        <!-- <div style="margin-top: 20px">
            <ruyi-switch v-model="switchValue2" @before-change='handleSwitchBefore'></ruyi-switch>
            <ruyi-switch v-model="switchValue" active-value='100' inactive-value='99' @change="handleSwitchChange">
                <span slot='active'>开</span>
                <span slot='inactive'>关</span>
            </ruyi-switch>
        </div> -->
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
        <ruyi-drawer :visible.sync="drawer"
            title="drawer的title"
            loading>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
        </ruyi-drawer>
        <div style="margin-top: 20px">
            <ruyi-select style="width: 200px" v-model="selectValue"
                @change="handleSelectChange" clearable>
                <ruyi-option :value='1'>苹果</ruyi-option>
                <ruyi-option :value='2' label='香蕉' diabled show-diabled></ruyi-option>
                <ruyi-option :value='3' label='橘子'></ruyi-option>
                <ruyi-option :value='4' label='西瓜'></ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 220px" v-model="selectValue">
                <div slot="no-data">好像没有数据</div>
                <ruyi-option v-for="item in 0" :key="item"  :value='item'>{{ item }} 这里是lable</ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="selectValue">
                <ruyi-option v-for="item in 0" :key="item"  :value='item'>{{ item }} 这里是lable</ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="selectValue" disabled>
                <ruyi-option v-for="item in 5" :key="item"  :value='item'>{{ item }} 这里是lable</ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="selectValue" filterable>
                <ruyi-option v-for="item in 5" :key="item"  :value='item'>{{ item }} 这里是lable</ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="selectValue" clearable>
                <ruyi-option v-for="item in 5" :key="item"  :value='item'>{{ item }} 这里是lable</ruyi-option>
            </ruyi-select>
        </div>
        <div style="margin-top: 20px">
            <ruyi-tooltip content='这里是content内容'>
                <ruyi-button>content</ruyi-button>
            </ruyi-tooltip>
            <ruyi-tooltip :delay-in='1000' :delay-out='1000'>
                <span slot="content">这里是slot内容</span>
                <ruyi-button type='primary'>slot</ruyi-button>
            </ruyi-tooltip>
            <ruyi-tooltip content='这里是content内容' trigger='click'>
                这里是tooltip
            </ruyi-tooltip>
            <ruyi-tooltip content='这里是content内容' placement='top-start'>
                <ruyi-button>方位</ruyi-button>
            </ruyi-tooltip>
            <ruyi-tooltip content='这里是content内容' placement='top-start' disabled>
                <ruyi-button>禁用</ruyi-button>
            </ruyi-tooltip>
        </div>
        <div style="margin-top: 20px">
            <ruyi-poptip content='这里是content内容' title="这里是title">
                <ruyi-button>这里是poptip</ruyi-button>
            </ruyi-poptip>
            <ruyi-poptip content='这里是content内容' trigger='click'>
                <div slot="title">这里是title</div>
                这里是poptip
            </ruyi-poptip>
            <ruyi-poptip  trigger='click'>
                <div slot="title">这里是title</div>
                <ruyi-button>没有content</ruyi-button>
            </ruyi-poptip>
            <ruyi-poptip  placement='top-start'>
                <div slot="content">这里是content</div>
                <ruyi-button>没有title</ruyi-button>
            </ruyi-poptip>
        </div>
        <div style="margin-top: 20px">
            <!-- width='600px' -->
            <ruyi-table :columns='columns' :data='data' :max-height='200' stripe
                @row-click='handleRowClick'
                @cell-click='handleCellClisk'>
                <template slot="sex" slot-scope="{ row }">
                    <span>{{ row.sex === 1 ? '男' : '女' }}</span>
                </template>
                <template slot="action" slot-scope="{ row }">
                    <ruyi-button type='text' @click.native.stop="handleDetail(row)">查看详情</ruyi-button>
                </template>
            </ruyi-table>
        </div>
        <div style="margin-top: 20px">
            <ruyi-button type='success' @click="handleShowMessage('success')">显示成功</ruyi-button>
            <ruyi-button type='warning' @click="handleShowMessage('warning')">显示警告</ruyi-button>
            <ruyi-button type='danger' @click="handleShowMessage('error')">显示失败</ruyi-button>
            <ruyi-button type='primary' @click="handleShowMessage">显示默认</ruyi-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            inputValue: '2222',
            radioBool: false,
            radioValue: '1',
            checkBool: true,
            checkboxGroup: ['苹果', 'xiangjiao'],
            switchValue: '100',
            switchValue2: false,
            modal: false,
            drawer: false,
            selectValue: 2,
            columns: [
                {type: 'selection', width: 60, align: 'center'},
                {title: '姓名', key: 'name'},
                {title: '年龄', key: 'age', align: 'right'},
                {title: '性别', key: 'sex'},
                {title: '身高', key: 'height'},
                {title: '体重', key: 'weight'},
                {title: '体重', key: 'weight'},
                {title: '体重', key: 'weight'},
                {title: '体重', key: 'weight'},
                {title: '体重', key: 'weight'},
                {title: '操作', key: 'action', align: 'center'}
            ],
            data: [
                {age: 20, height: 165, weight: 65, sex: 1, name: '小王', id: 1},
                {name: '小张', age: 21, sex: 2, height: 175, weight: 75, id: 2},
                {name: '有点长', age: 22, sex: 1, height: 179, weight: 85, id: 3},
                {name: '小谢', age: 23, sex: 2, height: 90, weight: 95, id: 4},
                {age: 20, height: 165, weight: 65, sex: 1, name: '小王', id: 5},
                {name: '小张', age: 21, sex: 2, height: 175, weight: 75, id: 6},
                {name: '小陈', age: 22, sex: 1, height: 179, weight: 85, id: 7},
                {name: '小谢', age: 23, sex: 2, height: 90, weight: 95, id: 8},
                {age: 20, height: 165, weight: 65, sex: 1, name: '小王', id: 9},
                {name: '小张', age: 21, sex: 2, height: 175, weight: 75, id: 10},
                {name: '小陈', age: 22, sex: 1, height: 179, weight: 85, id: 11},
                {name: '小谢', age: 23, sex: 2, height: 90, weight: 95, id: 12},
            ]
        }
    },
    methods: {
        handleBtn() {
            this.loading = !this.loading;
        },
        handleInputKeyUpEnter() {
            console.log(this.inputValue)
        },
        handleInputChange(val) {
            console.log(val)
        },
        handleInputBlur(event) {
            console.log(event)
        },
        handleInputFouce(event) {
            console.log(event)
        },
        handleInputSearch() {
            console.log("输入框图标点击查询")
        },
        // checkbox change事件
        handleCheckboxChange(val) {
            console.log(val);
        },
        // radio change事件
        handleRadioChange(val) {
            console.log(val);
        },
        handleSwitchChange(val) {
            console.log(val);
        },
        handleSwitchBefore() {
            console.log(111);
        },
        handleModalOk() {
            console.log('modal确定按钮事件')
            setTimeout(() => {
                this.modal = false;
            }, 3000)
        },
        handleSelectChange(val) {
            console.log('select change之后的值', val)
        },
        handleShowMessage(type) {
            if (type) {
                this.$ruyimessage[type](`这是一条${type}消息`);
            } else {
                this.$ruyimessage("默认信息")
            }
        },
        handleDetail(row) {
            console.log(row);
        },
        handleRowClick(row) {
            console.log("行点击事件，当前点击的行是：", row)
        },
        handleCellClisk(row, column) {
            console.log(`单元格点击事件，当前点击当 行和列 分别是：`, row, column);
        }
    }
}
</script>

<style lang="less">
body{
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #515a6e;
}
</style>