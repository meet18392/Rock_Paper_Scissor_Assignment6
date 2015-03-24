var express = require("express");
var JSONObj= {outcome:"win",wins: 3,losses: 2 ,ties: 0};
var win=0;
var loss=0;
var tie=0;
var http = require("http");

var app;

app = express();

http.createServer(app).listen(3000);

function callHTML(req, res) {
    app.use('/client', express.static(__dirname + '/client'));
    res.sendFile('client/11.html', {
        root: __dirname
    });
    return res;
}

app.get('/', function(req, res) {
    res = callHTML(req, res);
});
app.post('/output', function(req, res) {
    res.json(JSONObj);
});

app.post("/play/rock", function (req, res)
{
        var userChoice='rock';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="rock")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              //res.json(JSONObj);
              //response.end();
              res = callHTML(req, res);
            }

            else if(rest==="paper")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
             //res.json(JSONObj);
              //response.end();
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
             //res.json(JSONObj);
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

         }   
      
	//res.send("<html><head></head><body><h1>Rock</h1></body></html>");
});

app.post("/play/paper", function (req, res)
{
	    var userChoice='paper';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        if(userChoice==="paper")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

         }   
      
	//res.send("<html><head></head><body><h1>Paper</h1></body></html>");

});

app.post("/play/scissor", function (req, res)
{
	var userChoice='scissor';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        if(userChoice==="scissor")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }

            else if(rest==="paper")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.send(JSON.stringify(JSONObj))
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

         }   

	//res.send("<html><head></head><body><h1>Scissor</h1></body></html>");

});
app.post("/play/lizard", function (req, res)
{
	    var userChoice='lizard';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="lizard")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }
            
            else if(rest==="paper")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

            else(rest==="spock")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

         }   
      
	//res.send("<html><head></head><body><h1>lizard</h1></body></html>");

});
app.post("/play/spock", function (req, res)
{
	var userChoice='spock';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="spock")
         {
            if(userChoice===rest)
            {
              //response.writeHead(200);
              tie=tie+1;
              JSONObj.outcome='tie;'
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

            else if(rest==="rock")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

            else if(rest==="scissor")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }
            
            else if(rest==="lizard")
            {
              //response.writeHead(200);
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

            else(rest==="paper")
            {
              //response.writeHead(200);
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=callHTML(req,res);
              //res.json(JSONObj);
              //response.end();
              
            }

         }   
	//res.send("<html><head></head><body><h1>Spock</h1></body></html>");

});

