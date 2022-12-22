$(document).ready(function()  {
  /* 响应式nav */
  let f=0;
  if ($(window).width()<=810){
    $('.bottom').on('click',isBottom)
  }
  $(window).resize(function() {
    if ($(window).width()<=810) {
      $('.bottom').on('click',isBottom)
    }else{
      $('.bottom').off('click',isBottom)
      $('.main-menu').css('display', 'flex');
    }
  });
  function isBottom() {
    if(f==1){
    f=0;
    $('.main-menu').css('display', 'flex');
    }
    else{
    f=1;
     $('.main-menu').css('display', 'none');
    }
  };
  /* 深色模式实现 */
  $('.dark_swift_button').click(function() {
    if($('.radio').css('left')=='4px'){
      $('.radio').css('left','28px')
      $('nav').css('background-color', '#000')
      $('body').css('background-color', '#000')
    }else{
      $('.radio').css('left','4px')
      $('nav').css('background-color', '#fff')
      $('body').css('background-color', '#fff')
    }
  })
})