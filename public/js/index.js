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
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: "#plan-next",
        prevEl: "#plan-prev",
    },
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function() {
            let index = $(".plan_swiper").find(".swiper-slide-active").index();
            $(".plan_btn_item").eq(index).addClass("active").siblings(".plan_btn_item").removeClass("active");
            // if(index == 0) {
            //     $(".plan_space").addClass("hide");
            // }else {
            //     $(".plan_space").removeClass("hide");
            // }
        },
    }
})

var swiperPlanSize = new Swiper(".plan-size_swiper", {
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
})

var swiperPlanSizeM = new Swiper(".plan-size_swiper-m", {
    slidesPerView: 1,
    speed: 800,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: "#plan-next",
        prevEl: "#plan-prev",
    },
    allowTouchMove: false,
})

$(".plan_btn_item").click(function(){
    $(this).addClass("active").siblings(".plan_btn_item").removeClass("active");
    let li_index = $(this).index();
    swiperPlan.slideTo(li_index, 1000, true);
    swiperPlanSizeM.slideTo(li_index, 1000, true);
})

var swiperMap = new Swiper(".map_swiper", {
    slidesPerView: 1,
    speed: 800,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
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

            let targetSpace = ".map_btn_space-" + index;
            $(".map_btn_space").removeClass("active");
            $(targetSpace).addClass("active");
        },
    }
})

$(".map_btn_room_item").click(function(){
    $(".map_btn_room_item").removeClass("active");
    $(this).addClass("active");
    let li_index = $(this).data("index");
    swiperMap.slideTo(li_index, 1000, true);
})