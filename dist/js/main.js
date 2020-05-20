//________variables________//

//________after DOM is loaded________//

$(document).ready(function () {
    // // Active Nav Link
    $(".nav_item").click(function () {
        $(".nav_item").removeClass("active");
        $(this).addClass("active");
    });
});
