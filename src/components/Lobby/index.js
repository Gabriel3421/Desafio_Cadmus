import React, { useContext, useMemo } from 'react';
import { AppContext } from '../../context/AppContext'
import lobby from '../../assets/lobby.svg';
import { BlueCard } from '../BlueCard';
import { GreenCard } from '../GreenCard';
import { RedCard } from '../RedCard';
import { Button } from '../Button';
import "./styles.scss";

export function Lobby() {
  const { user } = useContext(AppContext);
  const lobbyInfo = user.matches[0]
  const playedMatches = useMemo(() => lobbyInfo.victory + lobbyInfo.defeat, [lobbyInfo.victory, lobbyInfo.defeat]);
  return (
    <main className="lobby-container">
      <header>
        <img src={lobby} alt="" />
        <span>{lobbyInfo.title}</span>
      </header>
      <section>
        <BlueCard quantity={playedMatches} />
        <GreenCard quantity={lobbyInfo.victory} />
        <RedCard quantity={lobbyInfo.defeat} />
      </section>
      <footer>
        <Button url={lobbyInfo.button.link}>
          {lobbyInfo.button.title}
        </Button>
      </footer>
    </main>
  );
}
