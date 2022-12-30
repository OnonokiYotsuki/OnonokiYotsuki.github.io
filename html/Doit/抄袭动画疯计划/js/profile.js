$(function () {
    $('#btnEditPsw').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'password', $('#inputEditPsw').val())
    })
    $('#btnEditHeadIcon').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'headIcon', $('#inputEditHeadIcon').val())
    })
    $('#LoginOut').click(function () {
        removeItem('loggingAccountID')
        window.location.href = 'https://ononokiyotsuki.github.io/html/Doit/抄袭动画疯计划/index.html';
    });
})