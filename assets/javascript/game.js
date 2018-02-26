var wins=0;
var losses=0;
var guessesleft=9;
var userguesses=[];

var computerguess= guess();

window.onload = function(event){
	updateUI();
}

document.onkeyup = function(event) {
		console.log(computerguess);
      var userGuess = event.key;
      if(userGuess<"a" || userGuess>"z") {
      	alert("please chose letter from a to z");
      	return ;
      }
      if(userguesses.includes(userGuess)) {
      	return;
      }
      userguesses[userguesses.length]= userGuess;
      if(userGuess===computerguess) {
      	wins++;
      	computerguess=guess();
      	userguesses=[];
      	guessesleft=9;
      	updateUI();
      	return;
      }
      else{
      	guessesleft--;
      	if(guessesleft===0) {
      		losses++;
      		computerguess=guess();
      		userguesses=[];
      		guessesleft=9;
      		updateUI();
      		return;
      	}
      	updateUI();
      }
      	
}

function guess() 
{ 
    var computerGuess_code = Math.floor(Math.random() * 25)
      + 97;
    var computerguess=String.fromCharCode( computerGuess_code);
	return computerguess;

}

function updateUI() {
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("losses").innerHTML=losses;
	document.getElementById("guess_left").innerHTML=guessesleft;
	document.getElementById("your_guesses").innerHTML=userguesses;
}



