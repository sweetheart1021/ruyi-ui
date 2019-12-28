<template>
    <div>
        <div class="ruyi-table-header">
            <table cellspacing='0' cellpadding='0' class="ruyi-table" ref="ruyi-table-header">
                <colgroup>
                    <col :width='item.width ? item.width : width + 30' 
                        v-for="(item, index) in columns" :key="index"/>
                </colgroup>
                <thead>
                    <tr>
                        <th v-for="(item, index) in columns" :key="index"
                            align='left'>{{ item.title }}</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="ruyi-table-body" ref="ruyi-table-body">
            <table cellspacing='0' cellpadding='0' class="ruyi-table">
                <colgroup>
                    <col :width='item.width ? item.width : width + 30' 
                        v-for="(item, index) in columns" :key="index"/>
                </colgroup>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td v-for="(row, key) in columns" :key="key"
                        align='left'>{{ item[row.key] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
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
        height: {
            type: String,
        }
    },
    data() {
        return {
            width: 0,
        }
    },
    mounted() {
        this.width = this.$el.offsetWidth / this.columns.length;
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
    padding:  8px 18px;
    white-space: nowrap;
    text-overflow:ellipsis;
}
.ruyi-table-header tr th:last-child{
    border-right:none;
}
.ruyi-table-body{
    width: 100%; 
    height:200px;  
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
    padding: 0 18px;
    white-space: nowrap;
    background: #fff;
    box-sizing: border-box;
    display: table-cell;
}
.ruyi-table-body tr td:last-child{
    border-right:none;
}
.ruyi-table-body tr:last-child td{
    border-bottom: none;
}
</style>