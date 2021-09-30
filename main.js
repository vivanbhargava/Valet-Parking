canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image = "parkingLot.jpg";
car_image = "car2.png";
car_width = 125;
car_heigth = 225;
car_x = 10;
car_y = 385;
function add() {
	background_image_vb = new Image();
	background_image_vb.onload = uploadbackground;
	background_image_vb.src = background_image;
	car_image_vb = new Image();
	car_image_vb.onload = uploadcar;
	car_image_vb.src = car_image;
}
function uploadbackground() {
	ctx.drawImage(background_image_vb, 0, 0, 1000, 750);
}
function uploadcar() {
	ctx.drawImage(car_image_vb, car_x, car_y, car_width, car_heigth);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38') {
			up();
			console.log("up");
		}
		if(keyPressed == '40'){
			down();
			console.log("down");
		}
		
		if(keyPressed == '37') {
			left();
			console.log("left");
		}
	
		if(keyPressed == '39') {
			right();
			console.log("right");
		}	
}
function up() {
	if(car_y >= 0) {
		car_y -= 10;
		console.log("When up arrow is pressed, x = " + car_x + " | y = " + car_y);
		uploadbackground();
		uploadcar();
	}
}
function down() {
	if (car_y <= 400) {
		car_y += 10;
		console.log("When down arrow is pressed, x = " + car_x + " | y = " + car_y);
		uploadbackground();
		uploadcar();
	}
}
function left() {
	if (car_x >= 0) {
		car_x -= 10;
		console.log("When left arrow is pressed, x = " + car_x + " | y = " + car_y);
		uploadbackground();
		uploadcar();
	}
}
function right() {
	if (car_x <= 850) {
		car_x += 10;
		console.log("When right arrow is pressed, x = " + car_x + " | y = " + car_y);
		uploadbackground();
		uploadcar();
	}
}