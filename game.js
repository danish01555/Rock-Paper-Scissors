let userScore=0;
let computerScore=0;
let yourScore=document.querySelector(".user-score");
let compScore=document.querySelector(".comp-score");
let msg=document.querySelector(".msg");


let choice=document.querySelectorAll(".btn");
choice.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
        console.log("you choosed the",userChoice);
        playgame(userChoice);
    });

});

// this is computer random choice function
const generateComputerChoice=()=>{
    const arr=["stone","paper","scissor"];
    let compChoosed=Math.floor(Math.random()*3);{
    if(compChoosed===0){
        return arr[0];
    }
    else if(compChoosed===1){
        return arr[1];
    }
    else{
        return arr[2];
    }
    
};
};
//this is playgame main thing function
const playgame=(userChoice)=>{
    
    let computer=generateComputerChoice();
    if(userChoice===computer){
        console.log(`this match is draw bez both choose ${computer}`);
    }
    else if(userChoice==="stone" && computer==="paper"){
        console.log(`you lost u chose ${userChoice} and comp chose ${computer}`);
        computerScore++;
        compScore.innerText=computerScore;
        msg.innerText="YOU LOST";
        
        
        
        
    }
    else if(userChoice==="stone" && computer ==="scssior"){
        console.log(`you won u chose ${userChoice} and comp chose ${computer}`);
        userScore++;
         yourScore.innerText=userScore;
         msg.innerText="YOU WON";
    }
    
    else if(userChoice==="paper"&& computer==="stone"){
        console.log(`you won u chose ${userChoice} and comp chose ${computer}`);
        userScore++;
         yourScore.innerText=userScore;
         msg.innerText="YOU WON";
        
    }
    else if(userChoice==="paper"&& computer==="scissor"){
        console.log(`you lost u chose ${userChoice} and comp chose ${computer}`);
        computerScore++;
        compScore.innerText=computerScore;
        msg.innerText="YOU LOST";
        
    }
    else if(userChoice==="scissor"&& computer==="paper"){
        console.log(`you won u chose ${userChoice} and comp chose ${computer}`);
        userScore++;
        yourScore.innerText=userScore;
         msg.innerText="YOU WON";
        
    }
    else if(userChoice==="scissor"&& computer==="stone"){
        console.log(`you lost u chose ${userChoice} and comp chose ${computer}`);
        computerScore++;
        compScore.innerText=computerScore;
        msg.innerText="YOU LOST";
        
    }

};
// this is your innerText change in html code
