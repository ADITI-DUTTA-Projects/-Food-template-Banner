// active class
$(document).ready(function () {
    $("nav ul li a").click(function () {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
});

// scroll down button

$(document).ready(function () {
    const scrollDownButton = $(".scroll_down_arrow");
    scrollDownButton.hide();

    $(document).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(scrollDownButton).fadeIn(1000);
        } else {
            $(scrollDownButton).fadeOut();
        };
    });

    $(scrollDownButton).click(function () {
        $("html , body").animate({
            scrollTop: $("#blog").offset().top
        }, 1500);
    });
});