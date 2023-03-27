<template>
  <div>
    <h1>實時警告</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="有級別警告">有級別警告
        <el-table :data="tableData" stripe>
          <el-table-column prop="" label="項目">
          </el-table-column>
          <el-table-column prop="" label="MBMU">
          </el-table-column>
          <el-table-column prop="" label="SBMU01">
          </el-table-column>
          <el-table-column prop="" label="SBMU02">
          </el-table-column>
          <el-table-column prop="" label="SBMU03">
          </el-table-column>
          <el-table-column prop="" label="SBMU04">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="無級別警告">無級別警告
       
        <el-table :data="tableData" stripe >
          <el-table-column prop="date" label="日期" width="180px">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180px">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="180px" >
          </el-table-column>
        </el-table>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
    }
  }
}
</script>