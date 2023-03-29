<template >
    <div>
        <h1 class="mb-3"><strong>用戶管理</strong></h1>

        <el-tabs type="border-card">
            <el-tab-pane label="用戶登錄" style="margin-bottom: 10px;">

                <div class="row" style="margin-top: 50px;margin-left: 100px;">
                    <div class="col-1" style="margin-top: 20px;">
                        <i class="fa-solid fa-user fa-2xl"></i>
                    </div>
                    <div class="col-11">
                        <div>
                            <span style="margin-right: 5px;">用戶姓名:</span><el-input placeholder=""
                                style="width: 150px;"></el-input>
                        </div>
                        <div style="margin-top: 10px;">
                            <span style="margin-right: 30px;">密碼: </span><el-input placeholder=""
                                style="width: 150px;"></el-input>
                        </div>
                    </div>
                </div>
                <div class="d-flex" style="margin-top: 40px;margin-left: 400px;">
                    <div><el-button type="info" plain style="margin-left: 5px;">確認</el-button></div>
                    <div><el-button type="info" plain style="margin-left: 5px;">清空</el-button></div>
                    <div><el-button type="info" plain style="margin-left: 5px;">取消</el-button></div>
                </div>

            </el-tab-pane>
            <el-tab-pane label="修改密碼" style="margin-bottom: 10px;">
                <div class="row" style="margin-top: 50px;margin-left: 100px;">
                    <div class="col-1" style="margin-top: 20px;">
                        <i class="fa-solid fa-user-shield fa-2xl"></i>
                    </div>
                    <div class="col-11">
                        <div>
                            <span style="margin-right: 5px;">用戶姓名:</span><el-input placeholder=""
                                style="width: 150px;"></el-input>
                        </div>
                        <div style="margin-top: 10px;">
                            <span style="margin-right: 30px;">密碼: </span><el-input placeholder=""
                                style="width: 150px;"></el-input>
                        </div>
                        <div style="margin-top: 10px;">
                            <span style="margin-right: 15px;">新密碼: </span><el-input placeholder=""
                                style="width: 150px;"></el-input>
                        </div>
                        <div style="margin-top: 10px;">
                            <span style="margin-right: 5px;">確認密碼:</span><el-input placeholder=""
                                style="width: 150px;"></el-input>
                        </div>
                    </div>
                </div>
                <div class="d-flex" style="margin-top: 40px;margin-left: 400px;">
                    <div><el-button type="info" plain style="margin-left: 5px;">確認</el-button></div>
                    <div><el-button type="info" plain style="margin-left: 5px;">清空</el-button></div>
                    <div><el-button type="info" plain style="margin-left: 5px;">取消</el-button></div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>