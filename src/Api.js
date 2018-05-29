class DiceApi {

  static getRandomCubeNumber() {
    return new Promise(resolve => 
        setTimeout(
          resolve(Math.floor(Math.random() * 5) + 1),
          1000
        )
    )
  }

}

export default DiceApi;