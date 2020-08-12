const { Client, Collection } = require ("discord.js");
const fs = require ('fs');

module.exports = class Bot extends Client {
    constructor(token) {
        super()
        this.token = token;
        this.init();
        this.commands = new Collection();
        this.execCommands()
        this.execEvents()
        this.config = JSON.parse(fs.readFileSync("./Config.json"));
    }

    init() {
        this.login(this.token)
        .catch(err=>console.error(err));
    }

    execCommands() {
        for (let command of fs.readdirSync("Commands")) {
            if (command.endsWith(".js")) {
                let path = require ("../Commands/" + command);
                this.commands.set(command.split(".js")[0], path);
            }
        }
    }

    execEvents() {
        for (let event of fs.readdirSync("Events")) {
            if (event.endsWith(".js")) {
                (require("../Events/" + event))(this);
            }
        }
    }
}