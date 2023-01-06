import React, { Component } from "react";
import "../../index.css";
import { observer, Provider } from "mobx-react";
import Board from "../Board";
import Store from "./store";

@observer
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.store = new Store(props);
  }

  _renderLista = () => {
    const { jumpTo, state } = this.store;
    const history = state.history;

    return history.map((step, move) => {
      const desc = move ? "Retornar para #" + move : "Ir para o início do jogo";
      return (
        <li key={move}>
          <button className="btn" onClick={() => jumpTo(move)}> {desc} </button>
        </li>
      );
    });
  };

  _renderStatus = () => {
    const { calculateWinner, state, current } = this.store;

    const winner = calculateWinner(current.squares);

    return winner
      ? "Vencedor: " + winner
      : "Próximo jogador: " + (state.xIsNext ? "X" : "O");
  };

  render() {
    const { teste, current } = this.store;

    return (
      <Provider gameStore={this.store}>
        <div className="game">
          <div className="game-board">
            <Board onClick={(i) => teste(i)} />
          </div>
          <div className="game-info">
            <div>{this._renderStatus()}</div>
            <ol>{this._renderLista()}</ol>
          </div>
        </div>
      </Provider>
    );
  }
}
