const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.member.voice.channel.leave();

}

module.exports.help = {
    name: "kroegisgesloten"
}