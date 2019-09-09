var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexFourth = /^\/4th/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
      botRegexRip = /^\/rip/; botRegexCrrct = /^\/correct/;
      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexVotes = /^\/votes/; botRegexGoodg = /^\/gg/;
      botRegexLaugh = /^\/lol/; botRegexWrong = /^\/wrong/; botRegexShaki = /^\/shaki/;
      botRegexDaf = /^\/dafuq/; botRegexMA32 = /^\/pending/; botRegexTrade = /^\/trade/; 
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexRip.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/750x718.jpeg.1258a4943d724caba2500035e9e9a4ba");
    this.res.end();
  } 
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexVotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1QBF6Hcx3nkFcmjItOzkBFx9RKP4xle3foX4zTF4U9WA/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexGoodg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/500x500.jpeg.974b9d0db5304155b6f93513bb5c0879");
    this.res.end();
  } 
  else if(request.text && botRegexLaugh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/587x573.jpeg.98285913029f42758a4a9d916609e8a0.large");
    this.res.end();
  } 
  else if(request.text && botRegexWrong.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/480x287.gif.987cf3955af443d0a30ccbfbec2d30b4");
    this.res.end();
  } 
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("https://www.daddyleagues.com/success");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/300x300.jpeg.0c0f3b94c3014f72915a0281847075e0");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/SUCCESS/rules");
    this.res.end();
  } 
  else if(request.text && botRegexFourth.test(request.text)) {
    this.res.writeHead(200);
    postMessage("You are allowed to go for it on 4th down under these conditions: \n 1. You are up by 3 or less, past the 50 and it is 4th and 3 or less. \n 2. You are down by 14 or more in the second half. \n 3. You are down in the 4th quarter. ");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/success/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/success/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.reddit.com/r/TheNiceMaddenLeague/");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1zRLaUZ12vUOORFdNQbPCzJW5T0zFBrkth_osH9b7d34/edit?usp=drivesdk");
    this.res.end();
  } 
  else if(request.text && botRegexCrrct.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/480x446.gif.d0885bddb68745a68cf777acb1b22782");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexMA32.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/12hVrn7ShR3An6bP5uBF3gaoTQQgVciC-0RqtWVZ39Ls/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("To submit a trade, click here: https://goo.gl/forms/b0bWKc22HGITXCoA2");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
