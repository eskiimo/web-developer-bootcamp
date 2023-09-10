var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedcolor = PickColor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.getElementById("reset");

var modebuttons = document.querySelectorAll(".mode");
numSquares= 6;

for(var i = 0; i<modebuttons.length; i++){
    modebuttons[i].addEventListener("click", function(){
        modebuttons[0].classList.remove("selectedButton");
        modebuttons[1].classList.remove("selectedButton");
        this.classList.add("selectedButton");
        
        this.textContent ==="EASY" ? numSquares = 3 :numSquares = 6;
        // if(this.textContent === "EASY" ){
        //     numSquares= 3;
        // }else{
        //     numSquares= 6;
        // }
        reset();

    })
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedcolor = PickColor();
    colordisplay.textContent = pickedcolor;
    resetbutton.textContent="New Colors";
    messagedisplay.textContent = "";
    for ( var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            ///////////// add colors to squares
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue" ;
}

// easybtn.addEventListener("click" , function(){
//     numSquares = 3 ;
//     colors = generateRandomColors(numSquares);
//     pickedcolor = PickColor();
//     colordisplay.textContent= pickedcolor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor=colors[i];
//         }else{
//             squares[i].style.display="none";
//         }
//     }

//     easybtn.classList.add("selectedButton");
//     hardbtn.classList.remove("selectedButton")
// })

// hardbtn.addEventListener("click" , function(){
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedcolor = PickColor();
//     colordisplay.textContent= pickedcolor;
//     for(var i=0;i<squares.length;i++){
//         squares[i].style.backgroundColor=colors[i];
    
//         squares[i].style.display="block";
//     }
//     hardbtn.classList.add("selectedButton");
//     easybtn.classList.remove("selectedButton")
// })

resetbutton.addEventListener("click" , function(){
    h1.style.backgroundColor = "steelblue" ;
    messagedisplay.textContent = "";
    this.textContent="New Colors";
    colors = generateRandomColors(numSquares);
    pickedcolor = PickColor();
    colordisplay.textContent = pickedcolor;
    for ( var i = 0 ; i < squares.length ; i++){
        ///////////// add colors to squares
        squares[i].style.backgroundColor = colors[i];
    }

    
})
colordisplay.textContent = pickedcolor;

for ( var i = 0 ; i < squares.length ; i++){
    ///////////// add colors to squares
    squares[i].style.backgroundColor = colors[i];
    ///////////// add click listener to the squares
    squares[i].addEventListener("click" , function(){
        // grab the clicked color
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === pickedcolor){
            resetbutton.textContent = "Play Again";
            messagedisplay.textContent = " CORRECT!!";
            changeColors(clickedcolor);
            h1.style.backgroundColor = clickedcolor;

        }else{
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "try Again!!";
        }
    });
}

function changeColors(color){
    for ( var i = 0 ; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function PickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for( var i=0; i<num ;i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r = Math.floor( Math.random() * 256 )
    var g = Math.floor( Math.random() * 256 )
    var b = Math.floor( Math.random() * 256 )
    return "rgb(" + r +", " + g + ", " + b + ")";
}