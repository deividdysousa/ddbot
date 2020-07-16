
module.exports = async (bot, msg) => {
    const channel = msg.channel
    let messages = await channel.messages.fetch()
    console.log(messages)
    await channel.bulkDelete(messages)
    msg.reply(`Eu ${process.env.BOT_NAME} limpei o Chat`)
}
