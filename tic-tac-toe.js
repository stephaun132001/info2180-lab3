document.addEventListener("DOMContentLoaded", function(){
    let squares = document.querySelectorAll('#board div')
    playerTurn =0;
    var i;
    for (let i = 0; i < squares.length; i++){
        squares[i].setAttribute('class', 'square');
        
}
boardstatus = new Array();
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
            const currentClass = circleTurn ? O_class: X_class
            this.innerHTML = currentClass;
            circleTurn = !circleTurn;
            boardstatus = [currentClass];
            winner();
			this.classList.add("square","X");
            }
        })
            
        }
        function winner(){
            if(squares[0].innerHTML !== "" && squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML ){
                var jackpot = boardstatus[0];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[3].innerHTML && squares[0].innerHTML === squares[6].innerHTML ){
                var jackpot = boardstatus[0];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[4].innerHTML && squares[0].innerHTML === squares[8].innerHTML ){
                var jackpot = boardstatus[0];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[3].innerHTML !== "" && squares[3].innerHTML === squares[4].innerHTML && squares[3].innerHTML === squares[5].innerHTML ){
                var jackpot = boardstatus[3];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[6].innerHTML !== "" && squares[6].innerHTML === squares[7].innerHTML && squares[6].innerHTML === squares[8].innerHTML ){
                var jackpot = boardstatus[6];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[1].innerHTML !== "" && squares[1].innerHTML === squares[4].innerHTML && squares[1].innerHTML === squares[7].innerHTML ){
                var jackpot = boardstatus[1];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[2].innerHTML !== "" && squares[2].innerHTML === squares[5].innerHTML && squares[2].innerHTML === squares[8].innerHTML ){
                var jackpot = boardstatus[2];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }else if (squares[2].innerHTML !== "" && squares[2].innerHTML === squares[4].innerHTML && squares[2].innerHTML === squares[6].innerHTML ){
                var jackpot = boardstatus[2];
                document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
                document.getElementById("status").className=("you-won");
            }
        }
        var restartbtn = document.querySelector("button");
	    restartbtn.addEventListener("click",function(){
		window.location.reload();		
	})
})








