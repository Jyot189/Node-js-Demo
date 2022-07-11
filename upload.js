// //create an upload form
// var http=require('http');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action=fileupload method="post" enctype="multipart/form-data">')
//     res.write('<input type="file" name="filetoupload"><br>')
//     res.write('<input type="submit">');
//     res.write('</form>');
// }).listen(3000);

//parse the upload file 
// var http = require('http');
// var formidable = require('formidable');

// http.createServer(function (req, res) {

//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req,function(err,fields,files){
//             res.write('file uploaded');
//             res.end();
//         });
//     }
//     else {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<form action=fileupload method="post" enctype="multipart/form-data">')
//         res.write('<input type="file" name="filetoupload"><br>')
//         res.write('<input type="submit">');
//         res.write('</form>');
//     }
// }).listen(3000);


// save the file to
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'D:/CODE/NodeJs/basic/upload/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        return res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="POST" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3000,()=>{
  console.log("server is running");
});