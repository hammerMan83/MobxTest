import { observable, action } from "mobx";

class DiceStore {
  @observable diceNumber = 0;  
  @observable shouldRole = true;

  constructor(diceApi) {
    this.diceApi = diceApi;
  }

  @action 
  rollDice = () => 
  { 
    if (this.shouldRole)
    {
      console.log('rolling!');
      this.diceNumber = this.diceApi.makeRandomDiceNumber(); 
    }
  };

  @action
  toggleRollDice = () =>
  {
    this.shouldRole = !this.shouldRole;
  }

}

export default DiceStore;