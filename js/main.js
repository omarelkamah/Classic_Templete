$(document).ready(function () {

    // add class active on click in the links
    var myLink = $("nav ul li a");
    myLink.on("click", function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // on click in the links go to the main div
    myLink.on("click", function (event) {
        // prevent default for the links
            event.preventDefault();
            $("html, body").animate({
                scrollTop : $("#" + $(this).data("value")).offset().top
            }, 1000);
        });

    // set the height for the header
    var myHeader = $("header");

    myHeader.height($(window).height());

    $(window).on("resize", function () {
        myHeader.height($(window).height());

        // resize the slider padding top when you resize winow
        $(".slider").each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".slider li").height()) / 2);
        });
    });

    // play the BxSlider
    $(".slider").bxSlider({
        pager: false
    });

    // set the padding top for the slider
    $(".slider").each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".slider li").height()) / 2);
    });

    // create auto slider for the testimonials
    (function autoSlide() {
        $(".testimonials .slider-container .active").each(function () {

            if (! $(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().fadeIn(1000).addClass("active");
                    autoSlide();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".slider-container .testi-slider").eq(0).fadeIn(1000).addClass("active");
                    autoSlide();
                });
            }
        });
    }());

    // add selected class on the li in the protofolio
    $(".protofolio ul li").on("click", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    // on hover in the img in the protofolio and in the our team
    function onHover(selector, speed) {
        selector.hover(function () {
            $(this).find(".overlay").fadeIn(speed)
        }, function () {
            $(this).find(".overlay").fadeOut(speed)
        });
    }
    onHover($(".protofolio .container-img .img"), 300);
    onHover($(".our-team .box"), 300);

    // play the nicescroll plugin
    $("html").niceScroll({
        cursorborder: 0,
        cursorcolor: "#1abc9c",
        cursorwidth: "10px"
    });
});