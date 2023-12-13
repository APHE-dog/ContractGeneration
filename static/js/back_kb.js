
$(document).ready(function () {
    // 找到创建按钮并添加点击事件处理程序
    $("#createKnowledgeBaseBtn").click(function () {
        // 获取用户输入的数据
        var kbName = $("#inputName").val();
        var kbDescription = $("#inputDes").val();
        var kbCategory = $("#inputCate").val();

        var createKnowledgeBaseUrl = $(this).data('url');

        // 创建一个数据对象，以便将数据发送到服务器
        var requestData = {
            'kb_name': kbName,
            'description': kbDescription,
            'kb_category': kbCategory
        };

        console.log(kbName)

        // 使用AJAX将数据发送到服务器
        $.ajax({
            url: createKnowledgeBaseUrl,  // 替换成服务器端接收数据的URL
            method: 'POST',  // 可以根据您的需求选择请求方法
            data: requestData,
            success: function (response) {
                // 处理成功响应
                // 关闭模态框
                $('#addKB').modal('hide');
                location.reload();
            },
            error: function (error) {
                // 处理错误响应
                console.error('创建失败：', error);
                // 执行适当的错误处理操作
            }
        });
    });
});


$(document).ready(function () {
    $("#deleteBtn").click(function () {
        var kbName = $(this).data('name');
        console.log(kbName)
        var deleteKBUrl = $(this).data('url');

        // 创建一个数据对象，以便将数据发送到服务器
        var requestData = {
            'kb_name': kbName,
        };

        // 使用AJAX将数据发送到服务器
        $.ajax({
            url: deleteKBUrl,  // 替换成服务器端接收数据的URL
            method: 'POST',  // 可以根据您的需求选择请求方法
            data: requestData,
            success: function (response) {
                // 处理成功响应
                // 关闭模态框
                if (response.success){
                    $(this).closest('.modal').modal('hide')
                    location.reload();
                }
            },
            error: function (error) {
                // 处理错误响应
                console.error('创建失败：', error);
                // 执行适当的错误处理操作
            }
        });
    });
});