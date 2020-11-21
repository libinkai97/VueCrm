<template>
    <div class="customUploadBox">
        <el-upload
                drag
                action
                accept=".xlsx, .xls"
                :auto-upload="false"
                :show-file-list="false"
                :on-change="changeFile"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
            </div>
        </el-upload>
    </div>
</template>

<script>
    import xlsx from "xlsx";
    import utils from "../../../utils/utils";
    import { addCustom } from "../../../api/api"
    export default {
        name: "CustomUpload",
        methods: {
            async changeFile(ev) {
                // 获取文件
                let file = ev.raw;
                if (!file) return;
                const loading = this.$loading({
                    text: "正在玩命为您处理中...",
                    background: "rgba(0,0,0,.5)"
                });

                // 基于XLSX把文件解析为JSON
                let result = await utils.readFile(file);
                let weetbook = xlsx.read(result, { type: "binary" }),
                    weetsheek = weetbook.Sheets[weetbook.SheetNames[0]];
                result = xlsx.utils.sheet_to_json(weetsheek);
                result = utils.formatWeetJSON(result);

                // 把数据逐一上传到服务器端
                let index = -1;
                let complete = flag => {
                    loading.close();
                    utils.message(this, {
                        message: `总共需要导入 ${result.length} 条数据，已经成功导入 ${index +
                        1} 条数据！${
                            flag
                                ? "所有信息都已导入~~"
                                : "导入过程中遇到问题，已经结束导入~~"
                        }`,
                        type: flag ? "success" : "warning",
                        onClose: () => {
                            this.$router.push("/");
                        }
                    });
                };
                let send = async () => {
                    if (index >= result.length - 1) {
                        // 都传递成功了
                        complete(true);
                        return;
                    }
                    let item = result[++index];
                    let res = await addCustom(item);
                    if (res.code == 0) {
                        send();
                        return;
                    }
                    // 上传中遇到问题，结束上传
                    complete(false);
                };
                send();
            }
        }
    };
</script>

<style lang="less" scoped>
    .customUploadBox {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100vh;
    }
</style>
