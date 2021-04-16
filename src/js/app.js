$(document).ready(function(){

  // open menu
  $('.menu').click(function(){
    $('.navlink').addClass('nav-block');
    $('.overlay').addClass('visibility');
  });
  // close mineu
  $('.close-menu').click(function(){
    $('.navlink').removeClass('nav-block');
    $('.overlay').removeClass('visibility');
  });
// open gallery
  $('#btnGallery').click(function(){
    $('.modale').addClass('display-block');

    // carousel gallery
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
      ]
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            // centerMode: true,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }
      ]
    });

  });

  // close gallery
  $('.close').click(function(){
    $('.modale').removeClass('display-block');
  });

});

// mute off
function enableMute() {
  console.log('click');
  var video = document.getElementById("myVideo");
    if (video.muted) {
      video.muted = false;
    }
};

// topscroll
window.addEventListener ("scroll",function(){
  if (window.pageYOffset>1500) {
  document.getElementById ("back-top").style.display= "block";
  }
  else if (window.pageYOffset<1500) {
  document.getElementById ("back-top").style.display= "none";
  }
});
