<!--
 * @Descripttion: ivu-progress-active
 * @Author: lvjing
 * @Date: 2019-12-26 13:53:19
 * @LastEditors  : lvjing
 * @LastEditTime : 2020-01-09 17:22:59
 -->
<template>
    <div>
        <div style="margin-top: 20px">
            <!-- <ruyi-tree :data='data' :props='defaultProps' show-checkbox node-key='id'></ruyi-tree> -->
            <ruyi-from inline>
                <ruyi-from-item prop='name' label="活动名称" width='80'>
                    <ruyi-input v-model="forms.name"></ruyi-input>
                </ruyi-from-item>
                <ruyi-from-item prop='name' label="活动区域" width='80'>
                    <ruyi-select v-model="forms.region" style="width: 100%">
                        <ruyi-option :value='1' label='成都天府大道'></ruyi-option>
                        <ruyi-option :value='2' label='背景中南海' diabled show-diabled></ruyi-option>
                        <ruyi-option :value='3' label='重庆朝天门'></ruyi-option>
                        <ruyi-option :value='4' label='东莞红灯一条街'></ruyi-option>
                    </ruyi-select>
                </ruyi-from-item>
            </ruyi-from>
        </div>
        <div style="margin-top: 20px">
            <ruyi-progress style="width: 600px" percent='30'>
                <span>上传中...</span>
            </ruyi-progress>
            <ruyi-progress style="width: 600px" status='success' percent='100' hideInfo></ruyi-progress>
            <ruyi-progress style="width: 600px" percent='80' hideInfo></ruyi-progress>
            <ruyi-progress style="width: 600px" status='error' percent='100' hideInfo></ruyi-progress>
            <ruyi-progress style="width: 600px" status='error' percent='40' height='15'></ruyi-progress>
            <ruyi-progress style="width: 600px" percent='60' :stroke-color="['#108ee9', '#87d068']"></ruyi-progress>
            <ruyi-progress style="width: 600px" percent='90' :stroke-color="['#108ee9', '#87d068']" text-inside
                height='15'></ruyi-progress>
            <ruyi-progress style="width: 100px" percent='90' :stroke-color="['#108ee9', '#87d068']" text-inside
                height='15'></ruyi-progress>
        </div>
        <div style="margin-top: 20px">
            <ruyi-tag>标签名称</ruyi-tag>
            <ruyi-tag closable @close-click='handleTagCloseClick'>显示关闭</ruyi-tag>
             <ruyi-tag dot closable>显示点</ruyi-tag>
            <ruyi-tag dot closable type='error'>显示点</ruyi-tag>
            <ruyi-tag dot closable type='success'>显示点</ruyi-tag>
            <ruyi-tag dot closable type='warning'>显示点</ruyi-tag>

            <ruyi-tag dot closable color>显示color</ruyi-tag>
            <ruyi-tag dot closable type='warning' color>显示color</ruyi-tag>
            <ruyi-tag dot closable type='success' color>显示color</ruyi-tag>
            <ruyi-tag dot closable type='error' color>显示color</ruyi-tag>
        </div>
        <div style="margin-top: 20px">
            <ruyi-badge><div class="demo-badge"></div></ruyi-badge>
            <ruyi-badge :count="100" style="margin-right: 20px"><div class="demo-badge"></div></ruyi-badge>
            <ruyi-badge :count="100" overflow-count="99" style="margin-right: 20px"><div class="demo-badge"></div></ruyi-badge>
            <ruyi-badge><div class="demo-badge"></div></ruyi-badge>
            <ruyi-badge text='text'><div class="demo-badge"></div></ruyi-badge>
            <ruyi-badge :count="5" type='primary' style="margin-right: 20px"><div class="demo-badge"></div></ruyi-badge>
            <ruyi-badge :count="5" type='success' style="margin-right: 20px"><div class="demo-badge"></div></ruyi-badge>
            <ruyi-badge :count="5" type='warning' style="margin-right: 20px"><div class="demo-badge"></div></ruyi-badge>
        </div>
        <div style="margin-top: 20px">
            <ruyi-dropdown >
                <ruyi-button type="primary">
                    下拉菜单
                </ruyi-button>
                <ruyi-dropdown-menu slot="list">
                    <ruyi-dropdown-item @click="handleDropDown()">驴打滚</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">炸酱面</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" disabled>豆汁儿</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">冰糖葫芦</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">北京烤鸭</ruyi-dropdown-item>
                </ruyi-dropdown-menu>
            </ruyi-dropdown>
            <ruyi-dropdown placement='bottom-end'>
                <ruyi-button type="danger">
                    添加显示方位
                </ruyi-button>
                <ruyi-dropdown-menu slot="list">
                    <ruyi-dropdown-item @click="handleDropDown()">驴打滚</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" disabled>炸酱面</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">豆汁儿</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">冰糖葫芦</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">北京烤鸭</ruyi-dropdown-item>
                </ruyi-dropdown-menu>
            </ruyi-dropdown>
            <ruyi-dropdown placement='bottom-end' disabled>
                <ruyi-button type="warning">
                    禁用
                </ruyi-button>
                <ruyi-dropdown-menu slot="list">
                    <ruyi-dropdown-item @click="handleDropDown()">驴打滚</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" disabled>炸酱面</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">豆汁儿</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">冰糖葫芦</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">北京烤鸭</ruyi-dropdown-item>
                </ruyi-dropdown-menu>
            </ruyi-dropdown>
            <ruyi-dropdown trigger='click'>
                <ruyi-button type="success">
                    click 方式
                </ruyi-button>
                <ruyi-dropdown-menu slot="list">
                    <ruyi-dropdown-item @click="handleDropDown()" divided>驴打滚</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" divided>炸酱面</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" selected>豆汁儿</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" disabled>冰糖葫芦</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">北京烤鸭</ruyi-dropdown-item>
                </ruyi-dropdown-menu>
            </ruyi-dropdown>
            <ruyi-dropdown>
                <ruyi-button>
                    divided和disabled
                </ruyi-button>
                <ruyi-dropdown-menu slot="list">
                    <ruyi-dropdown-item @click="handleDropDown()" divided>驴打滚</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" divided>炸酱面</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" selected>豆汁儿</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()" disabled>冰糖葫芦</ruyi-dropdown-item>
                    <ruyi-dropdown-item @click="handleDropDown()">北京烤鸭</ruyi-dropdown-item>
                </ruyi-dropdown-menu>
            </ruyi-dropdown>
        </div>
        <div style="margin-bottom: 20px">
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
        </div>
        <div style="margin-bottom: 20px">
            <ruyi-cascader v-model="cascader" :options='options' @change="handleCascaderChange"
                style="width: 200px" :props='props'></ruyi-cascader>
            <ruyi-cascader v-model="cascader" :options='options' @change="handleCascaderChange"
                style="width: 200px" :props='props' clearable></ruyi-cascader>
            <!-- <ruyi-cascader v-model="cascader" :options='options' disabled style="width: 200px"></ruyi-cascader> -->
            <!-- <ruyi-cascader v-model="cascader" :options='options' disabled :background='false' style="width: 200px"></ruyi-cascader> -->
            <!-- <ruyi-cascader v-model="cascader" :options='options' @change="handleCascaderChange" trigger='hover' style="width: 200px"></ruyi-cascader> -->
        </div>
        <div style="margin-bottom: 20px">
            <ruyi-breadcrumb>
                <ruyi-breadcrumb-item to='/home'>Home</ruyi-breadcrumb-item>
                <ruyi-breadcrumb-item to='/components'>Components</ruyi-breadcrumb-item>
                <ruyi-breadcrumb-item>Breadcrumb</ruyi-breadcrumb-item>
            </ruyi-breadcrumb>
            <ruyi-breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
                <ruyi-breadcrumb-item to='/home'>Home</ruyi-breadcrumb-item>
                <ruyi-breadcrumb-item to='/components'>Components</ruyi-breadcrumb-item>
                <ruyi-breadcrumb-item>Breadcrumb</ruyi-breadcrumb-item>
            </ruyi-breadcrumb>
        </div>
        <div style="margin-bottom: 20px">
            <ruyi-alert style="margin-bottom: 5px">这里是alert</ruyi-alert>
            <ruyi-alert style="margin-bottom: 5px" show-icon>
                An info prompt
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
            </ruyi-alert>
            <ruyi-alert type='success' style="margin-bottom: 5px" show-icon>
                A success prompt
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
            </ruyi-alert>
            <ruyi-alert type='error' style="margin-bottom: 5px" show-icon>
                An error prompt
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
            </ruyi-alert>
            <ruyi-alert type='warning' style="margin-bottom: 5px" show-icon close>
                A warning prompt
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
            </ruyi-alert>
            <ruyi-alert show-icon style="margin-bottom: 5px" close>
                自定义icon
                <i class="iconfont icon-benpao" slot="icon" style="color: #2d8cf0"></i>
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
            </ruyi-alert>
            <ruyi-alert show-icon @close='handleAlertClose' close>
                自定义关闭
                <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
                <i class="iconfont icon-benpao" slot="close" style="color: #2d8cf0"></i>
            </ruyi-alert>
        </div>
        <div style="margin-bottom: 20px">
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
        </div>
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
            <ruyi-select  v-model="selectValue"
                @change="handleSelectChange">
                <ruyi-option :value='1'>苹果2</ruyi-option>
                <ruyi-option :value='2' label='香蕉' diabled show-diabled></ruyi-option>
                <ruyi-option :value='3' label='橘子'></ruyi-option>
                <ruyi-option :value='4' label='西瓜'></ruyi-option>
                <ruyi-option :value='5' label='橘子2'></ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="selectValue"
                @change="handleSelectChange" clearable>
                <ruyi-option :value='1'>苹果2</ruyi-option>
                <ruyi-option :value='2' label='香蕉' diabled show-diabled></ruyi-option>
                <ruyi-option :value='3' label='橘子'></ruyi-option>
                <ruyi-option :value='4' label='西瓜'></ruyi-option>
                <ruyi-option :value='5' label='橘子2'></ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="selectValue"
                @change="handleSelectChange" clearable filterable>
                <ruyi-option :value='1'>苹果2</ruyi-option>
                <ruyi-option :value='2' label='香蕉' diabled show-diabled></ruyi-option>
                <ruyi-option :value='3' label='橘子'></ruyi-option>
                <ruyi-option :value='4' label='西瓜'></ruyi-option>
                <ruyi-option :value='5' label='橘子2'></ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="multipleValue"
                @change="handleSelectChange" clearable multiple>
                <ruyi-option :value='1'>苹果</ruyi-option>
                <ruyi-option :value='2' label='香蕉' diabled show-diabled></ruyi-option>
                <ruyi-option :value='3' label='橘子'></ruyi-option>
                <ruyi-option :value='4' label='西瓜'></ruyi-option>
                <ruyi-option :value='5' label='橘子2'></ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="multipleValueFilterable"
                @change="handleSelectChange" clearable multiple filterable>
                <ruyi-option :value='1'>苹果2</ruyi-option>
                <ruyi-option :value='2' label='香蕉' diabled show-diabled></ruyi-option>
                <ruyi-option :value='3' label='橘子'></ruyi-option>
                <ruyi-option :value='4' label='西瓜'></ruyi-option>
                <ruyi-option :value='5' label='橘子2'></ruyi-option>
            </ruyi-select>
            <ruyi-select style="width: 200px" v-model="selectValue2"
                @change="handleSelectChange" clearable filterable
                remote
                :remote-method="remoteMethod"
                :loading="loading">
                <ruyi-option :value='1'>苹果2</ruyi-option>
                <ruyi-option :value='2' label='香蕉' diabled show-diabled></ruyi-option>
                <ruyi-option :value='3' label='橘子'></ruyi-option>
                <ruyi-option :value='4' label='西瓜'></ruyi-option>
                <ruyi-option :value='5' label='橘子2'></ruyi-option>
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
            <!-- @cell-click='handleCellClisk' -->
            <!-- @row-click='handleRowClick' -->
            <!-- <ruyi-table :columns='columns' :data='data' :max-height='200' stripe
                @select='handleTableSelect'
                @select-all="handleTableSelectAll"
                width='820px'>
                <template slot="sex" slot-scope="{ row }">
                    <span>{{ row.sex === 1 ? '男' : '女' }}</span>
                </template>
                <template slot="action" slot-scope="{ row }">
                    <ruyi-button type='text' @click.native.stop="handleDetail(row)">查看详情</ruyi-button>
                </template>
            </ruyi-table> -->
        </div>
        <div style="margin-top: 20px">
            <ruyi-button type='primary' @click="handleShowMessage('primary')">显示primary</ruyi-button>
            <ruyi-button type='success' @click="handleShowMessage('success')">显示成功</ruyi-button>
            <ruyi-button type='warning' @click="handleShowMessage('warning')">显示警告</ruyi-button>
            <ruyi-button type='danger' @click="handleShowMessage('error')">显示失败</ruyi-button>
            <ruyi-button type='primary' @click="handleShowMessage">显示默认</ruyi-button>
        </div>

        <div style="margin-top: 20px">
            <ruyi-back-top :right='40' @click="handleBackTopClick"></ruyi-back-top>
        </div>

        <div style="margin-top: 20px">
            <ruyi-spin v-model="spin" style="width: 600px">
                <p>凤凰台上凤凰游，凤去台空江自流。</p>
                <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                <p>三山半落青天外，二水中分白鹭洲。</p>
                <p>总为浮云能蔽日，长安不见使人愁。</p>
            </ruyi-spin>
            <ruyi-button type='danger' @click="spin=!spin">切换loading</ruyi-button>
            <ruyi-spin v-model="spin" style="width: 600px" background='rgba(253,245,230, .8)'>
                <div slot="label">这里可以自定义label 也可以自定义背景色</div>
                <p>凤凰台上凤凰游，凤去台空江自流。</p>
                <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                <p>三山半落青天外，二水中分白鹭洲。</p>
                <p>总为浮云能蔽日，长安不见使人愁。</p>
            </ruyi-spin>
        </div>
        <div style="margin-top: 20px">
            <ruyi-steps style="width: 1400px" v-model="steps" >
                <ruyi-step title="已完成" content="这里是该步骤的描述信息">
                    <div slot="title">这里可以slot title内容</div>
                    <i class="iconfont icon-chenggong" slot="success" style="color: #2d8cf0"></i>
                </ruyi-step>
                <ruyi-step title='错误状态' content="这里是该步骤的描述信息" status='error'>
                    <i class="iconfont icon-alert" slot="error"></i>

                </ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息"></ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息"></ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息"></ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息"></ruyi-step>
            </ruyi-steps>
            <ruyi-button type='success' @click="steps = steps + 1" style="margin: 20px;">下一步</ruyi-button>
            <ruyi-steps style="width: 1200px" v-model="steps" direction='vertical'>
                <ruyi-step title="已完成" content="这里是该步骤的描述信息" status='error'>
                    <!-- <i class="iconfont icon-alert" slot="error"></i> -->
                </ruyi-step>
                <ruyi-step title='错误中' content="这里是该步骤的描述信息">
                    <div slot="title">这里可以slot title内容</div>
                </ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息">
                    <div slot="content">这里可以slot content内容</div>
                </ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息">
                    <i class="iconfont icon-chenggong" slot="success" style="color: #2d8cf0"></i>
                </ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息"></ruyi-step>
                <ruyi-step title="待进行" content="这里是该步骤的描述信息"></ruyi-step>
            </ruyi-steps>
        </div>
        <div style="margin-top: 20px">
            <ruyi-button type='primary' @click="handleNotice('primary')">显示primary</ruyi-button>
            <ruyi-button type='success' @click="handleNotice('success')">显示成功</ruyi-button>
            <ruyi-button type='warning' @click="handleNotice('warning')">显示警告</ruyi-button>
            <ruyi-button type='danger' @click="handleNotice('error')">显示失败</ruyi-button>
            <ruyi-button type='primary' @click="handleNotice">显示默认</ruyi-button>
            <ruyi-button type='primary' @click="handleNoticeTitle('primary')">显示primary title</ruyi-button>
            <ruyi-button type='success' @click="handleNoticeTitle('success')">显示成功title</ruyi-button>
            <ruyi-button type='warning' @click="handleNoticeTitle('warning')">显示警告title</ruyi-button>
            <ruyi-button type='danger' @click="handleNoticeTitle('error')">显示失败title</ruyi-button>
            <ruyi-button type='primary' @click="handleNoticeTitle">显示默认title</ruyi-button>
            <ruyi-button type='danger' @click="handleNoticeTime('error')">10s后关闭</ruyi-button>
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
            selectValue: 3,
            selectValue2: 1,
            multipleValue: [1, 3, 4, 5],
            multipleValueFilterable: [1],
            columns: [
                {type: 'selection', width: 60, align: 'center', fixed: 'right'},
                {title: '姓名', key: 'name'},
                {title: '年龄', key: 'age', align: 'right'},
                // {title: '性别', key: 'sex'},
                // {title: '身高', key: 'height'},
                // {title: '体重', key: 'weight'},
                // {title: '体重', key: 'weight'},
                // {title: '体重', key: 'weight'},
                // {title: '体重', key: 'weight'},
                // {title: '体重', key: 'weight'},
                // {title: '体重', key: 'weight'},
                // {title: '体重', key: 'weight'},
                // {title: '体重', key: 'weight'},
                {title: '操作', key: 'action', align: 'center', width: 120, }
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
            ],
            spin: true,
            steps: 2,
            cascader: ["jiangsu", "nanjing", "fuzimiao"],
            options: [
                {
                    values: 'beijing',
                    labels: '北京',
                    disableds: true,
                    childrens: [
                        {
                            values: 'gugong',
                            labels: '故宫'
                        },
                        {
                            values: 'tiantan',
                            labels: '天坛'
                        },
                        {
                            values: 'wangfujing',
                            labels: '王府井'
                        }
                    ]
                },
                {
                    values: 'jiangsu',
                    labels: '江苏',
                    childrens: [
                        {
                            values: 'nanjing',
                            labels: '南京',
                            childrens: [
                                {
                                    values: 'fuzimiao',
                                    labels: '夫子庙',
                                }
                            ]
                        },
                        {
                            values: 'suzhou',
                            labels: '苏州',
                            childrens: [
                                {
                                    values: 'zhuozhengyuan',
                                    labels: '拙政园',
                                },
                                {
                                    values: 'shizilin',
                                    labels: '狮子林',
                                }
                            ]
                        }
                    ],
                }
            ],
            props: {
                value: 'values',
                label: 'labels',
                children: 'childrens',
                disabled: 'disableds'
            },
            data: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                },
                                {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                        {
                            id: 5,
                            label: '二级 2-1'
                        },
                        {
                            id: 6,
                            label: '二级 2-2'
                        }
                    ]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        },
                        {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            forms: {
                name: '这里是输入框',
                region: 1
            }
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
        },
        // 当用户手动勾选数据行的 Checkbox 时触发的事件
        handleTableSelect(selection, row) {
            console.log(selection, row);
        },
        // 	当用户手动勾选全选 Checkbox 时触发的事件
        handleTableSelectAll(selection) {
            console.log(selection)
        },
        // backUp 点击事件
        handleBackTopClick() {
            console.log('backUp 点击事件')
        },
        // tag 关闭按钮事件
        handleTagCloseClick() {
            console.log('tag 关闭按钮事件')
        },
        // dropdownItem点击事件
        handleDropDown() {
            console.log('dropdownItem点击事件')
        },
        // cascader change事件
        handleCascaderChange(val) {
            console.log("cascader change事件:", val)
        },
        // alert 关闭时候事件
        handleAlertClose() {
            console.log('alert 关闭时候事件')
        },
        // select 远程搜索
        remoteMethod(val) {
            console.log(val)
        },
        // 显示notice
        handleNotice(type) {
            if (type) {
                this.$ruyinotice[type]({
                    title: `这里是${type}类型的title`,
                    message: `这里是${type}类型的很长很长的message,据说要很长很长的`
                });
            } else {
                this.$ruyinotice({
                    title: `这里是默认类型的title`,
                    message: `这里是默认类型的很长很长的message,据说要很长很长的`
                })
            }
        },
        // 显示notice 只显示title
        handleNoticeTitle(type) {
            if (type) {
                this.$ruyinotice[type]({
                    title: `这里是${type}类型的title`
                });
            } else {
               this.$ruyinotice("默认消息title")
            }
        },
        handleNoticeTime(type) {
            this.$ruyinotice[type]({
                title: `这里是${type}类型的title`,
                message: `这里是${type}类型的很长很长的message,据说要很长很长的`,
                duration: 10000
            });
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
.demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}
</style>