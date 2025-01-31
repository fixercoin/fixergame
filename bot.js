const Telegraf = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome! Use /connect to connect your wallet.'));

bot.hears('/connect', async (ctx) => {
  // Your wallet connection logic here
  // For example, generate a QR code and send it to the user
  const chatId = ctx.chat.id;
  const qrCode = 'https://tinyurl.com/fixercoin/qrcode'; // Replace with actual QR code generation logic
  ctx.replyWithPhoto({ url: qrCode });
});

bot.launch();

console.log('Bot is running...');
