$(document).ready(function(){
    /* 本季新番与周期表切换 */
    $('.switcher').click(function(){
        if ($('.anime-menu .bbb').css('left') =='-9px') {
            $('.anime-menu .bbb').css('left','80px')
            $('.anime-menu .bbb').css('width','70px')
            $('.switcher p:nth-child(2)').css('color', '#2e2f31');
            $('.switcher p:nth-child(1)').css('color', 'var(--text-secondary-color)');
        }else{
            $('.anime-menu .bbb').css('left','-9px')
            $('.anime-menu .bbb').css('width','90px')
            $('.switcher p:nth-child(2)').css('color', 'var(--text-secondary-color)');
            $('.switcher p:nth-child(1)').css('color', '#2e2f31');
        }
    })
})