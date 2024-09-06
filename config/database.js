// config/database.js

const mongoose = require('mongoose');

const databaseName="sample_mflix";
const username="test";
const password="nGzJniLieUyopghS";

// MongoDB Atlas bağlantı dizisi (kendi bağlantı dizinizi buraya yapıştırın)
//const mongoURI = 'mongodb+srv://test:nGzJniLieUyopghS@testcluster.hvchb.mongodb.net/?retryWrites=true&w=majority&appName=testCluster';
const mongoURI = `mongodb+srv://${username}:${password}@testcluster.hvchb.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=testCluster`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true   

})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));
