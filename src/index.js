const express = require('express');
const redis = require('redis');
const mongoose = require('mongoose');
const app = express();

const Schema = mongoose.Schema;

const Log = mongoose.model('Log', { content: String });

const redisClient = redis.createClient();
redisClient.on('error', err => console.log('redis error', err));

app.get('/', async (req, res) => {
  await redisClient.set('keykey', '42');
  await new Log({ content: 'new request' }).save();
  res.json({message: 'hello'});
});

app.listen(3000, async () => {
  await Promise.all([
    mongoose.connect('mongodb://mongoadmin:mongoadmin@127.0.0.1:27017/oteldemo?authSource=admin'),
    redisClient.connect(),
  ]);

  console.log('ready');
});
