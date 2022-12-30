$(document).ready(function () {
  /* 响应式nav */
  let f = 0;
  let flag
  if ($('.menu-icon').css('display') == 'flex') {
    $('.bottom').on('click', isBottom)
  }
  $(window).resize(function () {
    /* 大屏模式 */
    if ($('.menu-icon').css('display') == 'none') {
      $('.main-menu').css('display', 'flex');
      $('.bottom').off('click', isBottom)
      flag = true;
    } /* 小屏模式 */
    if ($('.menu-icon').css('display') == 'flex') {
      $('.bottom').on('click', isBottom)
      hideMenu(flag);
      flag = false;
    }
  });
  function isBottom() {
    if (f == 1) {
      f = 0;
      $('.main-menu').css('display', 'flex');
    }
    else {
      f = 1;
      $('.main-menu').css('display', 'none');
    }
  };
  function hideMenu(a) {
    if (a) {
      $('.main-menu').css('display', 'none');
    }
  }
  /* 深色模式实现 */
  $('.dark_swift_button').click(function (e) {
    /* 阻止点击触发父级的点击事件 */
    e.stopPropagation();
    if ($('.radio').css('left') == '4px') {
      $('.radio').css('left', '28px')
      $('nav').css('background-color', '#000')
      $('body').css('background-color', '#000')
    } else {
      $('.radio').css('left', '4px')
      $('nav').css('background-color', '#fff')
      $('body').css('background-color', '#fff')
    }
  })
  /******************* 账号初始化 *******************/
  if (read('loggingAccountID') != null) {
    if (read('userInfo')[read('loggingAccountID')].headIcon != null) {
      $('.top-right ul li:eq(4)').css('background-image', 'url(' + read('userInfo')[read('loggingAccountID')].headIcon + ')')
    }
  }
})