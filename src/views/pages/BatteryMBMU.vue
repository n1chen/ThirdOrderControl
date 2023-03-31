<template>
    <div>
        <h1 class="mb-3"><router-link :to="{name:'BatteryPackMonitoring'}"><strong>電池組監控</strong></router-link></h1>
        <div>
        <el-tabs type="border-card">
            <el-tab-pane label="詳細數據" style="margin-bottom: 10px;">

                <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="SUMBnumber"
      label="SUMB編號"
      width="180">
    </el-table-column>
    <el-table-column
      prop="CSO"
      label="CSO編號"
      width="180">
    </el-table-column>
    <el-table-column
      prop="Cel"
      label="Cel編號"
      width="180">
    </el-table-column>
    <el-table-column
      prop="voltage"
      label="電壓(V)"
      width="180">
    </el-table-column>
    <el-table-column
      prop="temperature"
      label="溫度(C)"
      width="180">
    </el-table-column>
    <el-table-column
      prop="balanced"
      label="均衡"
      width="180">
    </el-table-column>
  </el-table>
            
            </el-tab-pane>
            <el-tab-pane label="詳細電壓" style="margin-bottom: 10px;">
                
            </el-tab-pane>

            <el-tab-pane label="詳細溫度" style="margin-bottom: 10px;">
                
            </el-tab-pane>
        </el-tabs>
    </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
            SUMBnumber: '1',
            CSO: '01',
            Cel: '01',
            voltage:'3.305',
            temperature:'30',
            balanced:'---'
        },{
            SUMBnumber: '1',
            CSO: '01',
            Cel: '02',
            voltage:'3.305',
            temperature:'28',
            balanced:'---'
        },{
            SUMBnumber: '1',
            CSO: '01',
            Cel: '03',
            voltage:'3.305',
            temperature:'30',
            balanced:'---'
        },{
            SUMBnumber: '1',
            CSO: '01',
            Cel: '04',
            voltage:'3.305',
            temperature:'29',
            balanced:'---'
        },{
            SUMBnumber: '1',
            CSO: '01',
            Cel: '05',
            voltage:'3.305',
            temperature:'',
            balanced:'---'
        }, ]
      }
    }
  }
</script>