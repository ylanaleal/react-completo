import React from 'react';

const Header = () => {
  return (
    <ul style={{ display: 'flex' }}>
      <li style={{ paddingRight: '30px' }}>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/produtos">Produtos</a>
      </li>
    </ul>
  );
};

export default Header;
