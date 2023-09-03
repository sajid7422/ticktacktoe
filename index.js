let boxes =document.querySelectorAll('.box')
let Arraybox =Array.from(boxes)
let resetbtn =document.getElementById("reset")
let showPlayerTurn =document.getElementById("turn");
let gamecard = document.getElementById("hidecard");
let wonshow = document.getElementById("won");


let TURN ="X"

Arraybox.map((box,index)=>{
    box.addEventListener("click",()=>{
        box.innerHTML =TURN
        TURN =="X" ? TURN ="O" :TURN = "X"
        showPlayerTurn.innerHTML=`Player (${TURN})`
     setTimeout(()=>{ Winis()},300)
      

    })
})

resetbtn.addEventListener("click",()=>{
     location.reload()
})

function Winis(){
    if(Arraybox[0].innerHTML ==="X" && Arraybox[1].innerHTML ==="X" && Arraybox[2].innerHTML ==="X" ){
        gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);
    }
    if(Arraybox[3].innerHTML=="X" && Arraybox[4].innerHTML =="X" && Arraybox[5].innerHTML =="X" || Arraybox[3].innerHTML=="O" && Arraybox[4].innerHTML=="O" && Arraybox[5].innerHTML=="O"){
           gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);
    }
    if(Arraybox[6].innerHTML=="X" && Arraybox[7].innerHTML =="X" && Arraybox[8].innerHTML =="X" || Arraybox[6].innerHTML=="O" && Arraybox[7].innerHTML=="O" && Arraybox[8].innerHTML=="O"){
           gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);
    }
    if(Arraybox[0].innerHTML=="X" && Arraybox[3].innerHTML =="X" && Arraybox[6].innerHTML =="X" || Arraybox[0].innerHTML=="O" && Arraybox[3].innerHTML=="O" && Arraybox[6].innerHTML=="O"){
           gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);
    }
    if(Arraybox[1].innerHTML=="X" && Arraybox[4].innerHTML =="X" && Arraybox[7].innerHTML =="X" || Arraybox[1].innerHTML=="O" && Arraybox[4].innerHTML=="O" && Arraybox[7].innerHTML=="O"){
           gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);
    }
    if(Arraybox[2].innerHTML=="X" && Arraybox[5].innerHTML =="X" && Arraybox[8].innerHTML =="X" || Arraybox[2].innerHTML=="O" && Arraybox[5].innerHTML=="O" && Arraybox[8].innerHTML=="O"){
           gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);
    }
    if(Arraybox[0].innerHTML=="X" && Arraybox[4].innerHTML =="X" && Arraybox[8].innerHTML =="X" || Arraybox[0].innerHTML=="O" && Arraybox[4].innerHTML=="O" && Arraybox[8].innerHTML=="O"){
           gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);
    }
    if(Arraybox[2].innerHTML=="X" && Arraybox[4].innerHTML =="X" && Arraybox[6].innerHTML =="X" || Arraybox[2].innerHTML=="O" && Arraybox[4].innerHTML=="O" && Arraybox[6].innerHTML=="O"){
        gamecard.style ="display :none"
        wonshow.style="display block"
        wonshow.innerHTML =(`${TURN =="X" ? "O wins" :"X wins"} `);    }
   
}





