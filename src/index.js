import React from 'react';
import { render } from 'react-dom';
import Dice from './Dice';
import { observable } from "mobx";
import { inject, observer, Provider } from "mobx-react";
import DiceStore from "./DiceStore";
import DiceApi from "./DiceApi";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Dice name="CodeSandbox" />    
  </div>
);

const api = new DiceApi();
const store = new DiceStore(api);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
