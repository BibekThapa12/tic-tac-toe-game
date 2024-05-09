let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let count=0;



let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    let turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="O";
           box.style.color="blue";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turn0=true;
            
        }
        box.disabled=true;
        count++;
        if(count===9){
           msgContainer.classList.remove("hide");
           msg.innerText="Try Again";
        }
        checkWinner();
    })
    
});
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
        }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";   
        }      
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations!, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val!="" ){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                    
                    showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame); 