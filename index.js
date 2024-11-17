//_______________________ ┏  Info  ┓ _______________________\\
//
//   Credit : AlipBot
//   
//   Note 
//   Do not sell this SC,
// Do not remove this text,
// Who Wants To Upload Don't Forget Credit :),
// Those Who Don't Put Credit Will Take Action
//   
//_______________________ ┏ MADED BY BRASHO KISH ┓ _______________________\\

const express = require('express'); 
const app = express();
var favicon = require('serve-favicon')
var path = require('path')
var cookieParser = require('cookie-parser');
var createError = require('http-errors')
require('./settings')

cors = require('cors');

secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000

// Active code: Middleware setup and routes
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

var main = require('./routes/main'),
    api = require('./routes/api');

app.set('trust proxy', true);
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(cookieParser());
app.use(express.static("public"));
app.use('/', main);
app.use('/api', api);

// Handle 404 errors
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler middleware
app.use(function (err, req, res, next) {
    res.sendFile(__path + '/view/404.html');
});

// Server startup
app.listen(PORT, () => {
    console.log(`
    ██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ██╗
    ██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██║
    ██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝██║
    ██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔═══╝ ██║
    ██║  ██║███████╗███████║   ██║   ██║  ██║██║     ██║
    ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
    Maded by Brasho kish 

    Server running on http://localhost:` + PORT);
    console.log(`Hello ${creator}`);
});

// Inactive code - Example for code you might not need right now
// Comment out or conditionally include this part based on the environment or feature flag
/*
app.get('/inactive', (req, res) => {
    res.send('This feature is not active');
});
*/

module.exports = app;
