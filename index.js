const express = require('express');
const linebot = require('linebot');
require('dotenv').config();

const app = express();

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  verify: true
});

const linebotParser = bot.parser();
app.post('/', linebotParser);

bot.on('message', function (event) {
  event.reply([
    {  
      "type": "flex",
      "altText": "this is a flex message",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "hello"
            },
            {
              "type": "text",
              "text": "world"
            }
          ]
        }
      }
    }
  ]).then(function (data) {
    console.log('Success', data);
  }).catch(function (error) {
    console.log('Error', error);
  });
});
app.listen(process.env.PORT || 80, function () {
  console.log('LineBot is running.');
});
