/* eslint-disable linebreak-style */
/* eslint-disable quotes */
// module.exports = async (msg, args) => {
//   await msg.reply("Winrates");
//   console.log("Reply was sent!");
// };
const puppeteer = require("puppeteer");

module.exports = async (msg, args) => {
  if (!args.length) return;
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const username = args;
  const page = await browser.newPage();
  await page.goto(`https://oce.op.gg/summoner/userName=${username}`, {
    waitUntil: "networkidle2"
  });

  const winRateDiv = await page
    .waitForXPath(
      "/html/body/div[2]/div[2]/div/div/div[5]/div[2]/div[2]/div/div[2]/div[1]/div[1]/table/tbody/tr[2]/td[1]/div/div[2]",
      { timeout: 1000 }
    )
    .catch(async e => {
      console.log("No Good Sonny Jim", e);
      await msg.channel.send(
        `${username} You do not have enough recent matches 🙅‍♂️`
      );
      return;
    });

  //const winRateDiv = await page.waitForXPath(
  //"/html/body/div[2]/div[2]/div/div/div[5]/div[2]/div[2]/div/div[2]/div[1]/div[1]/table/tbody/tr[2]/td[1]/div/div[2]",
  //{ timeout: 1000 }
  //);

  const text = await winRateDiv.getProperty("textContent");
  const winRate = await text.jsonValue();
  // Remove Text from string & just grab the number
  const winRateNumber = await parseFloat(winRate.replace(/\D/g, ""));

  await browser.close();

  if (winRateNumber >= 50) {
    await msg.channel.send(`${username} Winrate is ${winRateNumber}% 🔥`);
  } else {
    await msg.channel.send(
      `${username} Your Winrate is utter ${winRateNumber}% 💩`
    );
  }
};
