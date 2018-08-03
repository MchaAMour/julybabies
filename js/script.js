/*--------------------------------------------------------------
| |preloader
--------------------------------------------------------*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/*--------------------------------------------------------------
| | responsive tabs
--------------------------------------------------------*/
$(function() {

  $('#services-tabs').responsiveTabs({
    animation: 'slide',


  });

});

/*--------------------------------------------------------------
| | providers
--------------------------------------------------------*/

$(function() {

  $('#providers-list').owlCarousel({
    items:3,
    autoplay:false,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

  });

});

/*--------------------------------------------------------------
| | process
--------------------------------------------------------*/

$(function() {

  $('#process-members').owlCarousel({
    items:1,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    paginationSpeed : 400,
    //singleItem:true
    //dots:false,
    //navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

  });

});






/*--------------------------------------------------------------
| | Team
--------------------------------------------------------*/

$(function() {

  $('#team-members').owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    //dots:false,
    //navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

  });

});


/*--------------------------------------------------------------
black and white Navigation
--------------------------------------------------------*/

$(function() {
  //show and hide navbar on page load
  showHide();
  $(window).scroll(function(){
    //show and hide navbar on page load on scroll
    showHide();


  });

  function showHide() {
    if ( $(window).scrollTop() > 500) {
      $('nav').addClass('white-nav-top');
      //$(".navbar-brand img").attr("src","C:\Users\Mcha\Desktop\babies\img\logo\black\android-icon-72x72.png");

    } else {
      $('nav').removeClass('white-nav-top');
      //$(".navbar-brand img").attr("src","C:\Users\Mcha\Desktop\babies\img\logo\blue\android-icon-72x72.png");

    }

  }

});


/*--------------------------------------------------------------
| | scrolling
--------------------------------------------------------*/

$(function() {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    // get section
    var section_id =$(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 65
    },1250);
  })



});
