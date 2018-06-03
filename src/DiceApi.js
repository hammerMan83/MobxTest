class DiceApi {

  makeRandomDiceNumber() {
    return (Math.floor(Math.random() * 6) + 1)
  }

}

export default DiceApi;