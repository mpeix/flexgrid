var http =  require('http');
var fs = require("fs");
var path = require('path')

var textContentTypes = ['js', 'css', 'html', 'plain'];
var imgContentTypes = ['ico', 'gif','jpg', 'jpeg', 'png','webp','svg+xml','x-icon'];
function returnNotFoundFile(res, err){
    res.setHeader('x-server-error', err.toString());
    res.writeHead(404);
};

function sendFileContent(res, fileName, contentType){
    fs.readFile(fileName, (err, pageContent)=>{
        if(err)
            returnNotFoundFile(res, err);
        else{
         res.writeHead(200, {'Content-Type': contentType});
         res.write(pageContent);
        }
        res.end();        
     });
}

http.createServer(function (req, res){
    var reqUrl = req.url.toString();
    var fileExtension = path.extname(reqUrl).split('.').pop();

    if(reqUrl ==='/'){
        sendFileContent(res, 'index.html', 'text/html');   
    }    
    else{
        var contentType;        
        
        if(reqUrl === '/site.webmanifest')
            contentType = 'application/manifest+json';        
        
        if(fileExtension=== 'json')
            contentType = 'application/json';

        if(textContentTypes.includes(fileExtension)){
            fileExtension = fileExtension === 'js'? 'javascript' : fileExtension;
            contentType = 'text/'+ fileExtension;            
        }
        if(imgContentTypes.includes(fileExtension)){
            fileExtension = fileExtension === 'ico'? 'x-icon' : fileExtension;
            contentType = 'image/'+ fileExtension;            
        }
        sendFileContent(res, reqUrl.substring(1), contentType);
    }   
}).listen(3005);