
$(document).ready(function () {
    $("#search").click(function () {
        var data = [];
        for(i=1;i<=7;i++){
        data.push($(`#Sno${i}`).val());
        $(`#Pno${i}`).text(data[i-1]);
        }

        
        // console.log(data)
        // $(`Pno${i}`).text() = $(`Sno${i}`).text(date);
    })
});
