const discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.member.voice.channel.join();

}

module.exports.help = {
    name: "kroeg"
}