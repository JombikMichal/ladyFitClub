let overlay = $('<div>', {
  class: 'overlay'
});
let overlayImgWrapper = $('<div>',{
  class:'over-img-wrapp'
})

let showMenuResp = $('.nav-menu-resp ul');
let fitImage = $('.fit-image-wrapper a');
let imageFitArray = ['img/fitness/fit1.jpg','img/fitness/fit2.jpg','img/fitness/fit3.jpg'];



overlay.appendTo('body');



$('#active-menu').on('click',function(){
  $(this).find('ul').toggle();
});








$(document).on('scroll', function() {
  let navWrapp = $('.nav-wrapper');
  let offset = $(this).scrollTop();
  if(offset > 0){
    navWrapp.addClass('nav-wrapper-scroll');
  }else if(offset === 0){
    navWrapp.removeClass('nav-wrapper-scroll'); 
  }
});


$('.nav-menu a ').on('click', function(e) {
  e.preventDefault();
  let sectionId = $(this).attr('href');
  let section = $(sectionId);
  let offset = section.offset().top;
  $('body').animate({
    scrollTop: offset
  }, 1500, function() {
    window.location.hash = sectionId;
  });
});

$('.nav-menu-resp a').on('click', function(e) {
  e.preventDefault();
  let sectionId = $(this).attr('href');
  let section = $(sectionId);
  let offset = section.offset().top;
  $('body').animate({
    scrollTop: offset
  }, 1000, function() {
    window.location.hash = sectionId;
  });
});




fitImage.on('click', function(e) {
  e.preventDefault();
  let imgSrc = $(this).attr('href');
  setOverlay(imgSrc);
});



$(document).on('keydown', function(e) {
  if(e.which === 27) {
     $("body").css("overflow", "auto");
    overlay.hide();
  }
});


function setOverlay(overlayItem){
  $("body").css("overflow", "hidden");
  let img = $('<img>', {
    src: overlayItem
  });
  overlay.html(img).show();
}




$('.fit-image-wrapper').find('aside').on('click',function(){


  console.log($(this).find('a').attr('href'));
  $(this).find('a');
  console.log( $(this).index('a'));
})





$('.overlay').on('click',function(){
  console.log($(this).children());
  

   let imgSrc = imageFitArray[2];
  setOverlay(imgSrc);
  console.log(imgSrc);

});


  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );



   function initMap() {
        var uluru = {lat: 48.4403682, lng: 17.0165243};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }





























/*
$(document).ready(function() {
  var slider = $('.slider');
  var sliderRunning = false;
  var intervalId = null;

  slider.children().last().show();
  startSlider();

  $('.slider').on('click', function() {
    if(sliderRunning) {
      stopSlider();
    }
    else {
      startSlider();
    }
  });

  function startSlider() {
    intervalId = setInterval(function() {
      var lastImg = slider.children().last();

      lastImg.prev().fadeIn(1500);
      lastImg.fadeOut(1500, function() {
        $(this).prependTo(slider);
      });
      // slider.prepend(lastImg);
    }, 3000);
    sliderRunning = true;
  }

  function stopSlider() {
    clearInterval(intervalId);
    sliderRunning = false;
  }
});
*/