$(function () {
    $('#btnEditPsw').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'password', $('#inputEditPsw').val())
        alert('修改成功！')
    })
    $('#btnEditHeadIcon').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'headIcon', $('#inputEditHeadIcon').val())
        alert('修改成功！')
    })
    $('#LoginOut').click(function () {
        removeItem('loggingAccountID')
        alert('已退出账号！')
        window.location.href = 'https://ononokiyotsuki.github.io/html/Doit/抄袭动画疯计划/index.html';

    });
})