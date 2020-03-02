/* eslint-disable linebreak-style */
const guildID = "150906523802009600";
const channelID = "683672428089704449";

const ping = require("./ping");
const eightBall = require("./8ball");
const winrate = require("./winrate");
const arnie = require("./arnie");
const dude = require("./dude");

const commands = {
  "8ball": eightBall,
  ping,
  winrate,
  arnie,
  dude
};

module.exports = async msg => {
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    // Once validated that you are in the right Guild (AKA - Server) & in the right channel =>
    // Create an object that has the name of the command and any properties in the command
    const args = msg.content.split(" ");
    if (args.length === 0 || args[0].charAt(0) !== "!") return;
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};

// const cyberneticOrganism = "https://www.youtube.com/watch?v=pj5_7jnIXm8";
// const valentine =
//   "https://media1.giphy.com/media/yIzOpBvGCZOQE/giphy.gif?cid=790b761154c8b886bf446f06882a98e96cfde4d7b0679d51&rid=giphy.gif";
// const arnieShotgun =
//   "https://media2.giphy.com/media/l41YlaRerwUOcUOLm/giphy.gif?cid=790b7611ac9908e98acb9ddb08efe8d3051339981529ab6f&rid=giphy.gif";
// const arnieKill =
//   "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/03/ilied.gif";

// if (msg.guild.id === guildID && msg.channel.id === channelID) {
//     if (msg.content.toLowerCase() === "sulley") {
//       await msg.channel.send(
//         `I said I'd kill you last ${msg.author}... I Lied!`,
//         { files: [arnieKill] }
//       );
//       console.log("Reply was sent!");
//     }
//   }
// if (msg.guild.id === guildID && msg.channel.id === channelID) {
//     if (msg.content.toLowerCase() === "target") {
//       await msg.reply("=== Targeted for Termination. (⌐■_■)–︻╦╤─");
//       console.log("Reply was sent!");
//     }
//   }
//   if (msg.guild.id === guildID && msg.channel.id === channelID) {
//     if (msg.content.toLowerCase() === "bar") {
//       await msg.reply("I need your clothes, your boots, and your motorcycle");
//       console.log("Reply was sent!");
//     }
//   }
//   if (msg.guild.id === guildID && msg.channel.id === channelID) {
//     if (msg.content.toLowerCase() === "love") {
//       await msg.reply(
//         "I am a Robot programmed to terminate, love does not compute"
//       );
//       console.log("Reply was sent!");
//     }
//   }
//   if (msg.content.toLowerCase() === "cybernetic") {
//     await msg.reply(
//       "I'm a cybernetic organism. Living tissue over a metal endoskeleton.",
//       { files: [arnieShotgun] }
//     );
//     console.log("Reply was sent!");
//   }
// }
// if (msg.guild.id === guildID && msg.channel.id === channelID) {
//   if (msg.content.toLowerCase() === "valentine") {
//     await msg.reply("Who's your daddy ;)", { files: [valentine] });
//     console.log("Reply was sent!");
//   }
// }
// if (msg.guild.id === guildID && msg.channel.id === channelID) {
//   if (msg.content.toLowerCase() === "dick") {
//     await msg.channel.send(`Yes, ${msg.author} has a pin dick! 🍆🔎`);
//     console.log("Reply was sent!");
//   }///
