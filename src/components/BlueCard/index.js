import React from 'react';
import "./styles.scss";

export function BlueCard({ quantity }) {
  return (
    <main className="bluecard-container">
      <span className="bluecard-container__number">{quantity}</span>
      <span>PARTIDAS</span>
    </main>
  );
}
