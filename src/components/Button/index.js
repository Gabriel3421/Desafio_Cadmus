import React from 'react';
import "./styles.scss";

export function Button({ children, url }) {
  return (
    <button
      type="button"
      className="button-container"
      onClick={() => { url && window.open(url, '_blank'); }}
    >
      {children}
    </button>
  );
}
