import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function Provider({ children }) {
  const [cart, setCart] = useState([]);

  const initialContext = { 
    cart, setCart,
  };

  return (
    <Context.Provider value={ initialContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};