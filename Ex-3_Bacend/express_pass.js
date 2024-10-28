var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs')
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));

app.get('/register.html', function (req, res) {
   res.sendFile(__dirname + "/" + "register.html");
})

app.get('/login_form.html', function (req, res) {
   res.sendFile(__dirname + "/" + "login_form.html");
})

app.post('/process1', urlencodedParser, function (req, res) {
   const { firstname, lastname, email, gender, password } = req.body;

   // Prepare output in JSON format  

   // response = { first_name: req.body.user, password: req.body.password };
   const response = `Firstname: ${firstname}, Lastname: ${lastname}, Email: ${email}, Gender: ${gender}, Password: ${password}\n`;
   // console.log(response);

   // let responseData = JSON.stringify(response, null, 2);    // convert to string
   fs.appendFile('store.txt', response, (err) => {
      if (err) throw err;
      res.send(`<div style="display: inline-block; margin: 200px 0px 0px 400px;">
         <p style="font-size: 30px; background-color: skyblue; text-allign: center;"> 
         Data is successfully store in store.txt</p>
         </div>`)
   });

   console.log(response);
});

app.post('/process2', urlencodedParser, function (req, res) {
   const { email, password } = req.body;

   // Prepare output in JSON format  

   // response = { first_name: req.body.user, password: req.body.password };
   const response = `Email: ${email}, Password: ${password}\n`;
   // console.log(response);


   // let responseData = JSON.stringify(response, null, 2);    // convert to string
   fs.appendFile('store.txt', response, (err) => {
      if (err) throw err;
      res.send(`<div style="display: inline-block; margin: 200px 0px 0px 400px;">
         <p style="font-size: 30px; background-color: skyblue; text-allign: center;"> 
         Data is successfully store in store.txt</p>
         </div>`)
   });

   console.log(response);
});

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})  
