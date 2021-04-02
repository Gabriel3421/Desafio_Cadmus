import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext'
import game from '../../assets/game.svg';
import sala1 from '../../assets/sala1.svg';
import "./styles.scss";

export function Game() {
  const { roms } = useContext(AppContext);
  const [selectedPage, setSelectedPage] = useState(0);
  const [pageRoms, setPageRoms] = useState(0);
  const [pageButtons, setPageButtons] = useState([]);
  const amountRomsInPage = 3;
  useEffect(() => {
    const romsInPage = roms.slice(selectedPage * amountRomsInPage, (selectedPage + 1) * amountRomsInPage);
    const widthRoomBar = 138;
    const aux = romsInPage.map(room => {
      return {
        ...room,
        occupation: room.players * widthRoomBar / room.capacity
      }
    })
    setPageRoms(aux);
  }, [selectedPage, roms])
  useEffect(() => {
    let pageButtons = [];
    for (let i = 0; i < Math.ceil(roms.length / 3); i++) {
      pageButtons.push(i)
    }
    setPageButtons(pageButtons);
  }, [selectedPage, roms])
  return (
    <main className="game-container">
      <header>
        <img src={game} alt="" />

        <span>JOGO RÁPIDO</span>
      </header>
      <section className="game-container__cards">
        {pageRoms.length > 0 && pageRoms.map((room) => (
          <article key={room.id} className="game-container__cards__card">
            <img src={sala1} alt="" />
            {/* <img src={room.image} alt="" /> */}
            <span>#{room.id} - {room.title}</span>
            <span className="game-container__cards__card__category">{room.category}</span>
            <div className="game-container__cards__card__space-container">
              <div className="game-container__cards__card__space-container__space-labels">
                <span>{room.map}</span>
                <span>{room.players}/{room.capacity} </span>
              </div>
              <div className="game-container__cards__card__space-container__space-max-bar">
                <div style={{ width: room.occupation }}></div>
              </div>
            </div>
          </article>
        ))}

      </section>
      <footer>
        {pageButtons.length > 0 && pageButtons.map((pageValue, index) => {
          return (
            <button
              key={pageValue}
              className={selectedPage === pageValue ? 'game-container__footer__button--color' : ''}
              onClick={() => setSelectedPage(pageValue)}
            >
            </button>
          )
        })}
      </footer>

    </main>
  );
}
