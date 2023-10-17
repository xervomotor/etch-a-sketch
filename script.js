
const DEFAULT_SIZE = 20;
const DEFAULT_MODE = 'pen';

const grid = document.querySelector('.grid');
const penBtn = document.querySelector('#pen');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');
const screenshotBtn = document.querySelector('#screenshot');

let currentMode = DEFAULT_MODE;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

penBtn.addEventListener('click', () => setCurrentMode('pen'));
eraserBtn.addEventListener('click', () => setCurrentMode('eraser'));
clearBtn.addEventListener('click', resetGrid);
clearBtn.disabled = true;
// screenshotBtn.addEventListener('click', captureGrid);

function setCurrentMode(mode) {
    currentMode = mode;
}

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
    else if (currentMode === 'pen') {
        e.target.style.backgroundColor = 'black';
        clearBtn.disabled = false;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'transparent';
        clearBtn.disabled = false;
    }
}

function resetGrid() {
    grid.innerHTML = '';
    setupGrid(DEFAULT_SIZE);
    currentMode = DEFAULT_MODE;
    clearBtn.disabled = true;
}

function captureGrid() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });
}


setupGrid(DEFAULT_SIZE);