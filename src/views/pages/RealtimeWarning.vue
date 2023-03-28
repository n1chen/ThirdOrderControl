<template>
  <div>
    <h1>實時警告</h1>
    
    <el-tabs type="border-card">
      <el-tab-pane label="有級別警告" style="margin-bottom: 10px;">有級別警告
        <table>
          <thead style="border-bottom: solid black 1px;">
            <tr >
              <th style="width: 100px;">項目</th>
              <th style="width: 100px;">MBMU</th>
              <th style="width: 100px;">SBMU01</th>
              <th style="width: 100px;">SBMU02</th>
              <th style="width: 100px;">SBMU03</th>
              <th style="width: 100px;">SBMU04</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </el-tab-pane>
      <el-tab-pane label="無級別警告" style="margin-bottom: 10px;">無級別警告
        <table>
          <thead style="border-bottom: solid black 1px;">
            <tr >
              <th style="width: 100px;">項目</th>
              <th style="width: 100px;">MBMU</th>
              <th style="width: 100px;">SBMU01</th>
              <th style="width: 100px;">SBMU02</th>
              <th style="width: 100px;">SBMU03</th>
              <th style="width: 100px;">SBMU04</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
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