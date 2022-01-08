/* const fs = require("fs");
fs.readFile("./text.txt", 'utf-8',(err,data) => {
    if(!err){
        console.log(data);
    }
    else{
        console.log('hello')
    }
 
});
const a=fs.readFileSync("./text.txt","utf-8")
console.log("hello",a) */
var http=require('http');
const server=http.createServer((request,response)=>{
  console.log('srver is ready')
})
server.listen(808,()=>{
    console.log('server is running ')
})