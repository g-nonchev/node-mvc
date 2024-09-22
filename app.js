const express = require('express');
const app = express();
const routes = require('./controllers/controller');
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
