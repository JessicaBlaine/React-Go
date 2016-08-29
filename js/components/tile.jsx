const React = require('react');

const Tile = React.createClass({

  render() {
    const tile = this.props.tile;
    if (tile && !this.props.visited.has(tile)) {
      this.props.visited.add(tile);
      const style = {
                     left: `${this.props.xPos * 3 - 1.45}rem`,
                     bottom: `${this.props.yPos * 3 - 1.45}rem`
                   };
      return <div>
        <div
          onClick={this.props.handleClick.bind(null, tile)}
          className={`${tile.owner} tile`}
          style={style}>
        </div>

        <Tile
          tile={tile.up}
          visited={this.props.visited}
          xPos={this.props.xPos}
          yPos={this.props.yPos + 1}
          handleClick={this.props.handleClick}/>

        <Tile
          tile={tile.right}
          visited={this.props.visited}
          xPos={this.props.xPos + 1}
          yPos={this.props.yPos}
          handleClick={this.props.handleClick}/>
      </div>;
    }
    else {
      return null;
    }

  }
});

module.exports = Tile;
