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

// 首頁使用的滾動
$(window).scroll(function(){
    let scrollint = $(this).scrollTop();
    if ( scrollint >= 98){
        $('#menu_index').css('display','none')
        $('#blue_menu_index').css('display','block');
    }else {
        $('#menu_index').css('display','block')
        $('#blue_menu_index').css('display','none');
    }
});