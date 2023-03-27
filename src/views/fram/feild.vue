<template>
    <div class="d-flex" :class="$store.state.isCollapse ? 'sb-sidenav-toggled d-flex' : 'd-flex'" id="wrapper"
      style="height: calc(100vh - 60px);">
        <!-- Sidebar-->
        <div class="border-end bg-white" id="sidebar-wrapper" >
            <div class="sidebar-heading border-bottom bg-light"><img src="@/assets/FEMCBanner.png" alt=""
                    style="height: auto;width: 70px;"></div>
            <div class="list-group list-group-flush" >
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">關閉系統</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" style="text-decoration:none;">
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">設備檢測</a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#!" style="text-decoration:none;"><router-link
                                    :to="{ name: 'BatteryPackMonitoring' }" >電池組監控</router-link></a>
                        </div>
                    </div>
                </a>

                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" style="text-decoration:none;">設備檢測</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" style="text-decoration:none;"><router-link
                        :to="{ name: 'RealtimeWarning' }"><span data-feather="file">實時警告</span>
                    </router-link></a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" style="text-decoration:none;">控制命令</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" style="text-decoration:none;">系統訊息</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" style="text-decoration:none;"><router-link
                        :to="{ name: 'HistoricalData' }"><span data-feather="layers"></span>
                        歷史數據</router-link></a>

            </div>
        </div>
        <!-- Page content wrapper-->
        <div id="page-content-wrapper">
            <!-- Top navigation-->
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" style="height: 58px;">
                <div class="container-fluid">
                    <button class="btn navbar-toggler" id="sidebarToggle"><span class="navbar-toggler-icon"></span></button>
                    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"></button> -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#!">Link</a></li>

                        </ul>
                    </div>
                </div>
            </nav>

            <!-- Page content-->
            <div class="container-fluid">

                <div class="">
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
<style>
@import 'https://cdn.jsdelivr.net/npm/@braks/vue-flow@0.4.40/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@braks/vue-flow@0.4.40/dist/theme-default.css';

html,
body,
#app {
    /* margin: 0; */
    /* height: 100%; */
}

#app {
    /* text-transform: uppercase; */
    /* font-family: 'JetBrains Mono', monospace; */
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    /* color: #2c3e50; */
}

.vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;


}


.basicflow .vue-flow__node.dark {
    background: #1C1C1C;
    color: #fffffb
}

.basicflow .controls {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 4;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px
}

.basicflow .controls button {
    padding: 5px;
    border-radius: 5px;
    font-weight: 500;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
    box-shadow: 0 5px 10px #0000004d;
    cursor: pointer
}

.basicflow .controls button:hover {
    opacity: .8;
    transform: scale(105%);
    transition: .25s all ease
}

.siteTableHeader th {
    background-color: black !important;
    color: white;

}

.vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;
}

.save__controls {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 4;
    font-size: 12px
}

.save__controls button {
    margin-left: 5px;
    padding: 5px;
    border-radius: 5px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
    box-shadow: 0 5px 10px #0000004d;
    cursor: pointer
}

.save__controls button:hover {
    opacity: .8;
    transform: scale(105%);
    transition: .25s all ease-in-out
}

.card-wrapper {
    padding: 5rem;
}

.cursor-pointer {
    cursor: pointer;
}

.el-menu-item a {
    text-decoration: none;
}

.siteMinHeight {
    min-height: calc(100vh - 60px);
    margin-top: 60px !important;
    /* padding-top: 10px; */
    /* padding: 0px; */
}

#wrapper {
    overflow-x: hidden;
}

#sidebar-wrapper {
    min-height: calc(100vh - 60px);
    margin-left: -15rem;
    transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
    width: 15rem;
}

#page-content-wrapper {
    min-width: 100vw;
}

#wrapper.sb-sidenav-toggled #sidebar-wrapper {
    margin-left: 0;
}

@media (min-width: 768px) {
    #sidebar-wrapper {
        margin-left: 0;
    }

    #page-content-wrapper {
        min-width: 0;
        width: 100%;
    }

    #wrapper.sb-sidenav-toggled #sidebar-wrapper {
        margin-left: -15rem;
    }
}

.side-menu {


    width: 250px !important;
}

.fa {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
}

.el-menu {
    border-right: unset !important;
}

.el-badge__content.is-fixed {
    top: 5px !important;
    right: calc(-3px + var(--el-badge-size)/ 2) !important;
}


/*DivTable*/
.DivTable {
    display: table;
    text-align: center;
    width: 60%;
    margin: 10% auto 0;
    border-collapse: separate;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

.table_row {
    display: table-row;
}

.theader {
    display: table-row;
}

.table_header {
    display: table-cell;
    border-bottom: #ccc 1px solid;
    border-top: #ccc 1px solid;
    background: #bdbdbd;
    color: #FFF;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 700;
}

.table_header:first-child {
    border-left: #ccc 1px solid;
}

.table_header:last-child {
    border-right: #ccc 1px solid;
}

.table_small {
    display: table-cell;
}

.table_cell .el-button {
    height: unset;
}

.table_row>.table_small>.table_cell:nth-child(odd) {
    display: none;
    background: #bdbdbd;
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
}

.table_row>.table_small>.table_cell {
    padding-top: 3px;
    padding-bottom: 3px;
    color: #5b5b5b;
    border-bottom: #ccc 1px solid;
}

.table_row>.table_small:first-child>.table_cell {
    border-left: #ccc 1px solid;
}

.table_row>.table_small:last-child>.table_cell {
    border-right: #ccc 1px solid;
}



.table_row:nth-child(2n+3) {
    background: #e9e9e9;
}

@media screen and (max-width: 900px) {
    .DivTable {
        width: 90%
    }
}

/*rwd table*/
@media (max-width: 576px) {
    .RWDTable {
        display: block;
    }

    .RWDTable thead {
        display: none;
    }

    .RWDTable tbody {
        display: table;
        width: 100%;
    }

    .RWDTable tr {
        display: table-row-group;
    }

    .RWDTable td {
        display: table-row;
    }

    .RWDTable td:before,
    .RWDTable td>span {
        display: table-cell;
        padding: 7px 13px;
        /* optional */
        border: 1px solid #e8e8e8;
        /* optional */
    }

    .RWDTable.table-striped>tbody>tr:nth-of-type(odd)>td:before,
    .RWDTable.table-striped>tbody>tr:nth-of-type(odd)>td>span {
        border-color: white;
        /* optional */
    }

    .RWDTable td:before {
        content: attr(data-label);
        font-weight: bolder;
        /* optional */
    }

    .RWDTable td:not(.align-start)>span {
        vertical-align: middle;
        /* optional */
    }
}

/*input file*/
input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}

.el-table--fit {
    padding: 0 !important;
}

ul li {
    list-style: none;
    cursor: pointer;
}

ul li:hover {
    background-color: #FFF;
    color: #071E3D;
}

ul li::before {
    background-color: #FFF;
    color: #071E3D;
}


.bg-lightGreen {
    background-color: #67c23a;
}

.myBorder {
    border: rgb(7, 30, 61) solid 2px;
}

.myError {
    border: red solid 1px;
    border-radius: 5px;
}

.myIcon {
    height: 25px;
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 25px;
}


.el-carousel__arrow {
    background-color: rgba(25, 25, 25, 0.7);
}

.el-carousel__mask {
    opacity: 0.7 !important;
}

.badge {
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 10px 15px;
    border-radius: 0 0 0 20px;
    /* font-size: 14px; */
}


.noErrorMargin .el-form-item {
    margin: 0;
}

.el-calendar__body {
    padding-bottom: 10px !important;
}



/* scrolling table begin */




table.scrollBody thead,
table.scrollBody tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    /* even columns width , fix width of table too*/
    border-color: gainsboro;
    border-width: 0.1px;
}

table.scrollBody tbody {
    display: block;
    overflow: auto;
}

/* width */
table.scrollBody ::-webkit-scrollbar {
    width: 5px;
}

/* Track */
table.scrollBody ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px lightblue;
    /* border-radius: 10px; */
}

/* Handle */
table.scrollBody ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
}

/* Handle on hover */
table.scrollBody ::-webkit-scrollbar-thumb:hover {
    background: grey;
}

/* scrolling table end */


.bannerClass {
    background-color: white;
    height: 40px;
    padding-top: 6px;
    border-radius: 10px;
    padding-bottom: 6px;
}

.tableHeaderStyle {
    background: #071E3D !important;
    color: white !important;

}

.tableHeaderStyle .cell {
    text-align: center;
}

.localMenu a,
.loadMenuDropDown {
    text-decoration: none;
    color: #fff;
}

.loadMenuDropDown {
    text-decoration: none;
    color: #fff !important;

}

.loadMenuDropDownLi {
    padding: 5px 10px;
    font-size: 16px;
    text-decoration: none;
    font-weight: bolder;

}

.loadMenuDropDown .el-tooltip__trigger,
.loadMenuDropDown .el-tooltip__trigger li {
    height: 100% !important;
    display: flex;
    align-items: center;
}

.localMenu li,
.loadMenuDropDown li {
    list-style: none;
    font-size: 20px;
    font-weight: bold;
}

/* Modbus下拉選單 */
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}


.menu {
    display: flex;
}

.menu li {
    float: left;
}
</style>