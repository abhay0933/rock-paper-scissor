let buttons = document.querySelectorAll('button');

let userscore= document.getElementById("user");
let compscore= document.getElementById("comp")

let userpoints=0;
let comppoints=0;

let winner= document.getElementById('result');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
       
         let result= mathbuttons(button.id, randombutton());
         winner.innerText= result;
    })
})

function randombutton(){
    let arr =['rock', 'paper', 'scissor'];
    let randomvalue= Math.floor(Math.random()* arr.length);
    return arr[randomvalue];
}

function mathbuttons(userbtn, compbtn){
    if(userbtn== compbtn){
        return "It's a tie! 👍";
    }else if(userbtn =='rock' && compbtn=='scissor' || userbtn == 'paper'&& compbtn== 'rock' || userbtn == 'scissor'&& compbtn=='paper'){
        userpoints++;
        userscore.innerText= userpoints;
        return "You win! 😀"
    }else{
           comppoints++;
           compscore.innerText= comppoints;
           return "You lose! 😞";
    }
}