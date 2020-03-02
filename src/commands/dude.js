const gif = "./src/images/tenor.gif";

module.exports = async (msg, args) => {
  const reply = `You ma homie ${msg.author} 👊`;
  await msg.channel.send(`${reply}`, {
    files: [gif]
  });
  console.log("Reply was sent!");
};
