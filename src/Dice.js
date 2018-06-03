import React from 'react';
import { inject, observer } from "mobx-react";
//import PropTypes from 'prop-types';


@inject('store') // decorator pulling from Provider
@observer
class Dice extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  // componentDidMount() {
  // }

  render() {
    const {store} = this.props;

    return (
      <div>
        <h1>{store.diceNumber}</h1>
        <button type="button" onclick={store.rollDice()}>Roll Dice</button>
      </div>
    )
  }

}

// Dice.propTypes = {
//   //store: PropTypes.object
// };

export default Dice;