var eggs = require("./scrambled-eggs")
var stdin = process.openStdin()

stdin.addListener("data", (command) => {
    command = command.toString().trim().split(" ")

    let scrambles = eggs(command[0], command[1])
    for(let i = 0; i < command[1]; i++) {
        if(i === command[1] - 1) {
            console.log((i + 1) + ". " + scrambles[i])
        } else {
            console.log((i + 1) + ". " + scrambles[i] + "\n")
        }
    }
})