const {getDatabase} = require('./mongo');

const Collection = {
  "FEEDBACK": "feedback",
  "SEARCHWORDS": "searchWords"
}

async function getFeedback() {
  const database = await getDatabase();
  const feedback = await database.collection(Collection.FEEDBACK).find({}).toArray();
  console.log(feedback);
  return feedback;
}

async function putFeedback(message) {
  const database = await getDatabase();
  const feedbackMessage = {"message": message, "time": Date.now()}
  const {feedbackId} = await database.collection(Collection.FEEDBACK).insertOne(feedbackMessage);
  return feedbackId;
}

async function insertQueryWord(queryWord) {
  const database = await getDatabase();
  const query = {"query": queryWord, "time": Date.now()}
  return await database.collection(Collection.SEARCHWORDS).insertOne(query);
}

async function getQueryWords() {
  const database = await getDatabase();
  return await database.collection(Collection.SEARCHWORDS).find({}).toArray();
}

module.exports = {
  putFeedback,
  getFeedback,
  getQueryWords,
  insertQueryWord,
};