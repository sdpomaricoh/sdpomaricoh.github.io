// WOW.js initialize
new WOW().init();

//fix bugs on main menu

count = 0;

$(".menu li a").click(function(){
    count++;
    if (count > 0) {
        id = $(this).attr("id");
        if (id == "menu-about") {
            //alert();
             $("#about").removeClass("wow fadeInUp");
            //  $("#about").removeAttr("data-wow-duration");
            //  $("#about").removeAttr("data-wow-delay");
             $("#about").removeAttr("style");
        }
    }
});

// Preloader
$(window).load(function() {
    $('#preloader').delay(900).fadeOut('slow');
});

//Progress bar animation
$("#html").animate({
    width: "90%"
}, 5000);

$("#photoshop").animate({
    width: "60%"
}, 5000);

$("#css").animate({
    width: "70%"
}, 5000);

$("#javascript").animate({
    width: "65%"
}, 5000);

$("#php").animate({
    width: "50%"
}, 5000);


$("#node").animate({
    width: "57%"
}, 5000);

//Services animation
$(".services .service i").mouseover(function(){
    $(this).addClass("animated bounce");
});
$(".services .service i").mouseout(function(){
    $(this).removeClass("animated bounce");
});

//Go Back URL
$("#back-button").click(function(){
    window.location.href ="/#blog?=blog";
});

function getGET()
{
    var loc = document.location.href;
    if(loc.indexOf('?')>0)
    {
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get.url =  unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}

get = getGET();

if (get){
    if (get.url == "blog") {
        console.log("estas en el blog");
         $('#tab-container').easytabs('select', '#blog');
    }
}

//Setup tabs
$(document).ready( function() {

    // PAGE TABS
    $('#tab-container').easytabs({
        updateHash		: false,
        animate			: true,
        transitionIn	:'fadeIn',
        transitionOut	:'fadeOut',
        tabActiveClass	:'active',
        transitionInEasing: 'linear',
        transitionOutEasing: 'linear'
    });

    $('#wrapper').bind('easytabs:after', function() {
        var myOptions = {
            zoom: 14,
            center: new google.maps.LatLng(6.208892, -75.5776498), //change the coordinates
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            mapTypeControl: true,
            styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#e3e3e3"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#afd7a2"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#91b384"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#cccccc"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#FFFFFF"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
        };

        var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(6.208892, -75.5776498) //change the coordinates
        });
        var infowindow = new google.maps.InfoWindow({
            content: "<b>Vivero del Sofware</b><br/>Cl. 7 # 48111 <br/> Medellín, Antioquia"  //add your address
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);

    });


    // Portfolio
    $(".portfolio_items").isotope({
        itemSelector: '.single_item',
        layoutMode: 'fitRows',
        columnWidth: '.col-sm-3'
    });

    // isotope click function

    $('.portfolio_filter ul li').click(function(){
        $(".portfolio_filter ul li").removeClass("select-cat");
        $(this).addClass("select-cat");

        var selector = $(this).attr('data-filter');
        $(".portfolio_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
    });
        return false;
    });

    // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.image-link').magnificPopup({
        type:'image'
    });


});
