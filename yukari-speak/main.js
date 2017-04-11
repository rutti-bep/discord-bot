var request = require('request');
var fs = require('fs');

function yukariSend(text,callback){
  var options = {
    uri: 'http://cloud.ai-j.jp/demo/aitalk2webapi_nop.php',
    form: { speaker_id: '1206',text: text, ext: 'ogg',volume: '1.0',speed:'1.0',pitch:'1.0' },
    json: false
  };

  request.post(options, function(error, res, body){
    if (!error && res.statusCode == 200) {
      var returnUrl = "";
      //      console.log(body);
      var bodySlashSplited = body.split('\"');
      var voiceUrl = bodySlashSplited[3]
      voiceUrl = voiceUrl.replace(/\\\//g,"/")
        //        console.log(voiceUrl)
      returnUrl = voiceUrl;

      request.get(voiceUrl)
        .on('response', function (res) {})
        .pipe(fs.createWriteStream(__dirname+"/test.ogg")).on('close', callback);
    } else {
      console.log('error: '+ response.statusCode);
      returnUrl = response.statusCode;
    }
  }); 
}

module.exports = {yukariSend : yukariSend}
