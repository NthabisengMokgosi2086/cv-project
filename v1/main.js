var http = require('http');
var fs = require('fs');


//create a server for http
http.createServer(function(request,response){
  var url = request.url;
  switch(url){
      case'/': // for the whole directory
      getStaticFileContent(response,'public/first_page.html','text/html'); // getting the directory
      break;
      case'/Sec_page':
      getStaticFileContent(response,'public/Sec_page.html','text/html');
      break;
      default:
        response.writeHead(404,{'Content-type':'text/plain'});
        response.end('404-Page not Found');
  }
  
}).listen(8090);
console.log("Server is Running");

function getStaticFileContent(response,filepath,contentType){
  fs.readFile(filepath, function( error ,data){ ////reads the file content
    if(error){
      response.writeHead(500,{'Content-Type':'text/plain'});
      response.end('500 - Internal Server Error.');

    }
    if(data){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end(data);
    }
  });
}
     