$(document).ready(function() {
    new WOW().init();
});

count=0;

$(".menu li a").click(function() {
    count++;
    if(count>0) {
        id=$(this).attr("id");
        if(id=="menu-about") {
            $("#about").removeClass("wow fadeInUp");
            $("#about").removeAttr("style");
        }
    }
});

/**
 * Animaciones
 */
$(window).load(function() {
    $('#preloader').delay(900).fadeOut('slow');
});

$("#apps").animate({
    width: "60%"
}, 3000)

$("#html").animate({
    width: "83%"
}, 3000);

$("#analitica").animate( {
    width: "70%"
}, 3000);

$("#javascript").animate( {
    width: "80%"
}, 3000);

$("#php").animate( {
    width: "65%"
}, 3000);

$("#node").animate( {
    width: "77%"
}, 3000);

$(".services .service i").mouseover(function() {
    $(this).addClass("animated bounce");
});
$(".services .service i").mouseout(function() {
    $(this).removeClass("animated bounce");
});


/**
 * Parcear URL
 */
function getGET() {
    var loc=document.location.href;
    if(loc.indexOf('?')>0) {
        var getString=loc.split('?')[1];
        var GET=getString.split('&');
        var get= {}
        ;
        for(var i=0, l=GET.length;
        i<l;
        i++) {
            var tmp=GET[i].split('=');
            get.url=unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}

getGET();

/**
 * TABS
 */
$(document).ready(function() {
    $('#tab-container').easytabs( {
        updateHash: false, animate: true, transitionIn: 'fadeIn', transitionOut: 'fadeOut', tabActiveClass: 'active', transitionInEasing: 'linear', transitionOutEasing: 'linear'
    });
});

// Portafolio
$(window).load(function() {
    $('#wrapper').bind('easytabs:after', function() {
        $(".portfolio_items").isotope( {
            itemSelector: '.single_item', layoutMode: 'fitRows', columnWidth: '.col-sm-3'
        });
        $('.portfolio_filter ul li').click(function() {
            $(".portfolio_filter ul li").removeClass("select-cat");
            $(this).addClass("select-cat");
            var selector=$(this).attr('data-filter');
            $(".portfolio_items").isotope( {
                filter:selector, animationOptions: {
                    duration: 750, easing: 'linear', queue: false,
                }
            });
            return false;
        });
        $('.image-link').magnificPopup( {
            type: 'image'
        });
    });
});