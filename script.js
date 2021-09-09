
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        responsiveClass:true,
        navClass: ["carousel-control-prev"," carousel-control-next"],
        navText: ["<div class='carousel-control-prev-icon'></div>", "<div class='carousel-control-next-icon'></div>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
                items:2,
                nav:true,
                loop:false
            },
            768:{
                items:4,
                nav:true,
                loop:false
            },
            992:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
  });