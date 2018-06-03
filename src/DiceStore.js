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
    this.diceNumber = this.diceApi.makeRandomDiceNumber(); 
  };
}

export default DiceStore;