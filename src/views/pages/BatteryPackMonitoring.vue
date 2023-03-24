<template>
     
    <div class="p-5">
        <h1 class="mb-5">電池組監控</h1>
        <el-button type="primary">123</el-button>
        <div class="row"> 
            <div class="d-flex justify-content-between align-items-center mt-3">
                <!-- <el-table size="small" stripe border class="rounded-3" header-cell-class-name="tableHeaderStyle"> -->
                <el-table size="small" stripe border class="rounded-3"
                    header-cell-class-name="tableHeaderStyle">
                    <el-table-column label="代碼" prop="code" align="center"></el-table-column>
                    <el-table-column label="名稱" prop="name" align="center"></el-table-column>
                    <el-table-column label="每步驟持續時間" prop="step_second" align="center"></el-table-column>
                    <el-table-column label="n步驟" prop="data" align="center">
                        
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="120px">
                        <template v-slot:header>
                            <div class="text-center">
                                <el-button type="info" size="small" plain >
                                    <font-awesome-icon icon="add" />
                                </el-button>
                            </div>
                        </template>

                        <template>
                            <el-button size="small" >
                                <font-awesome-icon icon="edit" />
                            </el-button>
                            <el-button size="small" type="danger" >
                                <font-awesome-icon icon="trash-alt" />
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- <div class="d-flex justify-content-end">
                    <el-pagination layout="prev, pager, next" v-model:currentPage="PageController.pageInd"
                        :page-size="PageController.countPerPage" :total="PageController.DataSource.length"
                        @current-change="(ind) => { PageChanged(ind, PageController) }" />
                </div> -->
            </div>
        </div>


        

    </div>
</template>
