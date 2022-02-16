// 大圖輪播
$(".owl-carousel").owlCarousel({
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
$(".owl_city").owlCarousel({
    loop: true, // 循環播放
    margin: 0, // 外距 10px
    nav: true, // 顯示點點
    autoplay: true, // 自動輪播
    autoplaySpeed: 1000,
    autoplayTimeout: 2000, // 切換時間
    autoplayHoverPause: true, // 滑鼠經過時暫停
    responsive: {
        0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        },
        600: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
        },  
        1000: {
        items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
        }
    }
});

var dots = $('.owl-dots').css('position', 'absolute').css('bottom', '5px');
dots.css('left', 'calc(50% - ' + dots.width()/2+'px)');


// 不是貓頭鷹
// 文字輪播
$('#J_scroll').width($('#J_scroll').width() - $('#J_scroll li:first-child').innerWidth());
$('#J_scroll').addClass('theanimation');