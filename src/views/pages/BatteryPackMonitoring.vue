<template>
     
    <div class="p-5">
        <h1 class="">電池組監控</h1>
        <div class="row"> 
            <div class="d-flex justify-content-between align-items-center mt-3">
                <el-table size="small" stripe border class="rounded-3"
                    header-cell-class-name="tableHeaderStyle">
                    <el-table-column label="Items" prop="code" align="center"></el-table-column>
                    <el-table-column label="MBMU" prop="name" align="center"></el-table-column>
                    <el-table-column label="SBMU01" prop="step_second" align="center"></el-table-column>
                    <el-table-column label="SBMU02" prop="data" align="center"></el-table-column>
                    <el-table-column label="SBMU03" prop="data" align="center"></el-table-column>
                    <el-table-column label="SBMU04" prop="data" align="center"></el-table-column>
                
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
