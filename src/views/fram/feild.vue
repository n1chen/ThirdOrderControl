<template>
    <div class="" style="background:;">
        <!--nav-->
        <div class=" fixed-top ps-3 border d-flex align-items-center justify-content-between shadow"
            style="min-height:60px; background:rgb(7, 30, 61);">
            <div class="col-2">
                <a class="navbar-brand d-flex align-items-center" href="#" style="font-weight:bold;color: #fff;">
                    <img src="@/assets/FEMCBanner.png" alt="" class="me-2 bannerClass ">
                    <!-- {{ ProjectName }} -->
                </a>
            </div>
            <div class="d-flex" style="">

                <ul class="d-flex m-0 ps-0 localMenu">
                    <li class="pe-3 ps-3">關閉系統</li>
                    <li class="pe-3 ps-3">實時監控</li>
                    <li class="pe-3 ps-3">設備檢測</li>
                    <li class="pe-3 ps-3">實時警告</li>
                    <li class="pe-3 ps-3">控制命令</li>
                    <li class="pe-3 ps-3">實時曲線</li>
                    <li class="pe-3 ps-3">系統訊息</li>
                    <li class="pe-3 ps-3">歷史數據</li>



                    <el-dropdown trigger="hover" class="loadMenuDropDown d-flex align-items-center">
                        <li class="pe-3 ps-3">實時實時監控 <font-awesome-icon icon="angle-down" class="ms-2"
                                style="font-size: small;" /></li>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <router-link :to="{name:'BatteryPackMonitoring'}" class="loadMenuDropDown" >電池組監控</router-link>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                    

                </ul>
            </div>
            <div class="col-2 text-end  d-flex align-items-center justify-content-end pe-5">
                <!-- <avatar></avatar> -->
            </div>
        </div>
        <!--content-->
        <div class="row m-0">
            <!--content-->
            <div class=" siteMinHeight p-0" style="overflow-x:auto;">
                <div class="container-fluid p-0 rounded">
                    <router-view></router-view>
                </div>
            </div>
            <footer class="d-flex justify-content-center align-items-center text-white w-100 h-10"
                style=" height:10vh; background:rgb(7, 30, 61);">
                <span class="mb-2"> Copyright © 2022 FEMC Inc.</span>
            </footer>
        </div>
    </div>
</template>

<script >
// import avatar from '@/components/Avatar.vue'
// import settingdemo from '@/JSON/SettingDemo.json';

export default {
    components: {
        // 'avatar': avatar
    },
    data() {
        // return {
        //     active: false,
        //     isCollapse: true,
        //     ProjectName: process.env.VUE_APP_Project,
        //     settingdemo,
        // };
    },
    mounted() {

    },
    beforeUnmount() {

    },
    created() {
        
    },
    watch: {
    },
    methods: {
    },
};
</script> 