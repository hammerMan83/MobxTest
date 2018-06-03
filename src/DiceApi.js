class DiceApi {

  makeRandomDiceNumber() {
    return Math.floor(Math.random() * 5) + 1
  }

}

export default DiceApi;