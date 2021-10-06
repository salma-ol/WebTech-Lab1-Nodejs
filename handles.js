const url = require('url')
const qs = require('querystring')
module.exports = {
    serverHandle : function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'
  
      
        res.writeHead(200, {'Content-Type': 'text/plain'});
      
        if (path === '/hello/' && 'name' in params) {
          res.write('Hello ' + params['name'])
        }else if(path ==='/hello/'){
          res.write('Hello anonymous') ; 
        }else{
          res.write('404 error') ; 
        }
        
        res.end();
      }
  }