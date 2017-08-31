const express = require('express');
const app = express();
app.use('/', express.static('angular-app/dist'));
app.use('/legacy', express.static('angularjs-app/src'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});