import { observable } from "mobx";
//import { inject, observer, Provider } from "mobx-react";
import DiceApi from "./Api";

const diceApi = new DiceApi();

class Store {
  @observable diceNumber = 10;
  
  // rollDice() {
  //   this.diceNumber = Math.floor(Math.random() * 5) + 1;
  //   //DiceApi.getRandomCubeNumber().then(result => (this.diceNumber = result));
  //   // setInterval(() =>
  //   //   diceApi.getRandomCubeNumber().then(result => (this.diceNumber = result)),
  //   //  2000);
  // }
      
  // onChange = e => {
  //   DiceApi.getRandomCubeNumber().then(result => (this.diceNumber = result));
  // };  
}

let store = new Store();
export default store;