<template>
    <div>
        <h1 class="mb-3"><strong>參數設置</strong></h1>

        <el-tabs type="border-card">
            <el-tab-pane label="參數設置" style="margin-bottom: 10px;">

                <div class="row" style="margin-top: 10px;">
                    <p><strong>數據存儲</strong></p>
                    <el-form ref="form" label-width="80px">
                        <div class="row">
                            <div class="col-5">
                                <el-form-item label="數據路徑:">
                                    <el-input></el-input>
                                </el-form-item>
                            </div>
                            <div class="col-auto">
                                <el-form-item>
                                    <el-button type="info">瀏覽</el-button>
                                </el-form-item>
                            </div>
                        </div>
                        <el-form-item label="文件名:">
                            <el-input placeholder="_StartDate_YY-MM-DD" style="width: 150px;"></el-input>
                        </el-form-item>
                        <el-form-item label="時間間隔:">
                            <el-input placeholder="ms" style="width: 150px;"></el-input>
                        </el-form-item>

                        <el-form-item label="儲存">
                            <el-checkbox-group>
                                <el-checkbox label="" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-form>
                </div>
                <el-divider></el-divider>
                <div class="row" style="margin-top: 5px;">
                    <div class="col">
                        <p><strong>LAN參數</strong></p>
                        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                            <el-form-item label="服務器IP(IPV4)">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="info">獲取本地IP</el-button>
                            </el-form-item>
                            <el-form-item label="文件名">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="ModBus端口">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="開啟服務">
                                <el-checkbox-group>
                                    <el-checkbox label="" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-form>
                    </div>

                    <el-divider direction="vertical" style="height: 180px;"></el-divider>
                    <div class="col" style="margin-left: 5px;">
                        <el-form :label-position="labelPosition">
                          <div>
                            <p><strong>MBMU設置</strong></p>
                            <el-form-item label="SBMU數量:">
                                <el-input></el-input>
                            </el-form-item>

                        </div>
                        <div style="margin-top: 5px;">
                            <el-form-item label="CSC數量:">
                                <el-input></el-input>
                            </el-form-item>

                        </div>
                        <div style="margin-top: 5px;">
                            <el-form-item label="電壓數量:">
                                <el-input></el-input>
                            </el-form-item>

                        </div>
                        <div style="margin-top: 5px;">
                            <el-form-item label="溫度數量:">
                                <el-input></el-input>
                            </el-form-item>

                        </div>  
                        </el-form>
                        
                    </div>
                </div>
                <el-divider></el-divider>
                <div class="row" style="margin-top: 5px;">
                    <div class="col">
                        <div>
                            <p><strong>CAN BUS</strong></p>
                            <el-form-item label="設備型號:">
                                <el-select placeholder="">
                                    <el-option label="" value=""></el-option>
                                    <el-option label="" value=""></el-option>
                                </el-select>
                            </el-form-item>

                        </div>
                        <div style="margin-top: 10px;">
                            <el-form-item label="索引號:">
                                <el-select placeholder="">
                                    <el-option label="" value=""></el-option>
                                    <el-option label="" value=""></el-option>
                                </el-select>
                            </el-form-item>
                            
                        </div>
                        <div style="margin-top: 10px;">
                            <el-form-item label="通道號:">
                                <el-select placeholder="">
                                    <el-option label="" value=""></el-option>
                                    <el-option label="" value=""></el-option>
                                </el-select>
                            </el-form-item>
                            
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

<script>
export default {
    data() {
        return {
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        };
    }
}
</script>