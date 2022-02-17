// 文字輪播
var h = $(".tipsList").height();
$(".tipsList ul li").each(function(){
    $(this).css({top:$(this).index() * h + 'px'});
});

setInterval(ctxtslide,3000);
function ctxtslide() {
    var disapear = $(".tipsList ul li").first();
    var clone = $(".tipsList ul li").first().clone();
    clone.css({top:($(".tipsList ul li").length*h)+"px"});
    $(".tipsList ul").append(clone);
    $(".tipsList ul li").each(function(){
        var top = parseInt($(this).css('top'));
        top -= h;
        $(this).animate({"top":top+'px'},1000,function () {
            disapear.remove();
        });
    });
}