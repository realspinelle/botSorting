const mineflayer = require('mineflayer') // eslint-disable-line

/**
 * @param {mineflayer.Bot} bot // to enable intellisense
 */
module.exports = bot => {
  // Simple command to let people know we are a bot
  bot.on('handleChat', (username, message, isWhisper, reply) => {
    if (message.split(' ')[0] !== '!bot') return
    reply('[iambot]')
  })
}
