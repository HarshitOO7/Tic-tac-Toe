// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player X won');
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function myfunc_2(difficulty="player") {
	// Here, Resetting the game
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
	document.getElementById('print')

	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
	boxDone = [];
	flag =1;
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
//add all myfuncs from 3 to 11 in the list
let boxes = [myfunc_3, myfunc_4, myfunc_5, myfunc_6, myfunc_7, myfunc_8, myfunc_9, myfunc_10, myfunc_11];
boxDone = [];
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		//added these lines of code to every other function afterwards
		if(difficultySet=="easy"){
			boxDone.push(0);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(0);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(1);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(1);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(2);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(2);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(3);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(3);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(4);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(4);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(5);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(5);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(6);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(6);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(7);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(7);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		if(difficultySet=="easy"){
			boxDone.push(8);
			easyMode();
		}
		else if(difficultySet=="hard"){
			boxDone.push(8);
			hardMode();
		}
		else{
			flag=0;
		}
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}

//Code starts here, added some lines of code in myfunc_1() to myfunc11()
var difficultySet;
function startGame(){

	if (document.getElementById('1').checked) {
		 difficultySet = document.getElementById('1').value;
	  }
	else if (document.getElementById('2').checked) {
		 difficultySet = document.getElementById('2').value;
	  }
	else if (document.getElementById('3').checked) {
		 difficultySet = document.getElementById('3').value;
	  }
	window.alert("Difficulty set to "+difficultySet);
	myfunc_2();
}

function easyMode(){
	flag=0;
	let random = Math.floor(Math.random() * 9);
	while(boxDone.includes(random) && boxDone.length<9){
		random = Math.floor(Math.random() * boxes.length);
	}
	if(boxDone.length<9){
		boxDone.push(random);
		console.log(random);
		console.log(boxDone);
		boxes[random]();
	}
}

//make a hard minmax algorithm to play against
function checkBoard(){
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	board = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
	console.log(board);
	return board
}
var win = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
function minmax(board, player){

	//check if '0' can win in the next move
	for(var i=0; i<win.length; i++){
		if(board[win[i][0]]=='0' && board[win[i][1]]=='0' && board[win[i][2]]==''){
			return win[i][2];
		}
		else if(board[win[i][0]]=='0' && board[win[i][1]]=='' && board[win[i][2]]=='0'){
			return win[i][1];
		}
		else if(board[win[i][0]]=='' && board[win[i][1]]=='0' && board[win[i][2]]=='0'){
			return win[i][0];
		}
	}

	//win over block
	for(var i=0; i<win.length; i++){
		if(board[win[i][0]]==player && board[win[i][1]]==player && board[win[i][2]]==""){
			return win[i][2];
		}
		else if(board[win[i][0]]==player && board[win[i][2]]==player && board[win[i][1]]==""){
			return win[i][1];
		}
		else if(board[win[i][1]]==player && board[win[i][2]]==player && board[win[i][0]]==""){
			return win[i][0];
		}
	}

	//use win to check best move
	for(var i=0; i<win.length; i++){
		if(board[win[i][0]]==player && board[win[i][1]]==player && board[win[i][2]]==""){
			return win[i][2];
		}
		else if(board[win[i][0]]==player && board[win[i][1]]=="" && board[win[i][2]]==player){
			return win[i][1];
		}
		else if(board[win[i][0]]=="" && board[win[i][1]]==player && board[win[i][2]]==player){
			return win[i][0];
		}
	}

	//if no win, check for block
	for(var i=0; i<win.length; i++){
		if(board[win[i][0]]==player && board[win[i][1]]==player && board[win[i][2]]==""){
			return win[i][2];
		}
		else if(board[win[i][0]]==player && board[win[i][1]]=="" && board[win[i][2]]==player){
			return win[i][1];
		}
		else if(board[win[i][0]]=="" && board[win[i][1]]==player && board[win[i][2]]==player){
			return win[i][0];
		}
	}

	//if no win, check for center
	if(board[4]==""){
		return 4;
	}
	else{
		//check for corner
		if(board[0]==player && board[8]==""){
			return 8;
		}
		else if(board[2]==player && board[6]==""){
			return 6;
		}
		else if(board[6]==player && board[2]==""){
			return 2;
		}
		else if(board[8]==player && board[0]==""){
			return 0;
		}
		else{
			//check for side
			if(board[1]==player && board[7]==""){
				return 7;
			}
			else if(board[3]==player && board[5]==""){
				return 5;
			}
			else if(board[5]==player && board[3]==""){
				return 3;
			}
			else if(board[7]==player && board[1]==""){
				return 1;
			}
		}
	}

	//if no win, check for empty box
	for(var i=0; i<board.length; i++){
		if(board[i]==""){
			return i;
		}
	}
	//if no win, return -1
	return -1;
}

function hardMode(){
	flag=0;
	var board = checkBoard();
	var move = minmax(board, "X");
	console.log(move);

	//check if no move is left
	if(document.getElementById("b1").value
		&& document.getElementById("b2").value
		&& document.getElementById("b3").value
		&& document.getElementById("b4").value
		&& document.getElementById("b5").value
		&& document.getElementById("b6").value
		&& document.getElementById("b7").value
		&& document.getElementById("b8").value
		&& document.getElementById("b9").value){
		window.alert("Game Over");
	}
	else{
		if(move==-1){
			window.alert("Game Over");
		}
		else{
			boxes[move]();
		}
	}


}