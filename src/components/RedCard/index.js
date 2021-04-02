import React from 'react';
import "./styles.scss";

export function RedCard({ quantity }) {
  return (
    <main className="redcard-container">
      <span className="redcard-container__number">{quantity}</span>
      <span>DERROTAS</span>
    </main>
  );
}
