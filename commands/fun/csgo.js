const fs = require('fs')

module.exports = {
  name: "csgo",
  descriptionfr: "Créé un ascii CSGO",
  descriptionen: "Create a CSGO ascii",
  run: async (client, message, args) => {
    message.edit("```" + `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⣶⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣸⣿⣿⡟⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⡿⣿⡿⠛⠛⠋⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣿⣿⣿⣿⣿⣿⣿⣷⣿⠃⠀⠀⠀⠀⠀⠀⠀
    ⢠⣶⣶⣶⣶⣶⣶⡄⠀⢸⣿⣿⣿⣿⣿⣿⣧⠙⠛⠉⢠⣶⣶⣶⣶⣶⣶⡄
    ⢸⣿⣿⠛⠛⠛⠛⠃⠀⠐⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⢸⣿⡿⠛⠛⠛⠛⠃
    ⢸⣿⣿⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⢸⣿⣿⣶⣶⣶⣶⡆
    ⢸⣿⣿⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⢿⣿⣿⣿⡀⠀⠀⠈⠛⠛⠛⠛⣿⣿⡇
    ⢸⣿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⠁⠀⠘⢿⣿⣷⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇
    ⠈⠉⠉⠉⠉⠉⠉⠁⢠⣿⡟⠁⠀⠀⠀⢠⣿⣿⠀⠀⠈⠉⠉⠉⠉⠉⠉⠁
    ⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠃⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢸⣿⠉⠀⠀⠀⠀⠀⠀⣹⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠸⠿⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀` + "```")
  }
}