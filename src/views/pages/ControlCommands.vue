<template>
  <div>
    <h1 class="mb-3"><strong>控制命令</strong></h1>
   
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top: 10px;">
      <el-form-item label="櫃號">
        <el-select v-model="formInline.region" placeholder="">
          <el-option label="" value=""></el-option>
          <el-option label="" value=""></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>

  <div style="margin-top: 10px;">
    繼電控制器
    <el-table :data="tableData" style="width: 100%" height="auto">
      <el-table-column fixed prop="Item" label="項目" width="150">
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template #default="scope">
          <el-button size="mini" @click="closeButton(scope.row.Item)"> 閉合</el-button>
          <el-button size="mini" @click="openButton(scope.row.Item)"> 斷開</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="result" label="顯示" width="auto">
        <i :class="iconClass"></i>
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
      tableData: [
        {
          Item: '高壓繼電控制器',
        }, {
          Item: '加熱繼電控制器',
        }, {
          Item: '風扇繼電控制器',
        },
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    closeButton() {
      this.iconClass = this.iconClass === 'fa-solid fa-circle text-success' ? 'fa-solid fa-circle text-danger' : 'fa-solid fa-circle text-success';
      this.$confirm('閉合全部繼電器?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '閉合成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消閉合'
          });          
        });
      
    },
    openButton() {
      this.iconClass = this.iconClass === 'fa-solid fa-circle text-success' ? 'fa-solid fa-circle text-danger' : 'fa-solid fa-circle text-success';
      this.$confirm('斷開全部繼電器?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '斷開成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消斷開'
          });          
        });
    }
  }
}
</script>
