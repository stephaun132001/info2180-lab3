
document.addEventListener("DOMContentLoaded", function(){
var divs = document.getElementById("board");
for (var i=0; i<9; i++){
    divs.getElementsByTagName('div')[i].classList.add("square");
    
}

const squares = (Array.from(document.querySelectorAll('#board div')));

const X_class = 'X';
const O_class = 'O';

const gridCells = document.querySelectorAll('[squares]');

squares.forEach(gridCells =>{
    gridCells.addEventListener('mouseover', handlemouseover)
})
    squares.forEach(gridCells =>{
        gridCells.addEventListener('mouseout', handlemouseout)

})

squares.forEach(gridCells =>{
    gridCells.addEventListener('click', handleClick,{once: true})
})
let circleTurn 
 function handleClick(e){
     const gridCells = e.target
     const currentClass = circleTurn ? O_class: X_class
     
     placeMark(gridCells, currentClass)
     
     
     swapTurns()
 }

 function placeMark(gridCells, currentClass){
     gridCells.innerHTML = currentClass
     
     
}
function swapTurns(){
    circleTurn = !circleTurn
}
function handlemouseover(e){
    const gridCells = e.target
    gridCells.classList.add("hover");
}

function handlemouseout(e){
    const gridCells = e.target
    this.setAttribute("class", "square");
}
function checkwin(){
    
}
})














 