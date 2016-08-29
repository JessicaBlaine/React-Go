const React = require('react');

const Tile = require('./tile');

const Go = require('./game/go');

const Board = React.createClass({
  getInitialState: function() {
    return {
      goGame: new Go(),
      currentPlayer: "black"
    };
  },
  handleClick(tile, event) {
    const player = this.state.currentPlayer;
    if (tile.makeMove(player)) {
      this.setState({currentPlayer: player === "white" ? "black" : "white"});
    }
  },
  render() {
    const visited = new Set();
    return <div className={"board " + this.state.currentPlayer}>
      <Tile
        handleClick={this.handleClick}
        tile={this.state.goGame.bottomLeft}
        visited={visited}
        xPos={0}
        yPos={0}/>
    </div>;
  }
});

module.exports = Board;
