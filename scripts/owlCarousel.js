// 大圖輪播
$("#one").owlCarousel({
    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: false, // 顯示點點
    autoplay: true, // 自動輪播
    autoplaySpeed: 1000,
    autoplayTimeout: 3000, // 切換時間
    autoplayHoverPause: true, // 滑鼠經過時暫停
    responsive: {
        0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
        items: 1 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1000: {
        items: 1 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

var dots = $('.owl-dots').css('position', 'absolute').css('bottom', '5px');
dots.css('left', 'calc(50% - ' + dots.width()/2+'px)');

// 下圖輪播
$("#two").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: false, // 顯示點點
    autoplay: true, // 自動輪播
    autoplaySpeed: 1000,
    autoplayTimeout: 4000, // 切換時間
    autoplayHoverPause: true, // 滑鼠經過時暫停
    responsive: {
        0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        500: {
            items: 2 // 螢幕大小為 500~701 顯示 2 個項目
        },  
        701: {
        items: 3 // 螢幕大小為 701~1000 顯示 3 個項目
        },  
        1000: {
        items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

// 文字輪播
// var h = $(".tipsList").height();
// $(".tipsList ul li").each(function(){
//     $(this).css({top:$(this).index() * h + 'px'});
// });

// setInterval(ctxtslide,3000);
// function ctxtslide() {
//     var disapear = $(".tipsList ul li").first();
//     var clone = $(".tipsList ul li").first().clone();
//     clone.css({top:($(".tipsList ul li").length*h)+"px"});
//     $(".tipsList ul").append(clone);
//     $(".tipsList ul li").each(function(){
//         var top = parseInt($(this).css('top'));
//         top -= h;
//         $(this).animate({"top":top+'px'},1000,function () {
//             disapear.remove();
//         });
//     });
// }