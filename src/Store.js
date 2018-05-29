import { observable } from "mobx";
//import { inject, observer, Provider } from "mobx-react";
import { DiceApi } from "./Api";

class Store {
  @observable diceNumber = 0;
  
  onChange = e => {
    DiceApi.getRandomCubeNumber().then(result => (this.diceNumber = result));
  };  
}

let store = new Store();
export default store;