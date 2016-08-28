const Tile = require('./tile.js');

const Go = function() {
  this.bottomLeft = this.generateBoard(13);
};

Go.prototype.generateBoard = function (size) {
  let lastRow = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (var j = 0; j < size; j++) {
      let tile = new Tile();
      if (row[row.length - 1]) {
        let t2 = row[row.length - 1];
        tile.left = t2;
        t2.right = tile;
      }
      if (lastRow[j]) {
        let t2 = lastRow[j];
        tile.up = t2;
        t2.down = tile;
      }
      row.push(tile);
    }
    lastRow = row;
  }
  return lastRow[0];
};

module.exports = Go;
