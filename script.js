const boxs = document.querySelectorAll(".box");
const img = document.querySelector(".img");

console.log(boxs)
console.log(img)


img.addEventListener("dragstart", dragStart)
img.addEventListener("dragend", dragEnd)

function dragStart(){
    console.log("drag start")
}

function dragEnd(){
    console.log("drag end")
}
function dragEnter(e){
    e.preventDefault();
   this.classList.add("hold")
    console.log("drag enter")
}

function dragLeave(){
  this.classList.remove("hold")
    console.log("drag leave")
}


function dragOver(e){
    e.preventDefault();
    console.log("dragOver")
}


function drop(){
    this.classList.remove("hold")
   this.appendChild(img)
    console.log("drop")
}

for( let box of boxs){
  box.addEventListener("dragenter",dragEnter)
  box  .addEventListener("dragover",dragOver)
 box .addEventListener("dragleave",dragLeave)
    box.addEventListener("drop",drop)
}