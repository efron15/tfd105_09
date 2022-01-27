$( document ).ready(function() {
    $('.buttonout').click(function(){
        //取得buttonout 對應的id
        var id = this.id; // buttonout_1 .....
        //取得buttonout_1的最後數字 
        var last_num = id.substr(10); //10代表buttonout_ 總共10位數，取出之後的全部內容 1 2 3.....
        //把取到的最後數字，帶進sub_title_1..對應到的展開內容，如果點擊第三個 取到數字3，所以控制 sub_title_3展開
        $(`#sub_title_${last_num}`).slideToggle(800); //slideToggle是query的語法，當展開點擊會縮起來，當縮起來點即會展開，參考資料 https://dotblogs.com.tw/BerryNote/2017/01/09/124209
    })
});