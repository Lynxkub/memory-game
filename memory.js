const gameContainer = document.getElementById("game");
const body=document.querySelector("body");
let pickOne="";
let pickTwo="";
let firstChoice="";
let secondChoice="";
const btn=document.querySelector("button");
const restart=document.querySelector("#restart");





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

const newColors =[
  "purple",
  "orange",
  "blue",
  "red",
  "green",
  "red",
  "orange",
  "green",
  "purple",
  "blue"
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
let newShuffle=shuffle(newColors);
console.log(newShuffle);

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




 

 


  chosenCard.style.backgroundColor=chosenCard.classList;
  console.log("you just clicked", event.target);
  event.target.classList.add("disabledDiv");

  function cardCount(){
    count ++;
   
    if(pickOne !== ""){
      pickTwo=event.target.className;
    }else{
      pickOne=event.target.className;
    }
    
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

btn.addEventListener("click", function(){
  alert("You asked for this....");
  createDivsForColors(newShuffle);
})

restart.addEventListener("click", function(){
  while(gameContainer.firstChild){
    gameContainer.removeChild(gameContainer.firstChild)
  }
  createDivsForColors(newShuffle);
})