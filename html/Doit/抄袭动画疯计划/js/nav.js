$(document).ready(function()  {
    let f=1;
    setInterval(function() {
        if ($(window).width() < 810) {
            $('.bottom').on('click',isBottom)
            function isBottom() {
               if(f==1){$('.main-menu').css('display', 'flex');
               f=0}
              else{
                $('.main-menu').css('display', 'none');
                f=1
              }
            };
        }else{
            $('.bottom').off('click',isBottom)
            isMainMenu =$('.main-menu').css('display')
            if(isMainMenu=='none'){$('.main-menu').css('display', 'flex')}
        }
      }, 1);
    
})