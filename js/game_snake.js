


//this function create map by table 
function create_map(){
	let td ='';
	let tr = [];
	for(let i = 0; i<=map; i++){
		td += '<td></td>';
	}

	for(let i = 0; i<=map; i++){
		tr.push('<tr>' + td + '</tr>');
	}
	findSnakePlace.append('<table>' + tr.join('') + '</table>');

}


//this function create snake

function create_snake(){

	$('td').removeClass('body_sn head_sn');
	for(let cell in body_snake){
		$('tr').eq(body_snake[cell][0]).find('td').eq(body_snake[cell][1]).addClass('body_sn');
	}

	$('tr').eq(head_snake[0]).find('td').eq(head_snake[1]).addClass('head_sn');
}

//actualy snake position

function actual_snake_position(){
	let new_head = [];
	let tail_snake = body_snake.length;


	switch(direction){
		case 'right' :
			new_head = [head_snake[0],head_snake[1]+1];
			break;
		case 'left' :
			new_head = [head_snake[0],head_snake[1]-1];
			break;
		case 'up' :
			new_head = [head_snake[0]-1,head_snake[1]];
			break;
		case 'down' :
			new_head = [head_snake[0]+1,head_snake[1]];
			break;

	}


	cell = $('tr').eq(new_head[0]).find('td').eq(new_head[1]);
	if(cell.hasClass('food')){
		body_snake.push([]);
	//	SpeedUp();

		$("<audio></audio>").attr({
   			 'src':'food.wav',
   			 'volume':0.4,
   			 'autoplay':'autoplay'
		}).appendTo("body");
		create_food();
	}else if(cell.hasClass('food_random')){
		body_snake.push([]);

		$("<audio></audio>").attr({
   			 'src':'food.wav',
   			 'volume':0.4,
   			 'autoplay':'autoplay'
		}).appendTo("body");
		$('td').removeClass('food_random');
	}else if(cell.hasClass('body_sn')){
		gameOver();
	}else if(cell.hasClass('boom_random')){
		gameOver();
	}else if(new_head[0]<0 || new_head[1]<0){
		gameOver();
	}else if(new_head[0]>=map || new_head[1] >=map){
		gameOver();
	}
	else {
		$("<audio></audio>").attr({
   			 'src':'step.wav',
   			 'volume':0.4,
   			 'autoplay':'autoplay'
		}).appendTo("body");
	}

	for(let i = tail_snake -1; i > 0; i--){
		body_snake[i] = body_snake[i-1];
	}

	body_snake[0] = head_snake = new_head;
	create_snake();
}


function start_game(){
	go  = setInterval(actual_snake_position,speed);
	foodGo = setInterval(create_food_random,speed_food);
	boomGo = setInterval(create_boom_random,boom_freq);
}

function change_diraction(){
	let right = 39, left = 37, up = 38, down = 40;
	$('body').keydown(function(e){
		switch(e.keyCode){
			case right:
				direction = 'right';
				break;
			case left:
				direction = 'left';
				break;
			case up:
				direction = 'up';
				break;
			case down:
				direction = 'down';
				break;
		}
	});
}

function create_food(){
	$('td').removeClass('food');
	food = [parseInt(Math.random()*map),parseInt(Math.random()*map)];
	cell = $('tr').eq(food[0]).find('td').eq(food[1]);
	if((cell.hasClass('boom_random') === false) && (cell.hasClass('food_random') === false)) {
		$('tr').eq(food[0]).find('td').eq(food[1]).addClass('food');
	}else{
		create_food();
	}
}

function create_food_random(){
	$('td').removeClass('food_random');
	food2 = [parseInt(Math.random()*map),parseInt(Math.random()*map)];
	cell = $('tr').eq(food2[0]).find('td').eq(food2[1]);
	if((cell.hasClass('boom_random') === false) && (cell.hasClass('food') === false)) {
		$('tr').eq(food2[0]).find('td').eq(food2[1]).addClass('food_random');
	}else{
		create_food_random();
	}
	
	
}

function create_boom_random(){
	boom = [parseInt(Math.random()*map),parseInt(Math.random()*map)];
	cell = $('tr').eq(boom[0]).find('td').eq(boom[1]);
	if((cell.hasClass('food_random') === false) && (cell.hasClass('food') === false)) {
		$('tr').eq(boom[0]).find('td').eq(boom[1]).addClass('boom_random');
	}else{
		create_boom_random();
	}
	
	
}



function gameOver(){
	clearInterval(go);
	clearInterval(foodGo);
	clearInterval(boomGo);
	$('table').css('background-color','#ff2222');
	$("<audio></audio>").attr({
    'src':'gov.wav',
    'volume':0.4,
    'autoplay':'autoplay'
}).appendTo("body");
	$('table').animate({
		complete:$('table').fadeOut(4000)
	},2000);

	$('.gameOver').css('visibility','visible');
	//resetSnake();
}



function resetSnake(){
	$('.snake-start').children().remove();
};

/******************************* start snake **********************************/
overlaySnake.appendTo('body');

snakeBox.on('click', function(e) {
	//console.log(credits);
	console.log(currentUser);
	let uu = localStorage.getItem(userName + 3);
	//console.log(uu);
	if((log === true) && (getCredits() > 0)){
		startSnakeGame();
		//let creditsDown = getCredits() -1;
		localStorage.setItem(currentUser+3, getCredits() -1);
	}
});

function startSnakeGame(){
	create_map();
	body_snake = [];
	head_snake = [8,5];
	$("body").css("overflow", "hidden");
  	findSnakePlace.appendTo(overlaySnake);
    overlaySnake.show();
    findSnakePlace.show();
	start_game();
	change_diraction();
	create_food();
}


$(document).on('keydown', function(e) {
  if(e.which === 27) {    
    
    clearInterval(go);
    create_snake();
    direction = 'down';
	clearInterval(foodGo);
	clearInterval(boomGo);
	overlaySnake.hide();
    $("body").css("overflow", "auto");
    resetSnake();
  }
});