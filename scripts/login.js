$(document).ready(function () {
    var status = 1;//1狀態是登入 2是註冊
    $('#change_login').click(function (event) {
        event.preventDefault();
        if (status == 1) {
            $('#change_login').html(`<i class="fas fa-kiwi-bird bird1"></i>Login<i class="fas fa-dove bird2"></i>`);
            $('#login_btn').css('display', 'none')
            $('#register_btn').css('display', 'block');
            status = 2;
        } else {
            $('#change_login').html(`<i class="fas fa-kiwi-bird bird1"></i>Join us<i class="fas fa-dove bird2"></i>`);
            $('#login_btn').css('display', 'block')
            $('#register_btn').css('display', 'none');
            status = 1;
        }
    })
});