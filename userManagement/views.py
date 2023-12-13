
from django.contrib.auth.forms import UserCreationForm
# 在您的app目录下的views.py文件中定义登录视图函数
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import LoginForm


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/login/')  # 重定向到您的主页
    else:
        form = UserCreationForm()
    return render(request, 'UsersManage/register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                # 登录成功后的重定向或其他操作
                return redirect('front_index')
            else:
                # 登录失败的处理
                form.add_error(None, '用户名或密码不正确')
    else:
        form = LoginForm()

    return render(request, 'UsersManage/login.html', {'form': form})
