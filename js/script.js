    $(document).ready(function() {


    // slider //

    var width = $(".sliderContainer").width();

    $(".sliderContainer__slides>li").width(width);
    $(".sliderContainer__slides").width(width * $(".sliderContainer__slides>li").length);

    $(".sliderContainer__slides").css("left", -width);
    $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');

    function nextSlide() {
        $(".sliderContainer__slides").stop(true, true).animate({
            "margin-left": -width
        }, 800, function() {
            $(".sliderContainer__slides>li:first-child").appendTo('.sliderContainer__slides');
            $(".sliderContainer__slides").css("margin-left", 0);

        });
    }
    

    function prevSlide() {
        $(".sliderContainer__slides").stop(true, true).animate({
            "margin-left": width
        }, 800, function() {
            $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');
            $(".sliderContainer__slides").css("margin-left", 0);
        });
    }

    $(".sliderContainer__buttons_next").click(nextSlide);
    $(".sliderContainer__buttons_prev").click(prevSlide);

});

// End of slider //
// appear  onclick blocks //


$(document).ready(function() {

    var icon = $('.section1__icons__icon');
    var triangle = $('.section1__icons__icon_triangle');

    icon.click(function() {
        triangle.css({ 'display': 'block' });
    });

    icon.click(function() {
        icon.removeClass('top50');
        $(this).addClass('top50').append(triangle);
    });


    // End of appear onclick blocks //
    // fixed Navigation //


    var slider = $(".sliderContainer");
    var jsfixedNav = $('.jsfixedNav');
    var elem = $('body');

    $(window).scroll(function() {

        slideroffset = slider.offset().top;
        var elemOffset = elem.scrollTop();

        if (elemOffset > slideroffset) {
            jsfixedNav.css("display", "block");

        } else {
            jsfixedNav.css("display", "none")
        };
    });


    // End of fixed Navigation //
    // click display block //


    $('.section1__icons__icon').click(function() {

        var inner = $('.section2__container__inner'),
            count = inner.length;

        inner.show();

        $('.section2').css({ 'display': 'block', 'height': 'inherit' });

        if ($(this).hasClass('section1__icons__icon icon2')) {
            for (var i = count / 2; i <= count - 1; i++) {
                $(inner[i]).hide();
            }

        } else if ($(this).hasClass('section1__icons__icon icon3')) {
            for (var i = 0; i <= count / 2 - 1; i++) {
                $(inner[i]).hide();
            }
        }
    });


    // end of fixed Navigation
    // slidingLine


    var home = $('.second__containerforline li'),
        myLine = $('.second__containerforline_slidingLine'),
        homeWidth = home.width(),
        homeMargin = home.css("marginRight");

    function addLine(elem, ishovered) {
        var newHomeIndex = $(elem).data('index');
        var sum = 0;

        for (var i = 1; i < newHomeIndex; i++) {
            var width = Math.round($(home[i - 1]).width());
            sum += (width + parseInt(homeMargin));
        }

        if (ishovered) {
            myLine.stop(true).animate({
                left: sum,
                width: $(elem).width()
            }, 500)
        } else {
            myLine.css({
                left: sum,
                width: $(elem).width()
            })
        }
    }

    home.each(function() {
        if ($(this).hasClass('second__containerforline_active')) {
            addLine(this, false)
        }
    });

    home.mouseover(function() {
        addLine(this, true)
    });


});
console.log($(window).width() )

   