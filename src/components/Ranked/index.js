import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import ranked from '../../assets/ranked.svg';
import fila from '../../assets/fila.svg';
import { BlueCard } from '../BlueCard';
import { GreenCard } from '../GreenCard';
import { RedCard } from '../RedCard';
import { Button } from '../Button';
import "./styles.scss";

export function Ranked() {
  const { user } = useContext(AppContext);
  const rankedInfo = user.matches[1]
  return (
    <main className="ranked-container">
      <header>
        <img src={ranked} alt="star" />
        <span>{rankedInfo.title}</span>
      </header>
      <section>
        <BlueCard quantity={rankedInfo.victory + rankedInfo.defeat} />
        <GreenCard quantity={rankedInfo.victory} />
        <RedCard quantity={rankedInfo.defeat} />
      </section>
      <footer>
        <Button url={rankedInfo.button.link}>
          <img src={fila} alt="star" />
          <span>{rankedInfo.playersWaiting}</span>
          {rankedInfo.button.title}
        </Button>
      </footer>
    </main>
  );
}
