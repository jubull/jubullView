<template>
  <d2-container type="card">
    <template slot="header">功能权限</template>
    <table cellspacing="0" cellpadding="0" border="0" class="el-table__header">
      <tbody>
      <tr>
        <td colspan="3"><el-table :data="tableData"
                                  height="400"
                                  :span-method="objectSpanMethod">
          <el-table-column label="用户帐号" align="center">
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <el-table-column
                type="selection"
                width="35">
              </el-table-column>
              <el-table-column label="姓名" prop="name">
              </el-table-column>
              <el-table-column label="账号">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table></td>
        <td colspan="3"><el-table :data="tableData"
                                  height="400"
                                  :span-method="objectSpanMethod">
          <el-table-column label="角色集合"  align="center">
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <el-table-column
                type="selection"
                width="35">
              </el-table-column>
              <el-table-column label="姓名" prop="name">
              </el-table-column>
              <el-table-column label="账号">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table></td>
        <td colspan="3"><el-table :data="tableData"
                                  height="400"
                                  :span-method="objectSpanMethod">
          <el-table-column label="系统帐号" align="center">
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <el-table-column
                type="selection"
                width="35">
              </el-table-column>
              <el-table-column label="姓名" prop="name">
              </el-table-column>
              <el-table-column label="账号">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table></td>
        <td colspan="3"><el-table :data="tableData"
                                  height="400"
                                  :span-method="objectSpanMethod">
          <el-table-column label="系统角色" align="center">
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <el-table-column
                type="selection"
                width="35">
              </el-table-column>
              <el-table-column label="姓名" prop="name">
              </el-table-column>
              <el-table-column label="账号">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table></td>
        <td colspan="3"><el-table :data="tableData"
                                  height="400"
                                  :span-method="objectSpanMethod">
          <el-table-column label="系统权限" align="center">
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <el-table-column
                type="selection"
                width="35">
              </el-table-column>
              <el-table-column label="姓名" prop="name">
              </el-table-column>
              <el-table-column label="账号">
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table></td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="3" style="height: 45px;background-color: #f5f7fa;border-left:1px solid #EBEEF5;border-bottom:1px solid #EBEEF5">
         <table>
           <tr>
             <td><el-pagination
               background
               layout="prev, pager, next"
               :total="30">
             </el-pagination></td>
             <td><el-button type="primary"  size="mini" icon="el-icon-folder-add"></el-button></td>
             <td><el-button type="primary"  size="mini" icon="el-icon-document-delete"></el-button></td>
             <td><el-button type="primary"  size="mini" icon="el-icon-folder-checked"></el-button></td>
           </tr>
         </table>
        </td>
        <td colspan="3" style="height: 45px;background-color: #f5f7fa;border-left:1px solid #EBEEF5;border-bottom:1px solid #EBEEF5">
          <table>
            <tr>
              <td><el-pagination
                background
                layout="prev, pager, next"
                :total="30">
              </el-pagination></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-add"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-document-delete"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-checked"></el-button></td>
            </tr>
          </table>
        </td>
        <td colspan="3" style="height: 45px;background-color: #f5f7fa;border-left:1px solid #EBEEF5;border-bottom:1px solid #EBEEF5">
          <table>
            <tr>
              <td><el-pagination
                background
                layout="prev, pager, next"
                :total="30">
              </el-pagination></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-add"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-document-delete"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-checked"></el-button></td>
            </tr>
          </table>
        </td>
        <td colspan="3" style="height: 45px;background-color: #f5f7fa;border-left:1px solid #EBEEF5;border-bottom:1px solid #EBEEF5">
          <table>
            <tr>
              <td><el-pagination
                background
                layout="prev, pager, next"
                :total="30">
              </el-pagination></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-add"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-document-delete"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-checked"></el-button></td>
            </tr>
          </table>
        </td>
        <td colspan="3" style="height: 45px;background-color: #f5f7fa;border-left:1px solid #EBEEF5;border-bottom:1px solid #EBEEF5">
          <table>
            <tr>
              <td><el-pagination
                background
                layout="prev, pager, next"
                :total="30">
              </el-pagination></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-add"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-document-delete"></el-button></td>
              <td><el-button type="primary"  size="mini" icon="el-icon-folder-checked"></el-button></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="15">
          <el-row class="d2-mb" style="height: 45px;line-height: 45px;background-color: #f5f7fa;border-left:1px solid #EBEEF5;border-bottom:1px solid #EBEEF5" >
          <el-col :span="8"><div class="grid-content bg-purple">
              <el-button type="primary"  size="mini">编辑模式</el-button>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
              <el-button type="primary"  size="mini" class="el-icon--right">保存</el-button>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
              <el-button type="primary"  size="mini" class="el-icon--right" icon="el-icon-s-grid">退出</el-button>
            </div></el-col>
          </el-row>
        </td>
      </tr>
      <tr>
        <td colspan="15" ></td>
      </tr>
      </tfoot>
    </table>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import pluginExport from '@d2-projects/vue-table-export'
import ElTableFooter from 'el-table-footer'
Vue.use(pluginExport)
Vue.use(ElTableFooter)
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {

        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map(item => Number(item[column.property]))

        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })
      console.log(sums)
      return sums
    },
    exportCsv (params = {}) {
      this.$export.csv({
        columns: this.table.columns,
        data: this.table.data
      })
        .then(() => {
          this.$message('导出CSV成功')
        })
    },
    exportExcel () {
      this.$export.excel({
        columns: this.table.columns,
        data: this.table.data,
        header: '导出 Excel',
        merges: ['A1', 'E1']
      })
        .then(() => {
          this.$message('导出表格成功')
        })
    },
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },

    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {

      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
