
const http = require("http");

const server = http.createServer((req, res) => {
  console.log('I request event');

  res.end('Hello World')
  
})

 server.listen(8000, ()=>{
  console.log('Server listening on port: 8000...');
 })