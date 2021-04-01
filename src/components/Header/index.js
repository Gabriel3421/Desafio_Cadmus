import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import logo from '../../assets/logo.svg';
import "./styles.scss";

export function Header() {
  return (
    <main className="header-container">
      <h1>Header</h1>
    </main>
  );
}