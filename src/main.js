const Discord = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()

const bot = new Discord.Client()
bot.login(process.env.BOT_TOKEN)

const commands = require('./commands')

bot.on('ready', () => {
    console.log(`${process.env.BOT_NAME} Esta Logado`)
    console.log(`Comandos:`)
    for(let cmd of Object.keys(commands)){
        console.log(`- ${cmd}`)
    }
})

bot.on('message', msg => {
    let args = msg.content.split(' ')
    
    if(msg.author.bot) return
    if(args && args[0]!=process.env.BOT_PREFIX) return

    let cmd = args[1].toLowerCase()

    if(commands[cmd] == undefined){
        msg.reply(`Olá ${msg.author.username}, comando não localizado`)
        return
    }

    commands[cmd](bot, msg)
})
