const express = require('express');
const bodyPaser = require('body-parser');

const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.listen(3000);