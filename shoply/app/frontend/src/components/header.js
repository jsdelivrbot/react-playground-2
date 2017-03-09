import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Your Cart</li>
        </ul>
      </nav>
    </header>
  );
}
