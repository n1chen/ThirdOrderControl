<template >
    <div>
        <h1 class="mb-3"><strong>用戶管理</strong></h1>

        <div class="row" style="margin-top: 50px;margin-left: 100px;">
            <el-form ref="form" label-width="80px">
                <el-form-item label="用戶姓名:">
                    <el-input style="width: 200px;"></el-input>
                </el-form-item>
                <el-form-item label="密碼:">
                    <el-input style="width: 200px;"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button>確認</el-button>
                    <el-button>清空</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>