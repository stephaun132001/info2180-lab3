document.addEventListener("DOMContentLoaded", function(){
    let squares = document.querySelectorAll('#board div')
    var i;
    for (let i = 0; i < squares.length; i++){
        squares[i].setAttribute('class', 'square');
        
}
boardstatus = new Array(0);
const X_class = 'X';
const O_class = 'O';
let circleTurn;
for (var x = 0; x < squares.length; x++){
    squares[x].addEventListener("mouseover", function (){
        this.classList.add("hover");
    });
        
    squares[x].addEventListener("mouseout", function (){
        this.classList.remove("hover");
    });	
    squares[x].addEventListener ('click', function(){
        if (this.innerHTML !== "X" && this.innerHTML !== "O"){
            let currentPlayer = circleTurn ? O_class: X_class
            this.innerHTML = currentPlayer;
            circleTurn = !circleTurn;
            this.classList.add("square","X");
            boardstatus.push (currentPlayer);
            winner();
            
            console.log(boardstatus);
            
            
            }
        })
            
        } 
        function winner(){
            if(squares[0].innerHTML === "X" && squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML ||
            squares[0].innerHTML === "O" && squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML ){
                var jackpot = squares[0].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[0].innerHTML === "X" && squares[0].innerHTML === squares[3].innerHTML && squares[0].innerHTML === squares[6].innerHTML ||
            squares[0].innerHTML === "O" && squares[0].innerHTML === squares[3].innerHTML && squares[0].innerHTML === squares[6].innerHTML ){
                var jackpot = squares[0].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[0].innerHTML === 'X' && squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML ||
            squares[0].innerHTML !== "O" && squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML){
                var jackpot = squares[0].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[3].innerHTML === "X" && squares[3].innerHTML === squares[4].innerHTML && squares[3].innerHTML === squares[5].innerHTML ||
            squares[3].innerHTML === "O" && squares[3].innerHTML === squares[4].innerHTML && squares[3].innerHTML === squares[5].innerHTML ){
                var jackpot = squares[3].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[6].innerHTML === "X" && squares[6].innerHTML === squares[7].innerHTML && squares[6].innerHTML === squares[8].innerHTML ||
            squares[6].innerHTML === "O" && squares[6].innerHTML === squares[7].innerHTML && squares[6].innerHTML === squares[8].innerHTML ){
                var jackpot = squares[6].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[1].innerHTML === "X" && squares[1].innerHTML === squares[4].innerHTML && squares[1].innerHTML === squares[7].innerHTML ||
            squares[1].innerHTML === "O" && squares[1].innerHTML === squares[4].innerHTML && squares[1].innerHTML === squares[7].innerHTML){
                var jackpot = squares[1].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[2].innerHTML === "X" && squares[2].innerHTML === squares[5].innerHTML && squares[2].innerHTML === squares[8].innerHTML ||
            squares[2].innerHTML === "O" && squares[2].innerHTML === squares[5].innerHTML && squares[2].innerHTML === squares[8].innerHTML ){
                var jackpot = squares[2].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[2].innerHTML === "X" && squares[4].innerHTML === 'X' && squares[6].innerHTML === 'X'  ||
            squares[2].innerHTML === "O" && squares[4].innerHTML === 'O' && squares[6].innerHTML === "O"  ){
                var jackpot = squares[2].innerHTML;
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }
        }
        var restartbtn = document.querySelector("button");
	    restartbtn.addEventListener("click",function(){
		window.location.reload();		
	})
})








