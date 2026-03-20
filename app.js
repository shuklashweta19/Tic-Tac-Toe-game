let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetGame");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turn0){
            box.innerText="O";
            turn0=false;
        } else{
         box.innerText ="X";
         turn0=true;
        }
        box.disabled=true;

       checkWinner()
    });


});

const resetGame = () =>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}



const disableboxes = () => {
    for(let box of boxes)
        box.disabled=true;
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";}
}

const showWinner = (winner) => {
   msg.innerText=`congratulations, The Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableboxes();
}

const checkWinner = () => {
    for (let pattern of winpattern){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;


    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
               
                showWinner(pos1val);
            }
         }

}
};

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


