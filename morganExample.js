// No HTTP this time around - and, isn't it interesting that we create an "app"?
var express = require('express');
var app = express();
var morgan = require('morgan')
    // Log first!

app.use(morgan('combined'))
// Tell express, if it's in the 'assets' directory, then it can be served directly
// Wow. that easy?!
app.use(express.static('assets'));
const PORT = 8080;
app.listen(PORT);
