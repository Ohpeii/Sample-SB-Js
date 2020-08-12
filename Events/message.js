module.exports = (bot) => {
    bot.on("message", (msg) => {

        if (msg.author.bot) return;
        if (!msg.content.startsWith(bot.config['prefix'])) return;

        let args = msg.content.slice(bot.config['prefix'].length).trim().split(/\s/g);
        let cmd  = args.shift().toLowerCase();
        let command;

        if (bot.commands.has(cmd)) {
            command = bot.commands.get(cmd);
        }

        if (command) return command(bot, msg, args)

    })
}