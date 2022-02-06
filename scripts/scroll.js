$(window).scroll(function(){
    let scrollint = $(this).scrollTop();
    if ( scrollint >= 585){
        $('#menu').css('display','none')
        $('#blue_menu').css('display','block');
    }else {
        $('#menu').css('display','block')
        $('#blue_menu').css('display','none');
    }
});