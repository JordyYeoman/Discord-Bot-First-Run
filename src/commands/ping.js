module.exports = async (msg, args) => {
  const reply = `Yes, ${msg.author} pong`;
  await msg.channel.send(`${reply} 🏓`);
  console.log("Reply was sent!");
};
