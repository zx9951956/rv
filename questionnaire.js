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
    // post
    var data = {
        'entry.781046923': sex(),
        'entry.423309942': year()
    };

    if (state == 0) {
        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdyXi8kZGfp2Nz-pQp7_Ehnpi_6tc9RVDJ2fgtw3MFlEA1a8w/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function () {
                alert('資料已送出！');
            }
        });
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