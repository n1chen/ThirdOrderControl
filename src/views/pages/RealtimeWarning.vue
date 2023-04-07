<template>
  <div>
    <h1 class="mb-3"><strong>即時告警</strong></h1>

    <div class="row">
            <div class="d-flex justify-content-between align-items-center mt-3">
                <el-table :data="tableData" size="small" stripe border class="rounded-3"
                    header-cell-class-name="tableHeaderStyle">
                    <el-table-column label="Items" prop="Items" align="center"></el-table-column>
                    <el-table-column label="MBMU" prop="MBMU" align="center">
                        <template #default="scope">
                            <i :class="'fa-solid fa-circle ' + (scope.row.MBMU ? 'text-success' : 'text-danger')"></i>
                        </template>
                    </el-table-column>
                    <el-table-column label="SBMU01" prop="SBMU01" align="center">
                        <template #default="scope">
                            <i :class="'fa-solid fa-circle ' + (scope.row.SBMU01 ? 'text-success' : 'text-danger')"></i>
                        </template>
                    </el-table-column>
                    <el-table-column label="SBMU02" prop="SBMU02" align="center">
                        <template #default="scope">
                            <i :class="'fa-solid fa-circle ' + (scope.row.SBMU02 ? 'text-success' : 'text-danger')"></i>
                        </template>
                    </el-table-column>
                    <el-table-column label="SBMU03" prop="SBMU03" align="center">
                        <template #default="scope">
                            <i :class="'fa-solid fa-circle ' + (scope.row.SBMU03 ? 'text-success' : 'text-danger')"></i>
                        </template>
                    </el-table-column>
                    <el-table-column label="SBMU04" prop="SBMU04" align="center">
                        <template #default="scope">
                            <i :class="'fa-solid fa-circle ' + (scope.row.SBMU04 ? 'text-success' : 'text-danger')"></i>
                        </template>
                    </el-table-column>
                </el-table>


                

            </div>
            

        </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: true,
            tableData: [{
                Items: '風機故障',
                MBMU: true,
                SBMU01: true,
                SBMU02: false,
                SBMU03: true,
                SBMU04: true,
                alarm: false,
            }, {
                Items: '加熱故障',
                MBMU: true,
                SBMU01: true,
                SBMU02: true,
                SBMU03: true,
                SBMU04: true,
                alarm: false,
            }, {
                Items: '預充繼電器',
                MBMU: true,
                SBMU01: true,
                SBMU02: true,
                SBMU03: true,
                SBMU04: true,
                alarm: false,
            }, {
                Items: '主正閉合',
                MBMU: false,
                SBMU01: true,
                SBMU02: true,
                SBMU03: true,
                SBMU04: true,
                alarm: true,
            }, {
                Items: '主負閉合',
                MBMU: true,
                SBMU01: true,
                SBMU02: true,
                SBMU03: true,
                SBMU04: true,
                alarm: false,
            }],

    }
  }
}
</script>