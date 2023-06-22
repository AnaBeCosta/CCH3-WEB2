import React from 'react';
import { menuStyle, buttonStyle } from './styles';

const Menu = () => {
  const handleButtonClick = (option) => {
    console.log(`Clicou em ${option}`);
  };

  return (
    <div className={menuStyle.menuContainer}>
      <h1>Menu</h1>
      <div className={menuStyle.buttonContainer}>
        <button className={buttonStyle} onClick={() => handleButtonClick('Produtos')}>
          Produtos
        </button>
        <button className={buttonStyle} onClick={() => handleButtonClick('Vendas')}>
          Vendas
        </button>
        <button className={buttonStyle} onClick={() => handleButtonClick('Pessoas')}>
          Pessoas
        </button>
      </div>
    </div>
  );
};

export default Menu;

