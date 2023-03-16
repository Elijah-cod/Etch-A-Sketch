const container = document.querySelector('#container');
// Created the squares by rows
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = '37.5px'; // got the height and width by dividing them by the stated height and width
        square.style.height = '31.25px';
        square.style.float = 'left';
        container.appendChild(square);
    }
}

const black = document.getElementById("black");
black.addEventListener("click", ()=>{
    //get the grids
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.addEventListener('mouseenter', function() {
          this.style.backgroundColor = 'black';
        })
    })

});

// const squares = document.querySelectorAll(".square");
// squares.addEventListener('click', ()=>{
//     this.style.backgroundColor = '';
// })

const erase =document.getElementById("erase");
erase.addEventListener("click", ()=>{
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.addEventListener('mouseenter', function() {
          this.style.backgroundColor = '';
        })
    })
});

const clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.style.backgroundColor ="";
    })
});

// const compButton = document.getElementById("computerSelection");
// compButton.addEventListener("click", ()=>{
//     computerSelection = list [Math.floor(Math.random()*3)];
//     const results = document.querySelector(".results");
//     if (computerSelection !==""){
//         results.innerHTML=`Computer selection: ${computerSelection}`;//Add a div for displaying results
//     }
// });