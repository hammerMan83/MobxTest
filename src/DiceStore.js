import { observable, action } from "mobx";

class DiceStore {
  @observable diceNumber = 0;
  @observable shouldRole = true;

  constructor(diceApi) {
    this.diceApi = diceApi;
  }

  // let diceApi = this.props.diceApi;

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

  // onChange = e => {
  //   // action
  //   this.text = e.target.value;
  //   fetchAllCaps(e.target.value).then(val => (this.text = val));
  // };

}

export default DiceStore;