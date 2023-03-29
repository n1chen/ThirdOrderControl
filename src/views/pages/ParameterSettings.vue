<template>
    <div>
        <h1 class="mb-3"><strong>參數設置</strong></h1>

        <el-tabs type="border-card">
            <el-tab-pane label="參數設置" style="margin-bottom: 10px;">
                <div class="row" style="margin-top: 10px;">
                    <div>
                        <p><strong>數據存儲</strong></p>
                        <span>路徑:</span> <el-input placeholder="" style="width: 150px;"></el-input> <el-button type="info"
                            plain style="margin-left: 5px;">瀏覽</el-button>
                    </div>
                    <div style="margin-top: 5px;">
                        <span>文件名:</span> <el-input placeholder="" style="width: 150px;"></el-input> <span
                            style="margin-left: 5px;">_StartDate_YY-MM-DD</span>
                    </div>
                    <div style="margin-top: 5px;">
                        <span>時間間隔:</span> <el-input placeholder="" style="width: 150px;"></el-input><span
                            style="margin-left: 5px;">ms</span>
                    </div>
                    <div style="margin-top: 5px;">
                        <span>存儲: </span><el-checkbox></el-checkbox>
                    </div>
                    <el-divider></el-divider>
                </div>
                <div class="row" style="margin-top: 5px;">
                    <div class="col" style="margin-right: 5px;">
                        <div>
                            <p><strong>LAN參數</strong></p>
                            <span>服服務器IP(IPV4): </span><el-input placeholder="" style="width: 150px;"></el-input><el-button
                                type="info" plain style="margin-left: 5px;">獲取本地IP</el-button>
                        </div>
                        <div style="margin-top: 5px;">
                            <span>文件名: </span><el-input placeholder="" style="width: 150px;"></el-input> <span
                                style="margin-left: 5px;">_StartDate_YY-MM-DD</span>
                        </div>
                        <div style="margin-top: 5px;">
                            <span>ModBus端口: </span> <el-input placeholder="" style="width: 150px;"></el-input><span
                                style="margin-left: 5px;">ms</span>
                        </div>
                        <div style="margin-top: 5px;">
                            <span>開啟服務: </span><el-checkbox></el-checkbox>
                        </div>

                    </div>
                    <el-divider direction="vertical" style="height: 180px;"></el-divider>
                    <div class="col" style="margin-left: 5px;">
                        <div>
                            <p><strong>MBMU設置</strong></p>
                            <span>SBMU數量: </span><el-input placeholder="" style="width: 150px;"></el-input>
                        </div>
                        <div style="margin-top: 5px;">
                            <span>CSC數量: </span><el-input placeholder="" style="width: 150px;"></el-input>
                        </div>
                        <div style="margin-top: 5px;">
                            <span>電壓數量: </span><el-input placeholder="" style="width: 150px;"></el-input>
                        </div>
                        <div style="margin-top: 5px;">
                            <span>溫度數量: </span><el-input placeholder="" style="width: 150px;"></el-input>
                        </div>
                    </div>
                </div>
                <el-divider></el-divider>
                <div class="row" style="margin-top: 5px;">
                    <div class="col">
                        <div>
                            <p><strong>CAN BUS</strong></p>
                            <span>設備型號: </span>
                            <el-select placeholder="请选择" style="width: 150px;">
                                <el-option>
                                </el-option>
                            </el-select>
                        </div>
                        <div style="margin-top: 10px;">
                            <span>索引號: </span> <el-select placeholder="请选择" style="width: 150px;">
                                <el-option>
                                </el-option>
                            </el-select>
                        </div>
                        <div style="margin-top: 10px;">
                            <span>通道號: </span> <el-select placeholder="请选择" style="width: 150px;">
                                <el-option>
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <p><strong>CAN BUS</strong></p>
                            <span>波特率: </span> <el-select placeholder="请选择" style="width: 150px;">
                                <el-option>
                                </el-option>
                            </el-select>
                        </div>
                        <div style="margin-top: 10px;">
                            <span>幀格式: </span><el-select placeholder="请选择" style="width: 150px;">
                                <el-option>
                                </el-option>
                            </el-select>
                        </div>
                        <div style="margin-top: 10px;">
                            <span>幀類型: </span> <el-select placeholder="请选择" style="width: 150px;">
                                <el-option>
                                </el-option>
                            </el-select>
                        </div>
                    </div>

                </div>

            </el-tab-pane>
            <el-tab-pane label="日誌導出" style="margin-bottom: 10px;">
                <div class="row">
                    <div class="col-10">
                        <el-input type="textarea" :rows="10" resize="none" placeholder="请输入内容">
                        </el-input>
                    </div>
                    <div class="col-2">
                        <div style="margin-top: 5px;">
                            <el-button type="info" plain style="margin-left: 5px;">查找</el-button>
                        </div>
                        <div style="margin-top: 5px;">
                            <el-button type="info" plain style="margin-left: 5px;">轉換</el-button>
                        </div>
                        <div style="margin-top: 5px;">
                            <span>全選: </span><el-checkbox></el-checkbox>
                        </div>
                    </div>

                </div>

            </el-tab-pane>
        </el-tabs>
    </div>
</template>