$(document).ready(function()  {
    let f=1;
    $(window).resize(function() {
      if ($(window).width() <=810) {
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
    
})