import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Header } from '../../components/Header';
import { Lobby } from '../../components/Lobby';
import { Ranked } from '../../components/Ranked';
import { Game } from '../../components/Game';
import logo from '../../assets/logo.svg';
import "./styles.scss";

export function Home() {
  const { loading, online, bans } = useContext(AppContext);

  return (
    <main className="home-container">
      {
        loading && (
          <section className="home-container__loading">
            <h1>Carregando...</h1>
          </section>
        )
      }
      {/* por como background e tentar baixar como png pra ver se melhora a qualidade*/}
      <img src={logo} alt="Cadmus Game Front" className="home-container__logo" />
      <section className="home-container__content">
        <Header />
        <section className="home-container__content__options">
          <Game />
          <Lobby />
          <Ranked />
        </section>
        <footer className="home-container__content__footer">
          <div className="home-container__content__footer__status">
            <span>{online}</span>
            <div>
              <span>Jogadores</span>
              <span>Online</span>
            </div>
          </div>
          <span className="home-container__content__footer__separator"></span>
          <div className="home-container__content__footer__status">
            <span>{bans}</span>
            <div>
              <span>Cheaters</span>
              <span style={{ color: '#ff0909' }}>Banidos</span>
            </div>
          </div>
        </footer>
      </section>

    </main>
  );
}
