<template>
  <div>
    <h1 class="mb-3"><strong>歷史數據</strong></h1>
    
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="數據路徑:">
        <el-input v-model="formInline.user" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="表名">
        <el-select v-model="formInline.region" placeholder="">
          <el-option label="" value="shanghai"></el-option>
          <el-option label="" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="信號名稱">
        <el-select v-model="formInline.region" placeholder="">
          <el-option label="" value="shanghai"></el-option>
          <el-option label="" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="onSubmit">查詢</el-button>
      </el-form-item>
    </el-form>
  </div>


  <el-table :data="tableData" style="width: 100%" height="400">
    <el-table-column fixed prop="" label="DATA" width="150">
    </el-table-column>
    <el-table-column prop="" label="DATA1" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA2" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA3" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA4" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>
    <el-table-column prop="" label="DATA5" width="120">
    </el-table-column>


  </el-table>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [],
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>