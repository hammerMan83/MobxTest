import React from 'react';
import { inject, observer } from "mobx-react";
import PropTypes from 'prop-types';

// export default inject(["store"])(
//                 observer(({ store }) => <h1>Dice Number: {store.diceNumber}</h1>)
//                );

@inject(["store"]) // decorator pulling from Provider
@observer
class Hello extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDid

  render() {
    return (<h1>Dice Number: {this.props.store.diceNumber}</h1>);
  }
  //componentDid

}

export default Hello;