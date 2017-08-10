/*************head dropdown menu******************************/

headListWrapper.on('mouseenter',function(){
	$(this).find('ul').fadeIn(500);
});
headListWrapper.on('mouseleave',function(){
	$(this).find('ul').hide();
});

/************head dropdown menu resp ************************/
headListWrapperResp.on('mouseenter',function(){
	$(this).find('ul').fadeIn(500);
});
headListWrapperResp.on('mouseleave',function(){
	$(this).find('ul').hide();
});

/***********************img size efects ************************/
overlay.appendTo('body');


gameBanWrapper.append(gameBan);
gameBanWrapper.append(gameBanText);

gameCredWrapper.append(gameCred);
gameCredWrapper.append(gameCredText);


imgSelected.on('mouseenter',function(){
	$(this).addClass('zoom-in');
	$(this).siblings().addClass('zoom-out');
	$(this).find('.f-join').show();


});

imgSelected.on('mouseleave',function(){
	$(this).removeClass('zoom-in');
	$(this).siblings().removeClass('zoom-out');
	$(this).find('.f-join').hide();
	
});




loginBox.on('click', function(e) {
  resetAfterLog();
  $("body").css("overflow", "hidden");
  let findDivLogSec = $('.login-section').find('.div-box');
  findDivLogSec.appendTo(overlay);
  regForm.hide();
  $('.box-place').show();
  overlay.show();
  findDivLogSec.show();
});

$(document).on('keydown', function(e) {
  if(e.which === 27) {
    overlay.hide();
    $("body").css("overflow", "auto");
     let findDivLogSec = $('.login-section').find('.div-box');
  	findDivLogSec.parent().remove();
  }
});



sniperGame.on('mouseenter', function(){
	if(!log){
		SmallOverlay.append(gameBanWrapper);
		sniperGame.append(SmallOverlay);
		SmallOverlay.show();
	} else if (getCredits() === 0){
		SmallOverlay.append(gameCredWrapper);
		sniperGame.append(SmallOverlay);
		SmallOverlay.show();
	}
});
sniperGame.on('mouseleave', function(){
	SmallOverlay.hide();
	gameCredWrapper.remove();
	gameBanWrapper.remove();
});

snakeBox.on('mouseenter', function(e){
	
	if(!log){
		SmallOverlay.append(gameBanWrapper);
		snakeBox.append(SmallOverlay);
		SmallOverlay.show();
	}else if (getCredits() === 0){
		SmallOverlay.append(gameCredWrapper);
		snakeBox.append(SmallOverlay);
		SmallOverlay.show();
	}
});
snakeBox.on('mouseleave', function(){
	SmallOverlay.hide();
	gameCredWrapper.remove();
	gameBanWrapper.remove();
});





/************************************* login - get value / verify***********************************/

btnLog.on('click', function() {
 	let userName = $('#userName').val();
 	let userPwd = $('#userPwd').val();

 	let form = $(this).closest('.box-place');
 	let valid = validation(form);

 	if(!valid){
	 	$('#incorect-pwd').text('Your password can contain only numerics!').show();

 	}
 	else if (verifyLog(userName,userPwd)) {
 		$("body").css("overflow", "auto");
 		$('#login').hide();	
 		overlay.hide();
 		resetAfterLog();
 		$('#logout span').text(userName);
 		$('#logout').show();
 		log = true;
 	}else {
 		$('#incorect-pwd').text('Incorect login or password').show();
 	}

 });

btnReg.on('click',function(){
	regForm.show();
	logForm.hide();
	
});

btnConfirm.on('click', function(){
 	let form = $(this).closest('.box-place-reg');
 	let valid = validation(form);
 	$('#incorect-pwd-reg').toggle(!valid);
 	if(valid){
 		let values = form.find('input[type="text"],input[type="password"]').map(function(){
 			return $(this).val();
 		}).get();
 		
 		

 		saveUser(values);
	 	regForm.hide();
	 	logForm.show();
 	}
});
 	


/***************************** validation input ***************************************/
function validation(form){
	let result = true;
 
 	form.find(':input[data-valid]').each(function(){
 		let input = $(this);
 		let testRegex = new RegExp(input.data('valid'));
 		let valid = testRegex.test(input.val());
 		result = result && valid;
 		input.toggleClass('invalid', !valid);

 	});
 	return result;
}

function setUserObj(user){
	let userObject = {
		password:user[1],
		email:user[2],
		credit:10
	}
	return userObject;
}


function saveUser(user){	
		let userObj = setUserObj(user);
		localStorage.setItem(user[0],JSON.stringify(userObj));
}

function updateCredit(){
	localStorage.setItem(currentUser,JSON.stringify(currentUserObj));
}

function getUser(userName){
	let userObj =  JSON.parse(localStorage.getItem(userName));
	return userObj;
}


 	$('#logout').on('click',function(e){
 		$(this).hide();
 		$('#login').show();
 		log = false;
 	});


function verifyLog(userName, userPwd){
	if ( getUser(userName) !== null){
		if(userPwd === getUser(userName).password){
				currentUser = userName;
				currentUserObj = getUser(currentUser);
				return true;
		}
	}
	else {return false;}
}


function getCredits(){
	return parseInt(currentUserObj.credit);
}


function resetAfterLog(){
	 $('#incorect-pwd').hide();
	 $('#userName').val('');
 	 $('#userPwd').val('');
 	 $('#incorect-pwd-reg').hide();
	 $('#userName-reg').val('');
 	 $('#userPwd-reg').val('');
}




/*********************************** gallery ************************************************/

function changeImgsGallery(){
	$('.gallery-wrapper').find('img').eq(getRandomIntInclusive(0,6)).attr('src', imageArray[getRandomIntInclusive(0,10)]);
};


function changeGalleryImgResp(){
	$('.img-one-resp img').attr('src',imageArray[getRandomIntInclusive(0,10)]);	
}




function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}




/******************************** scroll document*************************************/

$('.about-submenu a').on('click', function(e) {
  e.preventDefault();
  let galleryId = $(this).attr('href');
  let gallery = $(galleryId);
  let offset = gallery.offset().top;

  $('body').animate({
    scrollTop: offset
  }, 1000, function() {
    window.location.hash = galleryId;
  });
});



/******************************* start section ***************************/
$(document).ready(function(){
	
	setInterval(changeGalleryImgResp,2000);
	setInterval(changeImgsGallery,800);
});

/*********************************** google maps api ********************************/

   function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }