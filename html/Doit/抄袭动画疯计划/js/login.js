$(function () {
    /* 登录 */
    let arrFirst = [{ id: 0, account: 'defy', password: 'asd', admin: 0, headIcon: 'https://raw.githubusercontent.com/OnonokiYotsuki/OnonokiYotsuki.github.io/main/html/Doit/抄袭动画疯计划/img/nav/defyhcb_s.png' }]
    /* save('userInfo', arrFirst); */
    $('#login').click(function () {
        let arr = read('userInfo');
        let index = 0
        for (index; index < arr.length; index++) {
            if (arr[index].account == $('#inputAccount').val()) {
                if (arr[index].password == $('#inputPassword').val()) {
                    alert('登录成功！')
                    if (!Array.isArray(arr[index])) {
                        arr[index] = [arr[index]];  // 将结果转换为数组
                    }
                    save('loggingAccount', arr[index])
                    window.location.href = 'http://127.0.0.1:8011/html/Doit/抄袭动画疯计划/index.html';
                    break;
                } else {
                    alert('密码错误')
                    break;
                }
            }
        } if (index == arr.length) {
            alert('查无此号');
        }
    })
    /* 注册 */
    $('#signin').click(function () {
        let arr = [];
        let newArr = {};
        if (localStorage.userInfo != null) {
            arr = read('userInfo')
        }
        if (arr.length == 0) {
            goSave();
        } else {
            console.log('开始判断账号是否重复');
            let index = 0;
            for (index; index < arr.length; index++) {
                if (arr[index].account == $('#inputAccount').val()) {
                    alert('该账号已存在');
                    break;
                }
            }
            if (index == arr.length) {
                goSave();
            }
        }
        function goSave() {
            newArr.account = $('#inputAccount').val();
            newArr.password = $('#inputPassword').val();
            newArr.id = arr.length;
            newArr.admin = 2;
            arr.push(newArr);
            save('userInfo', arr);
            alert('注册成功！');
        }
    })
    /* 清空账号 */
    $('#clear').click(function () {
        clearItem('userInfo');
    })
    $('#removeUser').click(function () {
        console.log(JSON.parse(localStorage.userInfo));
    })
    /* 查看所有账号 */
    $('#havealook').click(function () {
        console.log(read('userInfo'));
    })
})