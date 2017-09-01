const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
app.use('/', express.static('angular-app/dist'));
app.use('/legacy', express.static('angularjs-app/src'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});