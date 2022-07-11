var fs = require('fs');

// fs.open('append.txt','w',function(err){
//     if(err) throw err;
//     console.log("saved");
// })

// fs.writeFile('append.txt', 'hello express', function (err) {
//     if (err) throw err;
// console.log('replaced');
// })

// fs.appendFile('append.txt', 'hello node', function (err) {
//     if (err) throw err;
//     console.log("update");
// })


//delete
// fs.unlink('append.txt',function(err){
//     if (err) throw err;
//     console.log('delete');
// })


fs.rename('append.txt','appendrename.txt',function(err){
    if (err) throw err;
    console.log('file rename');
})

//to run this file