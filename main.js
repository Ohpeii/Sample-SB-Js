const process = require ('process');
const chalk = require ("chalk");
const Bot = require ("./Structures/Client")
let token = "";

if (!process.argv.includes("--token")) {
    console.log("Please do " + chalk.green("[node main.js --token your-token-here]") + " instead.");
    return process.exit(1);
};

if (process.argv.includes("--token") && process.argv[3]) {
    token = process.argv[3];
}

new Bot(token)