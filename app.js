let userScore=0;
let systemScore=0;
let choices=document.querySelectorAll(".choice") ;
let msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const systemScorePara=document.querySelector("#system-score")

const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomInd=Math.floor(Math.random()*3)
    return options[randomInd];
}

const drawGame=()=>{
    //console.log("Draw Game....")
    msg.innerHTML="Game Draw... Play again!"
    msg.style.backgroundColor="red"
    msg.style.color="#fff"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        //console.log("you are Win")
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerHTML=`you Win! Your ${userChoice} beats ${compChoice}`
       msg.style.backgroundColor="green"
       msg.style.color="#fff"
    
    }
    else{
       // console.log("you are lose")
       systemScore++;
       systemScorePara.innerHTML=systemScore;
        msg.innerHTML=`you lose System ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="yellow"
        msg.style.color="red"
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Game generator choice
    const compChoice=genCompchoice();
    console.log("Comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }
        else{
            userWin= compChoice === "rock" ? false:true;
        }
       showWinner(userWin,userChoice,compChoice); 
    }
}

choices.forEach((choice)=>{
    //console.log(choice);//print all choice class
    choice.addEventListener('click',()=>{
       const userChoice=choice.getAttribute("id");
       //console.log(userChoice);
        playGame(userChoice);
    })
})