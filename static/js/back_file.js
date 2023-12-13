var upload = new Vue({
    el: '#uploadApp',
    data:{
        uploadData:{
            'kb_name': document.getElementById("KBName").value
        }
    },
    methods: {
        // async checkFile(file) {
        //     const fileType = file.type;
        //     if (fileType !== "application/pdf") {
        //         this.$message.error("只能上传PDF文件");
        //         return false; // 阻止文件上传
        //     }
        //
        //     return true; // 允许文件上传
        // },
        handleSuccess(response, file, fileList) {
            if (response.success) {
                this.$message.success(response.message);
            } else {
                this.$message.error(response.message);
            }

            fileList.splice(0, fileList.length);
        },

        handleError(err, file, fileList) {
            // 处理上传失败的情况
            this.$message.error("文件上传失败");
        },
    },
});
