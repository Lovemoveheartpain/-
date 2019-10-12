$('.register').click(function(){
    var name = $('#name1').val();
    var age = $('#age1').val();
    var params = {
        name:name,
        age:age,
    }
    console.log(params)
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:3005/register",
        data: params,
        dataType: "json",
        success: function (response) {
            console.log(response);
            alert('注册陈功!')
        }
    });
})



$('.login').click(function(){
    var name = $('#name2').val();
    var age = $('#age2').val();
    var params = {
        name:name,
        age:age,
    }
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3005/login",
        data: params,
        dataType: "json",
        success: function (response) {
            if(response == '404'){
                alert('您还未在我公司注册')
            }else{
                console.log(response);
                alert('登录成功!')
            }
        }
    });
})