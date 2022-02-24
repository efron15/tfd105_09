// 回到頂端
// 出現
$(window).scroll(function(){
    let GoTop = $(this).scrollTop();
    if (  GoTop>= 90){
        $('#top').css('display','block');
    }else {
        $('#top').css('display','none');
    }
});

let gotop = document.getElementById("top");
let gotopop = document.getElementsByClassName("top-btn")[0];
window.addEventListener('scroll', showTopBtn);
function showTopBtn() {
    let topfar = window.pageYOffset;
    console.log(topfar);
if (topfar > 300) {
    gotopop.classList.add("on");
} else {
    gotopop.classList.remove("on");
}
}
gotop.addEventListener("click", function () {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrom
});