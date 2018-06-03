import { observable, action } from "mobx";

class DiceStore {
  @observable diceNumber = 0;
  
  constructor(diceApi) {
    this.diceApi = diceApi;
  }

  // let diceApi = this.props.diceApi;

  @action 
  rollDice = () => 
  { 
    console.log('rolling!');
    this.diceNumber = this.diceApi.makeRandomDiceNumber(); 
  };

  // onChange = e => {
  //   // action
  //   this.text = e.target.value;
  //   fetchAllCaps(e.target.value).then(val => (this.text = val));
  // };

}

export default DiceStore;