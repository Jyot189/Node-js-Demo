// //start how explain
// var http=require('http');//modules
// http.createServer(function(req, res) {
//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('hello world');
// }).listen(3000);


// //how to use your custom module
// var http=require('http');//modules
// var use=require('./myfirstmodule');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("the date is" + use.myDate())
//     res.write(req.url);//print the ural that client can request
//     res.end('   hello world');
// }).listen(3000);


// //URL split
// var http = require('http');
// var url=require('url');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     var q=url.parse(req.url,true).query;
//     var text=q.year + " "+ q.month;
//     res.end(text);
// }).listen(3000);
// // ---- how to writeHead in = http://localhost:3000/?year=2022&month=july 
// // ---- this way end show the output :2022 july



// // file system module
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {

//     fs.readFile('file.html', function (err, data) {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();

//     });

// }).listen(3000);


// // split a web address with url.parse
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata)
// console.log(qdata.month); //returns 'february'






