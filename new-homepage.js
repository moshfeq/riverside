$(document).ready(function(){
  $('.r-home-showcase-slider-arrow-left-mobile').addClass('disable');
    $(".r-home-showcase-slider-arrow-left-mobile").on('click', function(){
        $( ".r-home-showcase-slider-dots-mobile .w-slider-dot" ).each( function( index, element ){
            if (index === 0 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-left-mobile').addClass('disable');
                $('.r-home-showcase-slider-arrow-right-mobile').removeClass('disable');
            } else if (index === 1 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right-mobile').removeClass('disable');
                $('.r-home-showcase-slider-arrow-left-mobile').removeClass('disable');
            } else if (index === 2 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right-mobile').removeClass('disable');
                $('.r-home-showcase-slider-arrow-left-mobile').removeClass('disable');
            } else if (index === 3 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right-mobile').addClass('disable');
                $('.r-home-showcase-slider-arrow-left-mobile').removeClass('disable');
            }
        });
    });

    $(".r-home-showcase-slider-arrow-right-mobile").on('click', function(){
        $( ".r-home-showcase-slider-dots-mobile .w-slider-dot" ).each( function( index, element ){
            if (index === 0 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-left-mobile').addClass('disable');
                $('.r-home-showcase-slider-arrow-right-mobile').removeClass('disable');
            } else if (index === 1 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right-mobile').removeClass('disable');
                $('.r-home-showcase-slider-arrow-left-mobile').removeClass('disable');
            } else if (index === 2 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right-mobile').removeClass('disable');
                $('.r-home-showcase-slider-arrow-left-mobile').removeClass('disable');
            } else if (index === 3 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right-mobile').addClass('disable');
                $('.r-home-showcase-slider-arrow-left-mobile').removeClass('disable');
            }
        });
    });
});

$(document).ready(function(){
  $('.r-home-showcase-slider-arrow-left').addClass('disable');
    $(".r-home-showcase-slider-arrow-left").on('click', function(){
        $( ".r-home-showcase-slider-dots .w-slider-dot" ).each( function( index, element ){
            if (index === 0 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-left').addClass('disable');
                $('.r-home-showcase-slider-arrow-right').removeClass('disable');
            } else if (index === 1 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right').removeClass('disable');
                $('.r-home-showcase-slider-arrow-left').removeClass('disable');
            } else if (index === 2 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right').removeClass('disable');
                $('.r-home-showcase-slider-arrow-left').removeClass('disable');
            } else if (index === 3 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right').addClass('disable');
                $('.r-home-showcase-slider-arrow-left').removeClass('disable');
            }
        });
    });

    $(".r-home-showcase-slider-arrow-right").on('click', function(){
        $( ".r-home-showcase-slider-dots .w-slider-dot" ).each( function( index, element ){
            if (index === 0 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-left').addClass('disable');
                $('.r-home-showcase-slider-arrow-right').removeClass('disable');
            } else if (index === 1 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right').removeClass('disable');
                $('.r-home-showcase-slider-arrow-left').removeClass('disable');
            } else if (index === 2 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right').addClass('disable');
                $('.r-home-showcase-slider-arrow-left').removeClass('disable');
            } else if (index === 3 && $( this ).hasClass('w-active')){
                $('.r-home-showcase-slider-arrow-right').addClass('disable');
                $('.r-home-showcase-slider-arrow-left').removeClass('disable');
            }
        });
    });
});
