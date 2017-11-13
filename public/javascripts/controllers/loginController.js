$('#submit_btn').click(function(){
    var username = $("#exampleInputEmail1").val();
    var password = $("#exampleInputPassword1").val();
    $.ajax({
        url: '/users/login',
        type: 'POST',
        async: true,
        data: {
            username: username,
            password: password
        },
        success: function(data){
            console.log(data);
        }
    });
})
