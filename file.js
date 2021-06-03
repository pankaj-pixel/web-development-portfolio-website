$(document).ready(function(){
 $(window).on("scroll",function(){
  if($(this).scrollTop()>90){
      $(".navbar").addClass("navbar-shrink");

  }
  else{
    $(".navbar").removeClass("navbar-shrink");

  }
 })

/**---------------services--------------------- */
$('.owl-carousel').owlCarousel({
  loop:false,
  margin:0,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
         
      },
      600:{
          items:2,
        
      },
      1000:{
          items:3,
          
      }
  }
})


/**---------------services--------------------- */

AOS.init({duration: 1200,}
    );

   

});

$("document").ready(function(){
    $.scrollIt();
});