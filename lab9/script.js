var keyController = {
    LEFT: 37,
    UP:38,
    RIGHT: 39,
    DOWN: 40,
};

function BoardController(width, height, squareWidth){
    this._width = width;
    this._height = height;
    this._squareWidth = squareWidth;
    this._canvasWidth = width * squareWidth;
    this._canvasHeight = height * squareWidth;
    this._matrix = this.createBoard();
}

BoardController.prototype.createBoard = function () {
    const matrix = [];
    let height = this._height;
    while (height--){
        matrix.push(new Array(this._width).fill(0));
    }
    return matrix;
};

TetrisController.COLORS =  [null, 'red', 'blue', 'violet','green','purple','orange', 'black','pink'];

function TetrisController(element, boardController, dropInterval, player) {
    this._element = element;
    this._board = boardController;
    this._canvas = null;
    this._context = null;
    this._lastTime = 0;
    this.player = player;
    this._dropCounter = 0;
    this._dropInterval = dropInterval;
    this._init();
}

TetrisController.prototype._init = function () {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width',this._board._canvasWidth);
    canvas.setAttribute('height',this._board._canvasHeight);
    this._element.appendChild(canvas);
    this.playerReset();
    this._canvas = canvas;
    this._context = canvas.getContext('2d');
};

TetrisController.prototype.startGame = function () {
    this.updateScore();
    this._update();
};

TetrisController.prototype._update = function (time = 0) {
        var self = this;
        let deltaTime = time - self._lastTime;
        self._lastTime = time;
        self._dropCounter += deltaTime;
        if (this._dropCounter > this._dropInterval){
            self.playerDrop();
        }
        self.draw();
        requestAnimationFrame(function(time){self._update(time)});

};
TetrisController.prototype.draw = function () {
    this._context.fillStyle = '#c8ebfc';
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    this.drawMatrix.call(this, this._board._matrix, {x: 0, y: 0});
    this.drawMatrix.call(this, this.player.figure, this.player.position);
};

TetrisController.prototype.drawMatrix = function (matrix, offset) {
    var self = this;
        matrix.forEach(function (row, y) {
            row.forEach(function (value, x) {
                if (value !== 0){
                    self._context.beginPath();
                    self._context.fillStyle = TetrisController.COLORS[value];
                    self._context.rect((x + offset.x)* self._board._squareWidth, (y + offset.y) * self._board._squareWidth  , self._board._squareWidth, self._board._squareWidth);
                    self._context.fill();
                    self._context.stroke();
                }
            });
        });
};
TetrisController.prototype.playerReset = function () {
    const pieces = 'ILJOTSZR';
    this.player.figure = this.player.createPiece(pieces[pieces.length * Math.random() | 0]);
    this.player.position.y = 0;
    this.player.position.x = (this._board._matrix[0].length / 2 | 0) - (this.player.figure[0].length / 2 | 0);
    if(this.collide(this._board._matrix, this.player)){
        this._board._matrix.forEach(function (row) {
            row.fill(0);
        });
        this.player.score = 0;
    }
};
TetrisController.prototype.collide = function (arena, player) {
    const [m, o] = [player.figure, player.position];
    for(let y = 0; y < m.length; y++){
        for(let x = 0; x < m[y].length; x++){
            if(m[y][x] !==0 &&
                (arena[y + o.y] &&
                    arena[y + o.y][x + o.x]) !== 0){
                return true;
            }
        }
    }
    return false;
};
TetrisController.prototype.playerDrop = function () {
    this.player.position.y++;
    if(this.collide(this._board._matrix, this.player)){
        this.player.position.y--;
        this.merge(this._board._matrix, this.player);
        this.playerReset();
        this.arenaSweep();
        this.updateScore();
    }
    this._dropCounter = 0;
};
TetrisController.prototype.merge = function (arena, player) {
    player.figure.forEach(function (row, y) {
        row.forEach(function (value, x) {
            if(value !== 0){
                arena[y + player.position.y][x + player.position.x] = value;
            }
        });
    });
};
TetrisController.prototype.playerMove = function(dir) {
    this.player.position.x += dir;
    if(this.collide(this._board._matrix, this.player)){
        this.player.position.x -= dir
    }
};
TetrisController.prototype.playerRotate = function () {
    let pos = this.player.position.x;
    let offset = 1;
    this._rotate(this.player.figure, 1);
    while (this.collide(this._board._matrix, this.player)) {
        this.player.position.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > this.player.figure[0].length) {
            this._rotate(this.player.figure, -1);
            this.player.position.x = pos;
            return;
        }
    }
};

TetrisController.prototype._rotate = function (matrix, dir) {
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < y; x++){
            [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
    }
    if(dir > 0){
        matrix.forEach(function (row) {
            row.reverse();
        });
    } else {
        matrix.reverse();
    }
};
TetrisController.prototype.arenaSweep = function () {
    let rowCounter = 1;
    outer: for(let y = this._board._matrix.length - 1; y >= 0; y--){
        for(let x = 0; x < this._board._matrix[y].length; x++){
            if(this._board._matrix[y][x] === 0 ){
                continue outer;
            }
        }
        const row = this._board._matrix.splice(y, 1)[0].fill(0);
        this._board._matrix.unshift(row);
        y++;
        this.player.score += rowCounter * 10;
        rowCounter *= 2;
    }
};
TetrisController.prototype.updateScore = function () {
    document.getElementById('score').innerHTML = this.player.score;
};
function Player (vector2, figure, score) {
    this.position = vector2;
    this.figure = figure;
    this.score = score;

}
Player.prototype.createPiece = function (type) {
        if (type === 'T'){
            return [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]
            ];
        } else if (type === 'O'){
            return [
                [2, 2],
                [2, 2],
            ];
        } else if (type === 'L'){
            return [
                [0, 3, 0],
                [0, 3, 0],
                [0, 3, 3]
            ];
        } else if (type === 'J'){
            return [
                [0, 4, 0],
                [0, 4, 0],
                [4, 4, 0]
            ];
        } else if (type === 'I'){
            return [
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
            ];
        } else if (type === 'S'){
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0]
            ];
        } else if (type === 'Z'){
            return [
                [7, 7, 0],
                [0, 7, 7],
                [0, 0, 0]
            ];
        }
        else if (type === 'R'){
            return [
                [0, 0, 8, 0],
                [0, 0, 8, 0],
                [0, 0, 8, 0],
                [0, 0, 8, 0],
                [0, 0, 8, 0]
            ];
        }
};
function Vector2 (x, y) {
    this.x = 0;
    this.y = 0;
}

var tet = new TetrisController(document.body, new BoardController(12,20,20),1000,new Player(new Vector2(0, 0), null, 0));
tet.startGame();
document.addEventListener('keydown',function (event) {
    if(event.keyCode===keyController.LEFT){
        tet.playerMove(-1);
    } else if (event.keyCode === keyController.RIGHT){
        tet.playerMove(1);
    } else if (event.keyCode === keyController.DOWN){
        tet.playerDrop();
    } else if (event.keyCode === keyController.UP){
        tet.playerRotate();
    }
});
