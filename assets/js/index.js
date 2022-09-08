let today = new Date();
let bd = new Date('September 17, 1999');
// let bd = new Date();

$(document).ready(function () {
    $('.p3-p iframe').css('display', 'none');
    $('button[name=btn2]').css('display', 'none');
});

const notReady = () => {
    swal({
        title: 'Bùn hiu :('
    });
}

const ready = () => {
    if (today.getDate() != bd.getDate() || today.getMonth() != bd.getMonth()) {
        swal({
            title: 'Hôm nay hong có surprise òi',
            text: 'Đợi tới sinh nhật mới có nhen bé'
        });
    } else {
        window.location.href = "p2.html";
    }
}

const getStarted = () => {
    window.location.href = "p3.html";
}

$('button[name=btn1]').click(function (e) { 
    $('.p3-p iframe').animate({
        height: 'toggle'
    });
    $(this).css('display', 'none');
    $('button[name=btn2]').show();
});

$('button[name=btn2]').click(function (e) { 
    window.location.href = "p4.html";
});