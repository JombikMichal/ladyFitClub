
/*************** buttons *************************/
let btnLog = $('.btn-sb-login');
let btnReg = $('.btn-sb-reg');
let btnConfirm = $('.btn-sb-reg-conf');


let logForm = $('.box-place');
let regForm = $('.box-place-reg');
let headSubMenu = $('.about-submenu');
let headListWrapper = $('.list-wrapper li');
let headListWrapperResp = $('.list-wrapper-resp li');
let imgSelected = $('.img-wrapper').children();
let imgReset = $('.img-wrapper');
let loginBox = $('.t-part #login');
let overlay = $('<div>', {
  class: 'overlay'
});
let log = false;

let logOutIcon = $('<i>', {
  class: 'fa fa-user',
  'aria-hidden':'true'
});

let imgOne = $('.gallery-wrapper img');	
let imageArray = ['img/company/1.jpg','img/company/2.jpg','img/company/3.jpg','img/company/4.jpg',
'img/company/5.jpg','img/company/6.jpg','img/company/7.jpg','img/company/8.jpg','img/company/9.jpg','img/company/10.jpg']
let SmallOverlay = $('<div>', {
  class: 'small-overlay'
});


//snake 
let map = 60;
let body_snake = [];
let head_snake = [8,5];
let direction = 'down';
let speed = 350;
let speed_food = 8000;
let boom_freq = 4000;
let overlaySnake = $('<div>', {
  class: 'overlaySnake'
});

let snakeBox = $('.snake-game');
let findSnakePlace = $('.snake-game').find('.snake-start');
let addCredits = $('.credits-add');


//other games
let sniperGame = $('.sniper-game');
let gameBan = $('<i>',{
	class: 'fa fa-ban',
	'aria-hidden':'true'
});

let gameBanText = $('<span>',{
	text:'You must be logged in!'
});

let gameBanWrapper = $('<div>',{
	class:'ban-wrapper'
});



let gameCred = $('<div>',{
  class: 'credits-add',
  text:'Buy now'
});

let gameCredText = $('<span>',{
  text:'You dont have credits!'
});

let gameCredWrapper = $('<div>',{
  class:'ban-wrapper'
});




/**************** log ***********************/
let currentUser = '';
let credits = 0;