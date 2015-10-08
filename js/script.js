$(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });

    //$('.jcarousel').jcarousel('scroll', '+=2');
/*
    $('.jcarousel-control-prev').click(function() {
        $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.jcarousel-control-next').click(function() {
        $('.jcarousel').jcarousel('scroll', '+=1');
    });
		*/
			$('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });


});
