$(document).ready(function () {
    // 找到创建按钮并添加点击事件处理程序
    $("#createNewUser").click(function () {
        // 获取用户输入的数据
        var email = $("#email_post").val();
        var first_name = $("#first_name_post").val();
        var password = $("#password_post").val();
        var createNewUser = $(this).data('url');
        // const crypto = require('crypto');
        // var secretKey = "django-insecure-vl%c9@p&#aj%ldhm8e_o2b@r8*q9v#9nwhk%5@@b2fgknvgu!4"; // 替换成你的秘钥
        // var res = password + secretKey;
        // var hashedPassword = CryptoJS.MD5(res).toString();
        // 创建一个数据对象，以便将数据发送到服务器
        var requestData = {
            'email': email,
            'first_name': first_name,
            'password':password
        };

        console.log(email)
        // 使用AJAX将数据发送到服务器
        $.ajax({
            url: createNewUser,  // 替换成服务器端接收数据的URL
            method: 'POST',  // 可以根据您的需求选择请求方法
            data: requestData,
            success: function (response) {
                // 处理成功响应
                // 关闭模态框
                $('#addNewUser').modal('hide');
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
    $(".deleteUser").click(function () {
        var deleteUserButton = $(this);
        var email = deleteUserButton.data('email');
        var deleteUserUrl = deleteUserButton.data('url');
        var counter = deleteUserButton.data('counter');
        // 创建一个数据对象，以便将数据发送到服务器
        var requestData = {
            'email': email,
        };

        // 使用AJAX将数据发送到服务器
        $.ajax({
            url: deleteUserUrl,
            method: 'POST',
            data: requestData,
            success: function (response) {
                if (response.success){
                    $('#deleteUser' + counter).modal('hide');
                    location.reload();
                }
            },
            error: function (error) {
                console.error('删除失败：', error);
                // 执行适当的错误处理操作
            }
        });
    });
});



$(document).ready(function () {
    $("#upgradeUser").click(function () {
        var email = $(this).data('name');
        var first_name = $(this).data('first_name');
        var upgradeUserUrl = $(this).data('url');
        // 创建一个数据对象，以便将数据发送到服务器
        var requestData = {
            'email': email,
            'first_name':first_name
        };

        console.log(email)
        // 使用AJAX将数据发送到服务器
        $.ajax({
            url: upgradeUserUrl,  // 替换成服务器端接收数据的URL
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
                console.error('删除失败：', error);
                // 执行适当的错误处理操作
            }
        });
    });
});