$(document).ready(function(){
    new WOW().init() 
})

/***************************************
                 MAGNIFIC POPUP 
****************************************/
$(document).ready(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true }
        // other options
    });
});

/***************************************
                 OWL CAROUSEL 
****************************************/
$(document).ready(function(){
    $("#team-members").owlCarousel({
        items : 3,
        loop:true,
        autoplay : true,
        autoplayTimeout : 7000,
        autoplayHoverPause: true,
        smartSpeed : 800,
        responsive : {
            0: {
                items: 1
            },
            768: {
                items: 2
            } ,
            991 : {
                items : 3
            }
        }
    });
})

$(document).ready(function () {
    $("#testimonial-customers").owlCarousel({
        items : 1,
        loop : true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        smartSpeed: 800,
    });
})

$(document).ready(function(){
    $("#clients-list").owlCarousel({
        items: 6,
        loop: true, 
        smartSpeed: 800,
        responsive : {
            0: {
                items : 1
            } ,
            480: {
                items : 3
            } ,
            768 : {
                items : 4
            }, 991: {
                items: 6
            }
        }  
    })
})

/***************************************
                CounterUp
****************************************/
$(document).ready(function(){
    $(".state-number1").counterUp({
        delay: 10,
        time: 3000
    })
})

/***************************************
                NAVBAR
****************************************/
let nav = document.querySelector("#v-nav")
let up_arrow = document.querySelector(".up-arrow")
window.addEventListener("scroll" , function(e){
    if ( this.scrollY <= 50 ) {
        nav.classList.remove("custom-nav")
        up_arrow.classList.add("hide")
    } else {
        nav.classList.add("custom-nav")
        up_arrow.classList.remove("hide")
    }
})

// smoth scrolling effect
$(document).ready(function(){
    $(".custom-a").on("click", function(e){
        e.preventDefault();
        let section = $(this).attr("href")
        $('html ,body').animate({
            scrollTop: $(section).offset().top - 120
        } ,1200 ,"easeInOutExpo")
    })  
})


// small screens 
$(document).ready( function(){
    $(".nav-item a").on("click touch" ,function(){
        $(".navbar-toggler").click()
    })
})