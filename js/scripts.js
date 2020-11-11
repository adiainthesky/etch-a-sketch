function createGrid() {
  for (let rows = 0; rows < 256; rows++) {
    $("#grid").append("<div class='square'></div>");
  };
};

$(document).ready(function(){
  createGrid();
  $('.square').hover(function(){
      $(this).addClass('hover');
  })
});

// another option start:
// function createGrid() {
//   const div = document.createElement("div");
//   div.className = "square"
//   div.innerHTML = "value"
// }

// Marni's
// function createGrid() {
//   let grid = document.getElementById("grid");
//   for (row=0; row < 16; row++) {
//     let square = document.createElement("div");
//     square.classList.add("square");
//     grid.appendChild(square); 
//   }
// }

