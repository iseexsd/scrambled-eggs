var scramble_333 = require("../lib/scramble_333_edit")

module.exports.run = (amount) => {
    return scramble_333.getRandomScramble(amount)
}