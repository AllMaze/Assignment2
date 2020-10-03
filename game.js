var counter = 0;
var rockC = 0;
var paperC = 0;
var scissorsC = 0;
var com;
var player;
var ties = 0;
var win = 0;
var loss = 0;

function play()
{
  	 var x = document.getElementsByName('choice'); 
              
            for(var i = 0; i < x.length; i++) { 
                if(x[i].checked) 
               {
               	document.getElementById("you_sel").innerHTML 
	            = x[i].value; 
	            player = x[i].value;
	            functionComputer();
	            count();
	            if (x[i].value == "Rock")
	            {
	            	rockC++;
	            	document.getElementById("your_countChoice").innerHTML 
					= "Paper: " + paperC + " time(s) & Scissors: " + scissorsC +
					 " time(s) & Rock: " + rockC + " time(s).";

	            }
	            else if (x[i].value == "Paper")
	            {
	            	paperC++;
	            	document.getElementById("your_countChoice").innerHTML 
					= "Paper: " + paperC + " time(s) & Scissors: " + scissorsC +
					 " time(s) & Rock: " + rockC + " time(s).";

	            }
	            else
	            {
	            	scissorsC++;
	            	document.getElementById("your_countChoice").innerHTML 
					= "Paper: " + paperC + " time(s) & Scissors: " + scissorsC +
					 " time(s) & Rock: " + rockC + " time(s).";
	            }
	           compare(player, com);

               } 
            }
}

function functionComputer()
{
	var num = randomNum();
	
	if (num == 0)
	{
		com = "Rock"
	}
	else if(num == 1)
	{
		com = "Paper"
	}
	else
	{
		com = "Scissors"
	}
	document.getElementById("com_out1").innerHTML 
            = com;
    document.getElementById("com_out2").innerHTML 
            = com;
}

function randomNum()
{
	//random number
	return Math.floor(Math.random() * 3);			
}

function count()
{
	//counts plays
	counter++;
	document.getElementById("your_count").innerHTML 
	= "History: You have played total: " + counter + " time(s)!";
}

function compare(yourInput, computerGen)
{
	//v = yourInput;
	//b = computerGen;
	if(yourInput == computerGen)
	{
		ties++;
	}
	else if((yourInput == "Rock" && computerGen == "Scissors") || 
	(yourInput == "Paper" && computerGen == "Rock") ||
	(yourInput == "Scissors" && computerGen == "Paper"))
	{
		win++;
	}
	else
	{
		loss++;
	}

	document.getElementById("winCount").innerHTML = 
	"Wins: " + win + " time(s) Loss: " + loss + " time(s) Ties: " + ties + " time(s)";

}
function welcome()
{
	playerName = window.prompt("Please enter your name");
	document.getElementById("welcomeHeader").innerHTML =
	playerName + ", Welcome to play Paper Scissors Rock game";
}
