const express = require('express');
const app = express();
const pageControllers = require('./controllers/pageControllers');
const utilControllers = require('./controllers/utilControllers');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

// routes
pageControllers(app);
utilControllers(app);


app.listen(port, () => console.log(`app is listening on port ${port}`));