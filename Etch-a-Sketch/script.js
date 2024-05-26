// function createDiv(){
//     const div = document.createElement('div');
//     div.classList.add('square');
//     const container = document.querySelector('.container');
//     container.appendChild(div);
// }

function createGrid(size) {
    const container = document.getElementById("container");

    container.innerHtml = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener("mousemove", function (event) {
            event.target.style.backgroundColor = "black";
        });

       
    }

}
createGrid(100);

const reset = document.querySelector('#resetButton');
reset.addEventListener("click", function (event) {
    const square = document.querySelectorAll('.square');
    square.forEach(square => {
        square.style.backgroundColor = "white";

    });


});



