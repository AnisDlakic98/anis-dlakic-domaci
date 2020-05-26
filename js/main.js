/*--------------------------------------------------------------------------------------------
    After DOM is loaded
---------------------------------------------------------------------------------------------*/

$(document).ready(function () {
    //________Active Nav Link_________//
    $(".nav_item").click(function () {
        $("header nav").removeClass("nav-expanded");
        $(".navicon-button").removeClass("open");
        $(".nav_item").removeClass("active");
        $(this).addClass("active");
        var navLink = $(this).children()[0];
        if (
            location.pathname.replace(/^\//, "") ==
                navLink.pathname.replace(/^\//, "") ||
            location.hostname == navLink.hostname
        ) {
            var target = $(navLink.hash);
            target = target.length
                ? target
                : $("[name=" + navLink.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate(
                    {
                        scrollTop: target.offset().top - 32,
                    },
                    1000
                );
                return false;
            }
        }
    });

    //________Mobile Navigation________//
    $(".navicon-button").click(function () {
        $(this).toggleClass("open");
        $("header nav").toggleClass("nav-expanded");
    });

    //________Sticky Header________//
    $(window).scroll(function () {
        let height = $(window).scrollTop();
        if (height > 200) {
            $("#header").addClass("sticky");
        } else {
            $("#header").removeClass("sticky");
        }
    });

    //________Accordion________//
    $(".accordion_header").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").parent().removeClass("active");
        } else {
            $(this).addClass("active").parent().addClass("active");
        }
    });
});
