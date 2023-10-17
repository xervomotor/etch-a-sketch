const DEFAULT_SIZE = 20;


const grid = document.querySelector('.grid');

//redefine mouse down
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);

        gridElement.addEventListener('mouseover', draw);
        gridElement.addEventListener('mousedown', draw);
      }
}


function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    else {
        e.target.style.backgroundColor = 'black';
    }
}

function clearGrid() {
    grid.innerHTML = '';
}




setupGrid(DEFAULT_SIZE);