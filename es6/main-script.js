(function ($) {
    $(function() {
        /* slick */
        $(".oneGirlPage--questionnair__sliderContainer").slick({
            nextArrow: '<a href="#" class="oneGirlPage--questionnair__sliderContainer--nextNav" onclick="return: false;"><span></span></a>',
            prevArrow: '<a href="#" class="oneGirlPage--questionnair__sliderContainer--prevNav" onclick="return: false;"><span></span></a>',
        });

        /* show and hide overlay, when menu open or close */
        $("body").on("click", ".overlay", function(e){
            e.preventDefault();
            $(".header--navigation").toggleClass("active");
            $(this).fadeOut(250)
        })


        /* open and close mobile menu */
        $("body").on("click", ".menu-show", function(e){
            e.preventDefault();
            $(".overlay").fadeIn();
            $(".header--navigation").toggleClass("active");
        })
	});
})(jQuery);
