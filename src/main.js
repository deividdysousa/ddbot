const Discord = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const bot = new Discord.Client()
bot.login(process.env.BOT_TOKEN)

const commands = require('./commands')

bot.on('ready', () => console.log(`${process.env.BOT_NAME} on!`))

bot.on('message', msg => {
    let args = msg.content.split(' ').map(arg => (arg.toLowerCase()))
    
    if(msg.author.bot) return
    if(args && args[0]!=process.env.BOT_PREFIX) return

    if(commands[args[1]] == undefined){
        msg.reply(`Olá ${msg.author.username}, comando não localizado`)
        return
    }
    
    try {
        commands[args[1]](bot, msg, args)
    } catch (error) {
        msg.reply(`Ops, ocorreu um erro no processo`)
        console.log(error)
    }
})
