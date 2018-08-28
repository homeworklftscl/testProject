$(document).ready(function () {
    // скролл до 2 секции
    $(".hero__arrow").click(function () {
        $("html, body").animate({ scrollTop: $("#proj").position().top }, 1000);
    });
});
