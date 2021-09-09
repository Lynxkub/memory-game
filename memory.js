const gameContainer = document.getElementById("game");
const body=document.querySelector("body");
let pickOne="";
let pickTwo="";
let firstChoice="";
let secondChoice="";


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


function shuffle(array) {
  let counter = array.length;

 
  while (counter > 0) {
    
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


function createDivsForColors(colorArray) {
  for (let color of colorArray) {

    const newDiv = document.createElement("div");

   
    newDiv.classList.add(color);

    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}
let count = 0;
// 
let guessedCards=[];
function handleCardClick(event) {

  const chosenCard=event.target
  // chosenCard.setAttribute("data", "guessed");
  // // guessedCards+=chosenCard;
  // console.log(guessedCards);
  // console.log(chosenCard);
  // guess=document.getElementsByClassName(event.target.classList);
  // console.log(guess);
  // guessedCards+=guess;
  // guessedCards += guess;
  // console.log(guessedCards);



 

 


  chosenCard.style.backgroundColor=chosenCard.classList;
  console.log("you just clicked", event.target);
  event.target.classList.add("disabledDiv");

  function cardCount(){
    count ++;
    console.log(count);
    if(pickOne !== ""){
      pickTwo=event.target.className;
    }else{
      pickOne=event.target.className;
    }
    console.log(pickOne);
    console.log(pickTwo);
    if(firstChoice!==""){
      secondChoice=event.target;
    }else{
      firstChoice=event.target;
    }
   
    
    if (count === 2){
      
      const disable = document.querySelectorAll("div");
     for (let x=0; x<disable.length; x++){
       disable[x].classList.add("disabledDiv");
      ;
       setTimeout(function(){
         disable[x].classList.remove("disabledDiv");
         
        guessedCards=[];
       },3000);
     }
     setTimeout(function(){
     if(pickOne === pickTwo){
        alert("You guessed Correctly!");
        console.log(firstChoice);
        console.log(secondChoice);
        firstChoice="";
        secondChoice="";
        pickOne="";
        pickTwo="";
       
      }else{
        alert("Try again")
        setTimeout(function(){
          if(pickOne !== pickTwo)
            firstChoice.style.backgroundColor="";
            secondChoice.style.backgroundColor="";
          
          console.log(firstChoice);
          console.log(secondChoice);
          
          firstChoice="";
          secondChoice=""
          pickOne="";
          pickTwo="";
        },500);
        
      }
      
    },1000);
    
    
   
      count=0;
    }
    
    return count;
  }
  cardCount();
}



createDivsForColors(shuffledColors);