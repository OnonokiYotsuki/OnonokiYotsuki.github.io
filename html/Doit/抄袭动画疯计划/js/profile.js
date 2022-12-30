$(function () {
    $('#btnEditPsw').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'password', $('#inputEditPsw').val())
    })
    $('#btnEditHeadIcon').click(function () {
        editKeyValue('userInfo', 'id', read('loggingAccountID'), 'headIcon', $('#inputEditHeadIcon').val())
    })
})