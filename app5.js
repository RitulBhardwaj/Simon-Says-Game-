let game_seq=[];
let user_seq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started==false){
    console.log("game started");
    started=true; 
   }
   levelup();
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    user_seq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // random btn choose
    let randomindex=Math.floor(Math.random()*3);
    let randomcolor=btns[randomindex];
    let randombtn=document.querySelector(`.${randomcolor}`);
    // console.log(randomindex);
    // console.log(randomcolor);
    // console.log(randombtn);

    game_seq.push(randomcolor);
    console.log(game_seq);
    gameflash(randombtn);
    

} 


function checkAns(idx){
   
    if(user_seq[idx]===game_seq[idx]){
        if(user_seq.length==game_seq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! your score was <b> ${level} </b> <br>Press any key to start.`
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
    }
}


function btnpress(){
    
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    user_seq.push(usercolor);

    checkAns(user_seq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;

    game_seq=[];
    user_seq=[];
    level=0;
}