let overlay = $('<div>', {
  class: 'overlay'
});
let overlayImgWrapper = $('<div>',{
  class:'over-img-wrapp'
})

let showMenuResp = $('.nav-menu-resp ul');
let imageFitArray = ['img/fitness/fit1.jpg','img/fitness/fit2.jpg','img/fitness/fit3.jpg'];
let imageSlider = $('.slider');
let fitImage = $('.fit-image-wrapper img');
let overlayImageSlider = $('<div>', {
  class: 'overlay-slider'
});

let overlayDiv = $('<div>', {
  class:'overlay-div'
});




let imageSliderActive = false;


let slider = $('.slider');
slider.hide();


let moveImgWrapperRight = $('<div>', {
  class: 'move-wrapp-r'
});

let moveImgWrapperLeft = $('<div>', {
  class: 'move-wrapp-l'
});

let arrowRight = $('<i>', {
  class: 'fa fa-arrow-circle-o-right',
});
let arrowLeft = $('<i>', {
  class: 'fa fa-arrow-circle-o-left',
});


arrowLeft.appendTo(moveImgWrapperLeft);
arrowRight.appendTo(moveImgWrapperRight);
moveImgWrapperRight.appendTo('.fit-image-slider');
moveImgWrapperLeft.appendTo('.fit-image-slider');
overlayDiv.appendTo(overlayImageSlider);
overlayImageSlider.appendTo('body');
$('slider-img move-wrapp-l').hide();
$('move-wrapp-r').hide();




$('#active-menu').on('click',function(){
  $(this).find('ul').toggle();
});



$('.fit-wrapper').hide();
$('.trends-wrapper').hide();




$(document).on('scroll', function() {
  let navWrapp = $('.nav-wrapper');
  let offset = $(this).scrollTop();
  if(offset > 0){
    navWrapp.addClass('nav-wrapper-scroll');
  }else if(offset === 0){
    navWrapp.removeClass('nav-wrapper-scroll'); 
  }
  if(offset > 200){
     $('.fit-wrapper').show().addClass('slide-from-left');
  }
   if(offset > 454){
     $('.cardio').show().addClass('show-part');
  }
  if(offset > 900){
     $('.trends-wrapper').show().addClass('slide-from-left');
  }
   if(offset > 1100){
     $('.solar-wrapper').show().addClass('show-part');
  }
    if(offset > 2070){
     $('.contact-wrapper').show().addClass('show-contact');
  }
});


$(slider).on('mouseenter',function(){
  $('move-wrapp-l').show();
  $('move-wrapp-r').show();
});

$(slider).on('mouseenter',function(){
  $('move-wrapp-l').hide();
  $('move-wrapp-r').hide();
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

console.log($(document).scrollTop());


$('.overlay-slider').on('click', function(e){
  if(e.target.className === 'overlay-slider'){
      closeOverlay();
  }
});



function closeOverlay(){
  imageSliderActive = false;
  $("body").css("overflow", "auto");
    overlayImageSlider.hide();
}

$('.fit-image-wrapper').on('click',function(){
  console.log($(this).children());
});



fitImage.on('click', function(e) {
  imageSliderActive = true;
  $("body").css("overflow", "hidden");
  slider.children().last().show();
  overlayImageSlider.fadeIn(1000);
  $('.slider').appendTo(overlayDiv);
  slider.show();
  console.log($(this).eq());

});

function setOverlay(overlayItem){
  $("body").css("overflow", "hidden");
  let img = $('<img>', {
    src: overlayItem
  });
  overlay.html(img).show();
}

$(document).on('keydown', function(e) {
  if(e.which === 27) {
    closeOverlay();
  }
  if(imageSliderActive === true){
   if(e.which === 39 || e.which === 37){
    startSlider();
   }
  }
});


  function startSlider() {
    
      let lastImg = slider.children().last();

      lastImg.prev().fadeIn(1500);
      lastImg.fadeOut(1500, function() {
        $(this).prependTo(slider);
      });
  }



$('.move-wrapp-r').on('click',function(e){
  console.log(e.target.className);
    slider.show();
      startSlider();
});

$('.move-wrapp-l').on('click',function(e){
  console.log(e.target.className);
    slider.show();
      startSlider();
});


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
        let uluru = {lat: 48.4402907, lng: 17.0163606};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        let marker = new google.maps.Marker({
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