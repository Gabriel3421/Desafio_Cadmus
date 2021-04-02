import React from 'react';
import "./styles.scss";

export function GreenCard({ quantity }) {
  return (
    <main className="greencard-container">
      <span className="greencard-container__number">{quantity}</span>
      <span>VITÓRIAS</span>
    </main>
  );
}
