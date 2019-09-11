;const express = require('express');
const linebot = require('linebot');
require('dotenv').config();

const app = express();

const bot = new linebot({   channelId: process.env.CHANNEL_ID,   channelSecret: process.env.CHANNEL_SECRET,   channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  verify: true
});

const linebotParser = bot.parser();
app.post('/', linebotParser);

bot.on('message', function (event) {
  console.log(event);
  event.reply(
    event.message.text
  ).then(function (data) {
    console.log('Success');
  }).catch(function (error) {
    console.log('Error');
  })
  bot.broadcast("hi\uDBC0\uDC84"); // emoji;
})
;
bot.on('follow', function(event){
  console.log('Followed by ' + event.source.userId)
  // console.log(event);;
  event.reply(
    'Thank you!!'
  ).then(function(data){
    console.log('Success: follow')
  }).catch(function(error){
    console.log('Error: follow')
  })
}
)
bot.on('unfollow', function(event){
  console.log('Unfollowed by ' + event.source.userId)
  // console.log(event);)
}
)
app.listen(process.env.PORT || 80, function () {
  console.log('LineBot is running.');
})
