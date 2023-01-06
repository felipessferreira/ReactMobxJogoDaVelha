import React from "react";
import "../../index.css";
import Square from "../Square";
import { inject, observer } from "mobx-react";

@inject("gameStore")
@observer
class Board extends React.Component {
  renderSquare(i) {
    const { current } = this.props.gameStore;

    return (
      <Square
        value={current.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
