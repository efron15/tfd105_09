// 預定搜尋功能
$(document).ready(function () {    
    $("#search").click(function () {
        $("#respond").css("display","block");
        $("#demand").css("display","none");

        var data = [];
        for(i=1;i<=7;i++){
        data.push($(`#Sno${i}`).val());
        $(`#Pno${i}`).text(data[i-1]);
        }

        // 取放時間
        let date = $("#date").val();
        $("#date1").text(date);
    })
});

// 出發目的地不重複
$('#Sno1').change(function() {
    let val = $("#Sno1").val();
    let from = ["台灣","泰國","日本","澳門","菲律賓","越南"];
    let key = from.indexOf(val);
    
    from.splice(key,1);
    console.log(from);
    $("#Sno2").empty();

    for(i=0;i<from.length;i++){
        $("#Sno2").append(`<option value="${from[i]}">${from[i]}</option>`);
    }

});

// 點擊確認預定
$("#sure").click(function () {
    alert("預定成功");
})