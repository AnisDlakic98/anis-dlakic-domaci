/*--------------------------------------------------------------------------------------------
    After DOM is loaded
---------------------------------------------------------------------------------------------*/

$(document).ready(function () {
    //________Active Nav Link_________//
    var navItem = $(".nav_item");
    navItem.on("click", function (e) {
        $("header nav").removeClass("nav-expanded");
        $(".navicon-button").removeClass("open");
        var a = $($(this));
        var link = a[0].children[0].href;
        var pathArray = link.split("/");
        pathArray = pathArray[pathArray.length - 1];
        var target = pathArray.substring(1, pathArray.length);
        var g = $("#" + target);
        $("html, body").scrollTop(g.offset().top);
        e.preventDefault();
    });

    //________After scroll is triggered________//
    $(window).on("scroll", function () {
        scrollSpy();
    });

    //________ScrollSpy Navigation________//
    function scrollSpy() {
        var sTop = $(window).scrollTop();
        $("section").each(function () {
            var id = $(this).attr("id"),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (
                $(window).scrollTop() + $(window).height() ==
                $(document).height()
            ) {
                navItem.removeClass("active");
                $(".nav_item:last-child").addClass("active");
            }
            if (sTop >= offset && sTop < offset + height) {
                navItem.removeClass("active");
                $("#header")
                    .find('[data-scroll="' + id + '"]')
                    .addClass("active");
            }
        });
    }

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

//________Preloader________//
// $(window).on("load", function () {
//     $("body").css("overflow-y", "hidden");
//     setTimeout(() => {
//         $(window).scrollTop(0);
//         $("#preloader").fadeOut(500);
//         $("body").css("overflow-y", "visible");
//     }, 1500);
// });
