/* eslint-disable linebreak-style */
const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const commandHandler = require("./commands");

client.once("ready", () => {
  console.log("Beep Beep! I am ready!");
});
// 683672428089704449
// Grab the ID of the channel (Discord needs to be in developer mode)
client.on("message", commandHandler);

client.login(process.env.BOT_TOKEN);
