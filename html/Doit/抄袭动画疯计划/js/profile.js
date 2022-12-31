$(function () {
    /* 修改密码 */
    $('#btnEditPsw').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'password', $('#inputEditPsw').val())
        alert('修改成功！')
    })
    /* 修改头像 */
    $('#btnEditHeadIcon').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'headIcon', $('#inputEditHeadIcon').val())
        alert('修改成功！')
    })
    /* 登出 */
    $('#LoginOut').click(function () {
        removeItem('loggingAccountID')
        alert('已退出账号！')
        window.location.href = 'https://ononokiyotsuki.github.io/html/Doit/抄袭动画疯计划/index.html';
    });
    $('.profile-title').html(read('userInfo')[read('loggingAccountID')].account + '的小屋')
})