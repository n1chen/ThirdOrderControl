<template>
    <div class="wrapper">
        <nav id="sidebar" :class="$store.state.isCollapse ? 'sidebar collapsed d-flex' : 'sidebar js-sidebar d-flex'" style="padding-right: 10px;;">
            <div class="sidebar-content js-simplebar">
                <a class="sidebar-brand" href="#">
                    <img src="@/assets/FEMCBanner.png" alt="" style="height: 35px;width: auto;">
                </a>

                <ul class="sidebar-nav">
                    <li class="sidebar-item ">
                        <a class="sidebar-link" href="#">
                            <span class="align-middle"><i
                                    class="fa-solid fa-arrow-right-from-bracket text-light"></i>關閉系統</span>
                        </a>
                    </li>
                    <div>
                        <!-- 選項展開 -->
                        <a class=" collapsed sidebar-link " href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <span class="align-middle"><i class="fa-regular fa-clock text-light"></i>實時監測</span>
                        </a>
                        <li class="collapse list-group-item list-group-item-action sidebar-item" id="collapseLayouts"
                            aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion" style="margin-left: 40px;">
                            <nav class="sb-sidenav-menu-nested nav">
                                <router-link :to="{ name: 'BatteryPackMonitoring' }"><a class="sidebar-link" href="#">
                                <span class="align-middle">電池組監控</span>
                            </a></router-link>
                            </nav>

                        </li>
                    </div>

                    <li class="sidebar-item">
                        <a class="sidebar-link" href="#">
                            <span class="align-middle"><i class="fa-solid fa-bug-slash text-light"></i>實時告警</span>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <router-link :to="{ name: 'ControlCommands' }"><a class="sidebar-link" href="#">
                                <span class="align-middle"><i
                                        class="fa-solid fa-screwdriver-wrench text-light"></i>控制命令</span>
                            </a></router-link>
                    </li>
                    <li class="sidebar-item">
                        <a class="sidebar-link" href="#">
                            <span class="align-middle"><i class="fa-solid fa-chart-line text-light"></i>實時曲線</span>
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <router-link :to="{ name: 'DeviceParameters' }"><a class="sidebar-link" href="#">
                                <span class="align-middle"><i class="fa-solid fa-list text-light"></i>設備參數</span>
                            </a></router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link :to="{ name: 'HistoricalData' }"><a class="sidebar-link" href="#">
                                <span class="align-middle"><i class="fa-solid fa-database text-light"></i>歷史數據</span>
                            </a></router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link :to="{ name: 'ParameterSettings' }"><a class="sidebar-link" href="#">
                                <span class="align-middle"><i class="fa-solid fa-gear text-light"></i>參數設置</span>
                            </a></router-link>
                    </li>
                    <li class="sidebar-item">
                        <router-link :to="{ name: 'UserManagement' }"><a class="sidebar-link" href="#">
                                <span class="align-middle"><i class="fa-solid fa-users text-light"></i>用戶管理</span>
                            </a></router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="main">
            <nav class="navbar navbar-expand navbar-light navbar-bg">
                <a class="sidebar-toggle js-sidebar-toggle" @click="CollapseClick">
                    <i class="hamburger align-self-center"></i>
                </a>
                <div class="collapse navbar-collapse" >
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#!">Sign In</a></li>
                </ul>
            </div>


            </nav>

            <main class="content">
                <div class="container-fluid p-0">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script >

export default {
    components: {

    },
    data() {

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
