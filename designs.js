// Input selection from DOM
const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
    
function makeGrid() {
    // Creates rows and cells
    canvas.innerHTML = '';
    for (let i = 0; i < height.value; i++) {
        let tRow = document.createElement('tr');
        canvas.appendChild(tRow);
        for (let j = 0; j <width.value; j++) {
            let tCol = document.createElement('td');
            tRow.appendChild(tCol);            
        }  
    }
    // Fills in cell with selected color
    canvas.addEventListener("click", function (event) {
       event.preventDefault();
       event.target.style.background = color.value;
    })
}

// Removes color from cell upon double-click
canvas.addEventListener('dblclick', function(e) {
  e.target.style.background = null;
});

//Once user submit call makeGrid()
size.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();  
})
