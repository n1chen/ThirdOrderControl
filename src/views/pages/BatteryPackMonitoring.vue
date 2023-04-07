<template>
    <div>
        <h1 class="mb-3"><strong>電池組監控</strong></h1>
<div class="row">
    <div class="col"></div>
    <div class="col" style="">
        <router-link :to="{name:'BatteryMBMU'}"><i class="fa-solid fa-battery-full fa-2xl"></i></router-link>
    </div>
    <div class="col" style=" " v-for="item in PCSDemoData.slice(0,4)" :key="item.equipment_id">
        {{ item.equipment_id }}
        <router-link :to="{name: 'BatteryMBMU', query: { id: item.equipment_id }}"><i class="fa-solid fa-battery-full fa-2xl"></i></router-link>
    </div>
 
</div>
        <div class="row">
            <div class="d-flex justify-content-between align-items-center mt-3">
                
                <el-table :data="tableData" size="small" stripe border class="rounded-3"
                    header-cell-class-name="tableHeaderStyle">
                    <el-table-column label="Items" prop="Items" align="center">
                    </el-table-column>
                    <el-table-column label="MBMU" prop="MBMU" align="center">
                    </el-table-column>
                    <el-table-column label="SBMU01" prop="SBMU01" align="center">
                    </el-table-column>
                    <el-table-column label="SBMU02" prop="SBMU02" align="center">
                    </el-table-column>
                    <el-table-column label="SBMU03" prop="SBMU03" align="center">
                    </el-table-column>
                    <el-table-column label="SBMU04" prop="SBMU04" align="center">
                    </el-table-column>
                </el-table>




            </div>


        </div>




    </div>
</template>
<script>

import PCSDemoData from '@/JSON/PCSDemoData.json';
export default {
    components: {

    },
    data() {
        return {
            PCSDemoData,
            isDisabled: true,
            tableData: [{
                Items: '通信狀態',
                MBMU: '正常',
                SBMU01: '正常',
                SBMU02: '正常',
                SBMU03: '正常',
                SBMU04: '正常',
            }, {
                Items: '測量電壓(V)',
                MBMU: '---',
                SBMU01: '0.1',
                SBMU02: '0.3',
                SBMU03: '0.0',
                SBMU04: '0.7',

            }, {
                Items: '累加電壓(V)',
                MBMU: '---',
                SBMU01: '1122.0',
                SBMU02: '1122.0',
                SBMU03: '1122.0',
                SBMU04: '1122.0',

            }, {
                Items: '電流(A)',
                MBMU: 'false',
                SBMU01: '0.0',
                SBMU02: '0.0',
                SBMU03: '0.0',
                SBMU04: '0.0',

            }, {
                Items: 'SOC(%)',
                MBMU: '49.8',
                SBMU01: '49.8',
                SBMU02: '49.9',
                SBMU03: '50.3',
                SBMU04: '49.5',

            }, {
                Items: '允許ICmax(A)',
                MBMU: '0.0',
                SBMU01: '-280.0',
                SBMU02: '-280.0',
                SBMU03: '-280.0',
                SBMU04: '-280.0',

            }, {
                Items: '允許IDmax(A)',
                MBMU: '0.0',
                SBMU01: '280.0',
                SBMU02: '280.0',
                SBMU03: '280.0',
                SBMU04: '280.0',

            }, {
                Items: '單體Vmax(V)',
                MBMU: '3.305',
                SBMU01: '3.304',
                SBMU02: '3.305',
                SBMU03: '3.304',
                SBMU04: '3.304',

            }, {
                Items: '單體Vmin(V)',
                MBMU: '3.301',
                SBMU01: '3.302',
                SBMU02: '3.301',
                SBMU03: '3.301',
                SBMU04: '3.301',

            }, {
                Items: '單體Vmean(V)',
                MBMU: '3.302',
                SBMU01: '3.302',
                SBMU02: '3.302',
                SBMU03: '3.302',
                SBMU04: '3.302',

            }, {
                Items: '單體Tmax(C)',
                MBMU: '49.8',
                SBMU01: '49.8',
                SBMU02: '49.9',
                SBMU03: '50.3',
                SBMU04: '49.5',

            }, {
                Items: '單體Tmin(C)',
                MBMU: '49.8',
                SBMU01: '49.8',
                SBMU02: '49.9',
                SBMU03: '50.3',
                SBMU04: '49.5',

            }, {
                Items: '單體Tmean(C)',
                MBMU: '49.8',
                SBMU01: '49.8',
                SBMU02: '49.9',
                SBMU03: '50.3',
                SBMU04: '49.5',

            }]
        }
    },

}
</script>