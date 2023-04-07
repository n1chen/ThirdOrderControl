<template>
    <div>
        {{ id }}
        <h1 class="mb-3"><router-link :to="{ name: 'BatteryPackMonitoring' }"><strong>電池組監控</strong></router-link></h1>
        <div>
            <el-tabs type="border-card" v-model="TabName" @tab-click="TabClick">
                <el-tab-pane label="詳細數據" name="Data">

                    <el-table :data="tableData" height="250" border style="width: 100%">
                        <el-table-column prop="SUMBnumber" label="SUMB編號" width="180">
                        </el-table-column>
                        <el-table-column prop="CSO" label="CSO編號" width="180">
                        </el-table-column>
                        <el-table-column prop="Cel" label="Cel編號" width="180">
                        </el-table-column>
                        <el-table-column prop="voltage" label="電壓(V)" width="180">
                        </el-table-column>
                        <el-table-column prop="temperature" label="溫度(C)" width="180">
                        </el-table-column>
                        <el-table-column prop="balanced" label="均衡" width="180">
                        </el-table-column>
                    </el-table>


                    <div class="row" style="margin-top: 50px;">

                        <div class="col">
                            <p>電壓</p>
                            <el-table :data="voltageData" height="auto" border style="width: 100%">
                                <el-table-column prop="item" label="" width="100">
                                </el-table-column>
                                <el-table-column prop="voltage" label="電壓直" width="100">
                                </el-table-column>
                                <el-table-column prop="number" label="CSC號-電芯號" width="150">
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="col">
                            <p>溫度</p>
                            <el-table :data="temperatureData" height="auto" border style="width: 100%">
                                <el-table-column prop="item" label="" width="100">
                                </el-table-column>
                                <el-table-column prop="temperature" label="溫度" width="100">
                                </el-table-column>
                                <el-table-column prop="number" label="編號" width="100">
                                </el-table-column>

                            </el-table>
                        </div>

                    </div>

                </el-tab-pane>

                <el-tab-pane label="詳細電壓" name="VChart">
                    <div id="VChart" style="height:400px;width:100%"></div>
                </el-tab-pane>

                <el-tab-pane label="詳細溫度" name="TChart">
                    <div id="TChart" style="height:400px;width:100%"></div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import PCSDemoData from '@/JSON/PCSDemoData.json';
let BarChart = {
    VChart: null,
    TChart: null,
};

export default {
    data() {
        return {
            id: '123',
            PCSDemoData,
            TabName: "Data",
            echarts,
            voltageData: [{
                item: '最高電壓',
                voltage: '3.307',
                number: '05-06',
            }, {
                item: '最高低壓',
                voltage: '3.30ˇ',
                number: '02-01',
            }],
            temperatureData: [{
                item: '最高溫度',
                temperature: '05',
                number: '05-06',
            }, {
                item: '最低溫度',
                temperature: '25.0',
                number: '14',
            }],
            tableData: [{
                SUMBnumber: '1',
                CSO: '01',
                Cel: '01',
                voltage: '3.305',
                temperature: '30',
                balanced: '---'
            }, {
                SUMBnumber: '1',
                CSO: '01',
                Cel: '02',
                voltage: '3.305',
                temperature: '28',
                balanced: '---'
            }, {
                SUMBnumber: '1',
                CSO: '01',
                Cel: '03',
                voltage: '3.305',
                temperature: '30',
                balanced: '---'
            }, {
                SUMBnumber: '1',
                CSO: '01',
                Cel: '04',
                voltage: '3.305',
                temperature: '29',
                balanced: '---'
            }, {
                SUMBnumber: '1',
                CSO: '01',
                Cel: '05',
                voltage: '3.305',
                temperature: '',
                balanced: '---'
            },],
            Barchart: [
                {
                    x: ['未指派', '蕭教練', '丁教練', '曾教練'],
                    y: [3, 0, 0],
                    name: '新增名單',
                    type: 'bar'
                }, {
                    x: ['未指派', '蕭教練', '丁教練', '曾教練'],
                    y: [0, 1, 1, 0],
                    name: '待處理',
                    type: 'bar'
                }, {
                    x: ['未指派', '蕭教練', '丁教練', '曾教練'],
                    y: [0, 3, 3, 3],
                    name: '成功-結案',
                    type: 'bar'
                }, {
                    x: ['未指派', '蕭教練', '丁教練', '曾教練'],
                    y: [0, 1, 0, 2],
                    name: '失敗-結案(無法聯絡)',
                    type: 'bar'
                }, {
                    x: ['未指派', '蕭教練', '丁教練', '曾教練'],
                    y: [0, 0, 1, 0],
                    name: '失敗-結案(目前沒有計劃)',
                    type: 'bar'
                }, {
                    x: ['未指派', '蕭教練', '丁教練', '曾教練'],
                    y: [0, 2, 1, 1],
                    name: '失敗-結案(已簽約其它)',
                    type: 'bar'
                }
            ],

        }
    },
    computed: {
        ChartOption: function () {

            let currentRack = this.PCSDemoData.find(x => { return x.equipment_id == this.id });

            return {
                VChart: {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true
                            }
                        }
                    },
                    legend: {
                        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
                    },
                    xAxis: [
                        {
                            type: 'category',
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            barGap: 0,
                            barCategoryGap: '0',
                            data: Object.keys(currentRack.volt_list[0]).map(key => {
                                return [key, currentRack.volt_list[0][key]]
                            })
                        },
                    ]
                },
                TChart: {
                    xAxis: {
                        type: 'category',
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type: 'bar',
                            barGap: 0,
                            barCategoryGap: '0',
                            data: Object.keys(currentRack.temp_list[0]).map(key=>{
                                return [key, currentRack.temp_list[0][key]]
                            })
                        }
                    ]
                },
            }
        },
        BarChartOption: function () {
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            };
            return option
        },
    },
    mounted() {
        this.id = this.$route.query.id;
    },
    beforeUnmount() {
        if (BarChart.VChart) {
            BarChart.VChart.dispose();
            BarChart.VChart = null;
        }

        if (BarChart.TChart) {
            BarChart.TChart.dispose();
            BarChart.TChart = null;
        }
    },

    methods: {
        TabClick() {


            this.$nextTick(() => {
                if (!BarChart[this.TabName]) {
                    BarChart[this.TabName] = echarts.init(document.getElementById(this.TabName));
                }

                BarChart[this.TabName].setOption(this.ChartOption[this.TabName]);
                this.$nextTick(() => {
                    BarChart[this.TabName].resize();
                });

            })
        },
    }

}
// BarChart[this.TabName].setOption(this.ChartOption[this.TabName]);

</script>