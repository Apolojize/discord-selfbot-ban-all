/* SELF BOT CREATED BY JEOTIQUE FROM APOLOJIZE */
// https://discord.gg/apolojize
// simple selfbot ban all

const Discord = require("discord.js")
const client = new Discord.Client({restTimeOffset: 1})
require("colors")
const config = require("./config.json")

console.log(" ")
console.log(" ")

console.log(`
    
 █████  ██████   ██████  ██       ██████       ██ ██ ███████ ███████ 
 ██   ██ ██   ██ ██    ██ ██      ██    ██      ██ ██    ███  ██      
 ███████ ██████  ██    ██ ██      ██    ██      ██ ██   ███   █████   
 ██   ██ ██      ██    ██ ██      ██    ██ ██   ██ ██  ███    ██      
 ██   ██ ██       ██████  ███████  ██████   █████  ██ ███████ ███████ 
                                                                      
                                                                                                                          
            https://discord.gg/apolojize          
		[ simple selfbot ban all ]                             
`.yellow)

console.log("     > Connexion [!]".yellow)
console.log(" ")

client.login(config.token).catch(e => { //here we log to the token present in 'config.json'
    console.log("Error occured during the connection to the token :/".red) //if we can't connect we say that in the console
})

client.on('ready', () => { //the script start directly after the login connect
    console.log("     > Connected :D".green)
    console.log(`     > `.white+`${client.user.tag}`.yellow)
    if(!client.guilds.has(config.guildid)) return console.log("The guild id present in "+red+'config.json'+white+" is invalid."+red) //we look if the guild id in 'config.json' is valid
    let guild = client.guilds.get(config.guildid) 
    if(!guild) return console.log("The guild id present in "+red+'config.json'+white+" is invalid."+red) //we look if the guild is valid
    if(!guild.me.hasPermission("BAN_MEMBERS")) return console.log("You don't have the permission for ban members :/".red) //we check if the token logged have the permission to ban in the guild
    guild.fetchMembers().then(g => { //we fetch all members to stock all in the cache
        if(!g) return console.log("Error occured, try again".red)
        let r = config.reason
        if(!r || r=="this one is optionnal") r = "discord.gg/apolojize"
        g.members.map(m => { //we make a loop of all members
            m.ban({days: 7, reason: r}).then(() => { //we try to ban
                console.log(`${m.user.tag}`.yellow+" has been banned."+green) //if succes we put that in the console
            }).catch(e => { 
                console.log(`${m.user.tag}`.yellow+" can't get banned for the next reason : ".red) //if error we put that in the console
                console.log(`${e?e:"unknow"}`.blue)
            })
        })
    }).catch(e => { //if error during the fetch members we report the reason in the console
        console.log("Error occured during the fetch members, reason :".red)
        return console.log(`${e?e:"unknow"}`.blue)
    })
})

/* SELF BOT CREATED BY JEOTIQUE FROM APOLOJIZE */