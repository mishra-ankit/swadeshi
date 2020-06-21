const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase} = require('./database/mongo');
const {getFeedback, putFeedback, getQueryWords, insertQueryWord} = require('./database/swadeshi');
// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.get('/query', async (req, res) => {
  res.send(await getQueryWords());
});

app.get('/feedback', async (req, res) => {
  res.send(await getFeedback());
});

app.put('/feedback', async (req, res) => {
  const feedback = req.body.message;
  await putFeedback(feedback);
  res.send({ message: 'Feedback accepted.' });
});

app.put('/query/:queryWord', async (req, res) => {
  const word = req.params.queryWord;
  await insertQueryWord(word);
  res.send({});
});

// starting the server
startDatabase().then(async () => {
  // start the server
  app.listen(3001, async () => {
    console.log('listening on port 3001');
  });
});