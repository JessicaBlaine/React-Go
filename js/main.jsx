const React = require("react");
const ReactDOM = require("react-dom");

const Board = require("./components/board");

const Go = window.Go = require('./components/game/go');

const App = React.createClass({

  render() {
    return <div>
      <Board/>
    </div>;
  }
});

module.exports = App;

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<App/>, rootEl);
});
