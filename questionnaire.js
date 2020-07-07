var btnUp = document.getElementById('button-up')
var btnDown = document.getElementById('button-down')
var progressBar = document.getElementById('progressBar')
var now = 0
var fill = 0
$('#submit').on('click', function () {
    var state = 0
    // 性別
    var sex = function () {
        var temp;
        $('[name="sex"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
    //年齡
    var year = function () {
        var temp;
        $('[name="year"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
     //居住地
     var place = function () {
        var temp;
        $('[name="place"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
    //遊玩次數
    var time = function () {
        var temp;
        $('[name="time"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
    var exhibitionHall = function () {
        var temp;
        $('[name="exhibitionHall"]').each(function (i) {
                if ($(this).prop('checked') === true){
                    if(i ==0 ){
                        temp = $(this).val();
                    }
                    else{
                        if(temp == null){
                            temp = $(this).val();
                        }
                        else{
                            temp += (',' +  $(this).val());
                        }
                    }
                }
            
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
    //是否再來
    var come = function () {
        var temp;
        $('[name="come"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
    //是否聽懂導覽
    var understand = function () {
        var temp;
        $('[name="understand"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
     //是否分享
     var share = function () {
        var temp;
        $('[name="share"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
     //是否有趣
     var interesting = function () {
        var temp;
        $('[name="interesting"]').each(function () {
            if ($(this).prop('checked') === true) temp = $(this).val();
        });
        if (temp == null) {
            state = 1
        }
        return temp;
    };
    //建議
    var suggest = function () {
        var temp = $('[name="suggest"]').val();
        if (temp == "") {
            state = 1
        }
        return temp;
    };
    // post
    var data = {
        'entry.678731899': sex(),
        'entry.985182338': year(),
        'entry.299271935':place(),
        'entry.1801503054':time(),
        'entry.1739358294':exhibitionHall(),
        'entry.509556683':come(),
        'entry.377136009':understand(),
        'entry.859527971':share(),
        'entry.1560278706':interesting(),
        'entry.1950067070':suggest()
        
    };

    if (state == 0) {
        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSfEJDd1XawO8NXaYVgR6rtUqQkBJvs9eM09iE0o6nwsOp89tA/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function () {
                alert('資料已送出！');
            }
        });
    }
    else{
        console.log('test')
    }

});

$(document).ready(function () {
    btnUp.disabled = true
    btnDown.disabled = true

});

var changePage = function (i) {

    if (i < 5) {
        $('body,html').animate({
            scrollTop: $('#question-' + i).offset().top // Scroll to top of body
        }, 500);
    }
    else{
        $('body,html').animate({
            scrollTop: $('#finished').offset().top // Scroll to top of body
        }, 500);
    }
    if(now==fill){
        fill++
    }
    now++
    
    btnDisabled(now)

    progressBar.style.width = fill * 20 + "%"
}
$('#button-up').on('click', function () {
    now--
    btnDisabled(now)
    $('body,html').animate({
        scrollTop: $('#question-' + now).offset().top // Scroll to top of body
    }, 500);
});

$('#button-down').on('click', function () {
    now++
    btnDisabled(now)
    if (now < 5) {
        $('body,html').animate({
            scrollTop: $('#question-' + now).offset().top // Scroll to top of body
        }, 500);
    }
    else{
        $('body,html').animate({
            scrollTop: $('#finished').offset().top // Scroll to top of body
        }, 500);
    }
});
var btnDisabled = function (now) {
    if (now == 0 ) {
        btnUp.disabled = true
        btnDown.disabled = false
    
    } 
    else if(now<fill){
        btnDown.disabled = false
    }
    else if(now==fill){
        btnUp.disabled =false
        btnDown.disabled = true
    }
    else {
        btnUp.disabled = false
    }
}