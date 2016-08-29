const Tile = function() {
  this.owner = null;
  this.up = null;
  this.right = null;
  this.down = null;
  this.left = null;
};

Tile.prototype.neighbors = function () {
  return [this.up, this.right, this.down, this.left]
    .filter(tile => tile !== null);
};

Tile.prototype.friends = function () {
  return this.neighbors().filter(t => t.owner === this.owner);
};

Tile.prototype.enemies = function () {
  return this.neighbors()
    .filter(t => t.owner !== this.owner && t.owner !== null);
};

Tile.prototype.validMove = function (color) {
  return this.owner === null; // && this.neighbors().some(t => {
    // return t.owner === null || t.owner === color;
  //});
};

Tile.prototype.makeMove = function (color) {
  if (this.validMove(color)) {
    this.owner = color;

    this.enemies().forEach(tile => {
      let tiles = new Set();
      if (!tile.update(tiles)) {
        tiles.forEach(t => { t.owner = null; } );
      }
    });
    let tiles = new Set();
    if (!this.update(tiles)) {
      tiles.forEach(t => { t.owner = null; } );
    }
    return true;
  }
  else {
    return false;
  }
};

Tile.prototype.update = function (visited) {
  // debugger;
  visited.add(this);
  if (this.neighbors().some(t => t.owner === null)) {
    return true;
  }
  else {
    return this.friends().some(t => {
      if (!visited.has(t)) {
        return t.update(visited);
      }
      else {
        return false;
      }
    });
  }
};

module.exports = Tile;
