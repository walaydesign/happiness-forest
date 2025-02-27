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

var swiperForest = new Swiper(".forest_swiper", {
    slidesPerView: 1,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            let index = $(".forest_swiper").find(".swiper-slide-active").index();
            $(".forest .slider_btn_item").eq(index).addClass("active").siblings(".slider_btn_item").removeClass("active");
        },
    }
})

$(".forest .slider_btn_item").click(function(){
    $(this).addClass("active").siblings(".slider_btn_item").removeClass("active");
    let li_index = $(this).index();
    swiperForest.slideTo(li_index, 1000, true);
})

var swiperLife = new Swiper(".life_swiper", {
    slidesPerView: 1,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            let index = $(".life_swiper").find(".swiper-slide-active").index();
            $(".life .slider_btn_item").eq(index).addClass("active").siblings(".slider_btn_item").removeClass("active");
        },
    }
})

$(".life .slider_btn_item").click(function(){
    $(this).addClass("active").siblings(".slider_btn_item").removeClass("active");
    let li_index = $(this).index();
    swiperLife.slideTo(li_index, 1000, true);
})

var swiperEducation = new Swiper(".education_swiper", {
    slidesPerView: 1,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            let index = $(".education_swiper").find(".swiper-slide-active").index();
            $(".education .slider_btn_item").eq(index).addClass("active").siblings(".slider_btn_item").removeClass("active");
        },
    }
})

$(".education .slider_btn_item").click(function(){
    $(this).addClass("active").siblings(".slider_btn_item").removeClass("active");
    let li_index = $(this).index();
    swiperEducation.slideTo(li_index, 1000, true);
})

var swiperPlan = new Swiper(".plan_swiper", {
    slidesPerView: 1,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: "#plan-next",
        prevEl: "#plan-prev",
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            let index = $(".plan_swiper").find(".swiper-slide-active").index();
            $(".plan_btn_item").eq(index).addClass("active").siblings(".plan_btn_item").removeClass("active");
        },
    }
})

$(".plan_btn_item").click(function(){
    $(this).addClass("active").siblings(".plan_btn_item").removeClass("active");
    let li_index = $(this).index();
    swiperPlan.slideTo(li_index, 1000, true);
})

var swiperMap = new Swiper(".map_swiper", {
    slidesPerView: 1,
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: "#map-next",
        prevEl: "#map-prev",
    },
    pagination: {
        el: "#map-navigation",
        clickable: true,
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            let index = $(".map_swiper").find(".swiper-slide-active").index();
            let targetBtn = ".map_btn_room_item-" + index;
            $(".map_btn_room_item").removeClass("active");
            $(targetBtn).addClass("active");
        },
    }
})

$(".map_btn_room_item").click(function(){
    $(".map_btn_room_item").removeClass("active");
    $(this).addClass("active");
    let li_index = $(this).data("index");
    swiperMap.slideTo(li_index, 1000, true);
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