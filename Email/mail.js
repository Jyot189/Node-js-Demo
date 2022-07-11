var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'12002080601047@gmail.com',
        pass:'2002015910'
    }
});

var mailOptions = {
    from: '12002080601047@gmail.com',
    to:'jyotkhant2002@gmail.com',
    subject: 'Welcome node',
    text:'that is node js'
}

transport.sendMail(mailOptions,function(err,info){
    if(error){
        console.log(err);
    }else{
        console.log('Email sent:',info.response);
    }
})

// mutiple receivers
var mailOptions = {
    from: '12002080601047@gmail.com',
    to:'jyotkhant2002@gmail.com,dhavalrana9222@gmail.com',
    subject: 'Welcome node',
    text:'that is node js'
}

//send html
var mailOptions = {
    from: '12002080601047@gmail.com',
    to:'jyotkhant2002@gmail.com',
    subject: 'Welcome node',
    html:'<h1>welcome</h1>'
}