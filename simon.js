let level =0;
let color =["btn-1","btn-2","btn-3","btn-4"];
let body = document.querySelector("body");
let started = false;
let gameSq=[];
let userSeq=[];

let h2=document.querySelector("h2");
body.addEventListener("keypress",function(){
    // let h2=document.querySelector("h2");
    if(started==false){
        started =true;
    console.log("yes");
    levelUp();}


});
function lightUp(btn){
    btn.classList.add("lightUp");
    setTimeout(() => {
        btn.classList.remove("lightUp");
    }, 250 );
}
function levelUp(){
    userSeq=[];
    level++;
 h2.innerText=`level ${level}`; 
 let randomColors = Math.floor(Math.random()*3);
 let randombox = color[randomColors];
 
 let randombtn= document.querySelector(`.${randombox}`);  //class ko convert kro variable
 gameSq.push(randombox);
 lightUp(randombtn);
 
 }
function checkUp(idx){
    
    if(userSeq[idx]===gameSq[idx]){
        if(userSeq.length == gameSq.length){
        setTimeout(levelUp,1000);}
        
    }
    else{
        h2.innerText=`game over`;
        reset();
    }
}
function btnpress(){
    let by = this;
    lightUp(by);
    let userColor = by.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkUp(userSeq.length-1);
}

 let btn1=document.querySelector(".btn-1");
 let btn2=document.querySelector(".btn-2");
 let btn3=document.querySelector(".btn-3");
 let btn4=document.querySelector(".btn-4");
 btn1.addEventListener("click",btnpress);
 btn2.addEventListener("click",btnpress);
 btn3.addEventListener("click",btnpress);
 btn4.addEventListener("click",btnpress);
 function reset(){
    started =false;
    gameSq=[];
    userSeq=[];
    level =0;
    
 }





