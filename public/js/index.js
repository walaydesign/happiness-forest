AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})

function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "zhulixdesign@gmail.com, zhuli705098@gmail.com, a3202443aa@yahoo.com.tw, dtweryd@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "航綻甜心預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>電話:" + document.getElementById("phone").value
                + "<br>需求房型:" + document.getElementById("type").value
                + "<br>聯繫內容:" + document.getElementById("content").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}