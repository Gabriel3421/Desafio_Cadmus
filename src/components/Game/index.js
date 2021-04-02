import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import game from '../../assets/game.svg';
import "./styles.scss";

export function Game() {
  const { roms } = useContext(AppContext);
  return (
    <main className="game-container">
      <header>
        <img src={game} alt="" />
        <span>JOGO RÁPIDO</span>
      </header>
      <section>

      </section>

    </main>
  );
}
