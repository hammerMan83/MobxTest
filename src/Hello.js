import React from 'react';
import { inject, observer } from "mobx-react";
import PropTypes from 'prop-types';

// export default inject(["store"])(
//                 observer(({ store }) => <h1>Dice Number: {store.diceNumber}</h1>)
//                );

@inject("store") // decorator pulling from Provider
@observer
class Hello extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.store.rollDice();
  }

  render() {
    return (
      <h1>{this.props.store.diceNumber}</h1>
    )
    //return (<h1>Dice Number: {this.props.store.diceNumber}</h1>);
  }
  //componentDid

}

Hello.propTypes = {
  store: PropTypes.object
};

export default Hello;