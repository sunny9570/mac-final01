$(function () {


    const tl = gsap.timeline();

    tl.from('.main_visual .itm:nth-child(1)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(2)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(3)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(4)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(5)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(6)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(7)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(8)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .cover', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .cover h2', {
        scale: 0.5,
        opacity: 0,
        x: 1000,
    }).from('.main_visual .cover button', {
        scale: 0.5,
        opacity: 0,
        y: -1000,
    })


    // gsap.from('.main_visual .itm:nth-child(1)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    // })

    // gsap.from('.main_visual .itm:nth-child(2)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 1,
    // })
    // gsap.from('.main_visual .itm:nth-child(3)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 2,
    // })
    // gsap.from('.main_visual .itm:nth-child(4)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 3,
    // })
    // gsap.from('.main_visual .itm:nth-child(5)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 4,
    // })
    // gsap.from('.main_visual .itm:nth-child(6)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 5,
    // })
    // gsap.from('.main_visual .itm:nth-child(7)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 6,
    // })
    // gsap.from('.main_visual .itm:nth-child(8)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 7,
    // })



    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    const headerSlide = new Swiper('.header_slide', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('.header .gnb').toggleClass('on');
    });

    const mainContentSlide = new Swiper('.main_content .main_content_slide', {
        slidesPerView: 2,
        // spaceBetween: 30,
        loop: true,


        breakpoints: {
            769: {
                slidesPerView: 4,
            }
        }
    });





    // const mainProductSlide = new Swiper('#main_content .tab_slide01', {
    //     loop: true,
    //     on: {
    //         slideChangeTransitionStart: function () {
    //             $('#main_content .itm01 .line').removeClass('on');
    //         },
    //         slideChangeTransitionEnd: function () {
    //             $('#main_content .tab_con .itm01 .list li')
    //                 .eq(this.realIndex)
    //                 .addClass('on')
    //                 .siblings()
    //                 .removeClass('on');

    //             $('#main_content .line').addClass('on')
    //         }
    //     }
    // });

    const mainProductSlide = new Swiper('.main_product .main_product_slide', {
        slidesPerView: 2,
        // spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: '.main_product .arrows .next',
            prevEl: '.main_product .arrows .prev',

        },

        breakpoints: {
            769: {
                slidesPerView: 4,
            }
        }
    });


    $('.main_product .tap_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_product .tap_con .ts')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $(this).parent().addClass('on').siblings().removeClass('on')
    });


    $('.main_palette .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_palette  .inner .tab_itm figure')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $(this).parent().addClass('on').siblings().removeClass('on')
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/wZrJsu0fbog',
        containment: '.main_movie .right ',
        // 아래 뒤에 값 없애고 showControls: false더하면 유투브재생버튼없어짐
        // showControls: false,
        // playOnlyIfVisible: true,
        // playOnlyIfVisible동영상이 돌아갈때만 재생

    });


    $('.button_box .play').on('click', function () {
        $('#bgndVideo').YTPPlay()
    });

    $('.button_box .pause').on('click', function () {
        $('#bgndVideo').YTPPause()
    });


    $('.main_colorchip .itm').on('click', function () {

        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on')
    })

    AOS.init();
})