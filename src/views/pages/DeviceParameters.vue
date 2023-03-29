<template>
  <div>
    <h1 class="mb-3"><strong>設備參數</strong></h1>
  </div>

  <div style="margin-top: 10px;">
    <el-button type="info" plain>讀取MBMU參數</el-button> <el-button type="info" plain>導出Excel</el-button>
    <el-table :data="MBMUData" style="width: 100%;margin-top: 10px;" height="auto">
      <el-table-column fixed prop="Item" label="項目" width="400">
      </el-table-column>
      <el-table-column prop="MBMU" label="MBMU" width="auto">
      </el-table-column>
    </el-table>
  </div>

  <div style="margin-top: 30px; margin-bottom: 30px;">
    <el-button type="info" plain>讀取SBMU參數</el-button> <el-button type="info" plain>導出Excel</el-button>
    <el-table :data="SBMUData" style="width: 100%;margin-top: 10px;" height="250">
      <el-table-column fixed prop="Item" label="項目" width="150">
      </el-table-column>
      <el-table-column prop="SBMU01" label="SBMU01" width="200">
      </el-table-column>
      <el-table-column prop="SBMU02" label="SBMU02" width="200">
      </el-table-column>
      <el-table-column prop="SBMU03" label="SBMU03" width="200">
      </el-table-column>
      <el-table-column prop="SBMU04" label="SBMU04" width="200">
      </el-table-column>
      <el-table-column prop="SBMU05" label="SBMU05" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      iconClass: 'fa-solid fa-circle text-success',
      MBMUData: [
        {
          Item: 'MBMU的軟件版本號',
          MBMU: 'S0MBMUF0CDV211A0'
        }, {
          Item: 'MBMU的硬件版本號',
          MBMU: 'S0MBMUF0CDV211A0'
        }, {
          Item: 'MBMU的地址',
          MBMU: '1',
        }, {
          Item: '系統中總的SBMU數量',
          MBMU: '7',
        },
        {
          Item: '系統正常工作所需最少的分櫃的數量',
          MBMU: '7',
        },
        {
          Item: '絕緣過低1級警告閾值(kohm)',
          MBMU: '1000',
        },
      ],
      SBMUData: [
        {
          Item: 'MBMU的軟件版本號',
          SBMU01: 'S0MBMUF0CDV211A0',
          SBMU02: 'S0MBMUF0CDV211A0',
          SBMU03: 'S0MBMUF0CDV211A0',
          SBMU04: 'S0MBMUF0CDV211A0',
          SBMU05: 'S0MBMUF0CDV211A0',
        }, {
          Item: 'MBMU的硬件版本號',
          SBMU01: 'S0MBMUF0CDV211A0',
          SBMU02: 'S0MBMUF0CDV211A0',
          SBMU03: 'S0MBMUF0CDV211A0',
          SBMU04: 'S0MBMUF0CDV211A0',
          SBMU05: 'S0MBMUF0CDV211A0',

        }, {
          Item: 'MBMU的地址',
          SBMU01: '1',
          SBMU02: 'S0MBMUF0CDV211A0',
          SBMU03: 'S0MBMUF0CDV211A0',
          SBMU04: 'S0MBMUF0CDV211A0',
          SBMU05: 'S0MBMUF0CDV211A0',

        }, {
          Item: '系統中總的SBMU數量',
          SBMU01: '7',
          SBMU02: 'S0MBMUF0CDV211A0',
          SBMU03: 'S0MBMUF0CDV211A0',
          SBMU04: 'S0MBMUF0CDV211A0',
          SBMU05: 'S0MBMUF0CDV211A0',

        },
        {
          Item: '系統正常工作所需最少的分櫃的數量',
          SBMU01: '7',
          SBMU02: 'S0MBMUF0CDV211A0',
          SBMU03: 'S0MBMUF0CDV211A0',
          SBMU04: 'S0MBMUF0CDV211A0',
          SBMU05: 'S0MBMUF0CDV211A0',

        },
        {
          Item: '絕緣過低1級警告閾值(kohm)',
          SBMU01: '1000',
          SBMU02: 'S0MBMUF0CDV211A0',
          SBMU03: 'S0MBMUF0CDV211A0',
          SBMU04: 'S0MBMUF0CDV211A0',
          SBMU05: 'S0MBMUF0CDV211A0',

        },
      ],
    }
  },
  methods: {
  }
}
</script>
  