<template>
    <!-- Top navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" style="height: 58px;">
        <div class="container-fluid">
            <div class="sidebar-heading border-bottom bg-light" style="height: 50px;"><img src="@/assets/FEMCBanner.png"
                    alt="" style="height: 40px;width: auto;">
            </div>
            <div style="margin-left: 60px;">
                <button class="btn navbar-toggler" @click="CollapseClick"><span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#!">Sign In</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="d-flex" id="wrapper" :class="$store.state.isCollapse ? 'sb-sidenav-toggled d-flex' : 'd-flex'">
        <!-- Sidebar-->
        <div class="border-end bg-white">

            <div id="sidebar-wrapper">
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">關閉系統</a>
                    <div>
                        <!-- 選項展開 -->
                        <a class=" collapsed list-group-item list-group-item-action list-group-item-light p-3" href="#"
                            data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false"
                            aria-controls="collapseLayouts">
                            實時監測

                        </a>
                        <div class="collapse list-group-item list-group-item-action " id="collapseLayouts"
                            aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav ">
                                <router-link :to="{ name: 'BatteryPackMonitoring' }" style="color: black;"><a
                                        class="nav-link " href="#">電池組監控</a></router-link>
                            </nav>
                        </div>
                    </div>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
                        style="text-decoration:none;">設備檢測</a>
                    <router-link :to="{ name: 'RealtimeWarning' }"><a
                            class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
                            style="text-decoration:none;"><span data-feather="file">實時警告</span>
                        </a></router-link>
                    <router-link :to="{ name: 'ControlCommands'}"><a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
                        style="text-decoration:none;">控制命令</a></router-link>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
                        style="text-decoration:none;">實時曲線</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
                        style="text-decoration:none;">系統訊息</a>
                    <router-link :to="{ name: 'HistoricalData' }"><a
                            class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
                            style="text-decoration:none;"><span data-feather="layers"></span>
                            歷史數據</a></router-link>
                </div>
            </div>
        </div>

        <!-- Page content wrapper-->
        <div id="page-content-wrapper">
            <!-- Page content-->
            <div class="container-fluid">
                <div class="" style="padding-left: 10px;">
                    <router-view></router-view>
                </div>
            </div>
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
        CollapseClick() {
            this.$store.commit("CollapseClick");
        },
    },
};
</script> 
