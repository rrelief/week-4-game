
$(document).ready(function(){

var wins=0;
var losses=0;

//Random number generator between 19-120
var randomNumber;
console.log(randomNumber);

//Random number needs to be displayed in random number box
//text is jQuery specific method and have to use jQuery
//Player score starts at zero, then place that score in a box to display to user
var playerScore;

//(4 crystals displayed as buttons on the page, above the player's score)
//WHEN clicked on by the player each crystal will add a specific amount of points to the player's total score counter
$(".red-gem").click(function(){
   console.log("red")
   var value =parseInt($(this).val())
   console.log($(this).val())
   playerScore+=value
   $(".totalScore").text(playerScore);
   checkWin();
});

$(".blue-gem").click(function(){
   console.log("blue")
   var value =parseInt($(this).val())
   console.log($(this).val())
   playerScore+=value
   $(".totalScore").text(playerScore);
   checkWin();
});

$(".green-gem").click(function(){
   console.log("green")
   var value =parseInt($(this).val())
   console.log($(this).val())
   playerScore+=value
   $(".totalScore").text(playerScore);
   checkWin();
});

$(".yellow-gem").click(function(){
   console.log("yellow")
   var value =parseInt($(this).val())
   console.log($(this).val())
   playerScore+=value
   $(".totalScore").text(playerScore);
   checkWin();
});
//Update the player's total score counter


//the player wins if the player's total score = the random number from the   beginning of the game

//the player loses if their score goes above the random number
function checkWin(){
   if(playerScore===randomNumber){
       wins++
       $(".wins").text(wins);
       $(".message").text("You've got the POWER now!");
       resetGame()
   }
   else{
       if(playerScore>randomNumber){
               losses++
               $(".losses").text(losses);
               $(".message").text("You suck, try again!");
               resetGame()
       }
   }
}


//All crystals have to generate random number between 1-16
   //player should see a new random number
   function resetGame(){
       var crystal1 = Math.floor(Math.random() * (16)) + 1;
       console.log(crystal1,"number is valid")
       var crystal2 = Math.floor(Math.random() * (16)) + 1;
       console.log(crystal2, "number is valid")
       var crystal3 = Math.floor(Math.random() * (16)) + 1;
       console.log(crystal3, "number is valid")
       var crystal4 = Math.floor(Math.random() * (16)) + 1;
       console.log(crystal4, "number is valid")

       $(".red-gem").val(crystal1)
       $(".blue-gem").val(crystal2)      
       $(".green-gem").val(crystal3)
       $(".yellow-gem").val(crystal4)
       
       randomNumber = Math.floor(Math.random() * (102)) + 19;
       console.log(randomNumber);

//display random number in random number box
//text is jQuery specific method and have to use jQuery
       $(".randomNumber").text(randomNumber);
       playerScore =0;
   }

   //4 crystals have new hidden number
   //player's score resets to zero
       resetGame()
});