function tictactoe() {
  this.playerOne = true;
  this.init();
  this.visited = {
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false, 
    '6': false,
    '7': false, 
    '8': false, 
    '9': false
  }
}

tictactoe.prototype.init = function(){
  var _this = this;
  var grid = '';
  for(var i = 1; i <= 9; i++) {
    grid += `<div class="square" data-id=${i}>${i}</div>`;
  }
  document.getElementById('grid').innerHTML = grid;
  var squares = document.querySelectorAll('.square');
  console.log('square' , squares)
  squares.forEach(function(square) {
    square.addEventListener('click', () => _this.squareClicked(square));
  })

}

tictactoe.prototype.squareClicked = function(context) {
  console.log('22', context.dataset.id)
  var boxClicked = context.dataset.id;
  if(!this.visited[boxClicked]) {
    this.visited[boxClicked] = true;
    this.markBox(context);
    this.playerOne = !this.playerOne;
  } else {
    console.log('already taken')
  }
}

tictactoe.prototype.markBox = function(context) {
  console.log(context)
  if(this.playerOne) {
    context.style.backgroundColor = "yellow"
  } else {
    context.style.backgroundColor = "green"
  }
}

var newGame = new tictactoe();
