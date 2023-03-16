const container = document.querySelector('#container');
// Created the squares by rows and columns
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
// Created a counteractive mechanism to ensure that once the mouse leaves the container the previous colors stop regenerating
let active = true;

container.addEventListener("mouseleave", ()=>active=false);

//creates a black background color once you hover over the pixels
const black = document.getElementById("black");
black.addEventListener("click", ()=>{
    //get the grids
    active = true;
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.addEventListener('mouseenter', function(){
            if (active) {
                this.style.backgroundColor = 'black';
            }
        })
            
    })

});


//erases the background color of the pixels once you hover over them

const erase =document.getElementById("erase");
erase.addEventListener("click", ()=>{
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.addEventListener('mouseenter', function() {
          this.style.backgroundColor = '';
        })
    })
});


//clears all the background colors

const clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    active = false
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.style.backgroundColor ="";
    })
});

// in the code below we generated random numbers for when the mouse hovers over the pixels

const rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", ()=>{
    active =true;
    function getRandomNumber() {
        return Math.floor(Math.random() * 251);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square) {
        square.addEventListener('mouseenter', function() {
            if (active){
                this.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
            }
        })
    })
    
});
