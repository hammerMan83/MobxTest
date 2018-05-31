import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { observable } from "mobx";
import { inject, observer, Provider } from "mobx-react";
import store from "./Store";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />    
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
