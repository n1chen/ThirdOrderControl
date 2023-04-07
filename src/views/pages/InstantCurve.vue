<template >
    <div>
        <h1 class="mb-3"><strong>即時曲線</strong></h1>
        <div id="BarChart" style="height:450px"></div>
        

    </div>
</template>

<script>
import * as echarts from 'echarts';
let BarChart = null;

export default {
    data() {
        return {
            echarts,
        }
    },
    computed: {
        BarChartOption: function () {
            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['CSC01', 'CSC02', 'CSC03', 'CSC04', 'CSC05', 'CSC06', 'CSC07']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            return option
        },
    },
    mounted() {
        BarChart = echarts.init(document.getElementById("BarChart"));
        // 變成物件,要塞入資料
        BarChart.setOption(this.BarChartOption);
    },
    beforeUnmount() {
        if (BarChart) {
            BarChart.dispose();
            BarChart = null;
        }
    },
}
</script>