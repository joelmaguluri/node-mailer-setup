var express=require('express');
var app= express();
var path=require('path')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'public')))

app.post('/sendemail',(req,res,next)=>{
  console.log(req.body)

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sunidhimaguluri.d400@gmail.com',
      pass: 'jesus1769'
    }
  }); 
  var mailOptions = {
    from: 'sunidhimaguluri.d400@gmail.com',
    to: 'sunidhimaguluri.d400@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `<h1>Details</h1>
    <h2>
    ${req.body}
    </h2>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error')
    } else {
      console.log('Email sent: ' + info.response);
      res.send('done')
    }
  });
})
app.listen(1234);

