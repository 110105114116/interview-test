const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Todo → 1
app.get('/1', (req, res) => {
  let a = 0;
  let b = 0;
  let round = 0

  //? A win 3 round
  for (let i = 0; i < 3; i++) {
    a++
    b--
    round++
  }

  //? B win 5 round
  for (let i = 0; i < 5; i++) {
    a--
    b++
    round++
  }

  res.json({
    code: 0,
    result: round
  })
});

// Todo → 2
app.post('/2', (req, res) => {
  const message = req.body.message;

  const dataset = [{
    ':smile:': ':)',
    ':sad:': ':(',
    ':laugh:': 'XD',
    ':cry:': ':’(',
    ':kidding:': ':P',
    ':wow:': ':o'
  }];

  const result = message.replace(/:[a-z]+:/g, (match) => {
    return dataset[0][match];
  });

  res.json({
    code: 0,
    result: result
  })
})

//Todo → 3
app.post('/3', (req, res) => {
  const data = req.body.data;
  let index = 0
  const result = []

  data.map((item) => {
    if (item.is_sample === true) {
      const sum = item.sample.reduce((a, b) => parseInt(a) + parseInt(b))
      const mean = sum / item.sample.length

      const Squared = item.sample.map((item) => {
        const y = item - mean
        return Math.pow(y, 2)
      })

      const sumSquared = Squared.reduce((a, b) => parseInt(a) + parseInt(b))
      const variance = sumSquared / (item.sample.length - 1)

      result.push({
        [`Index ${index}`]: Math.sqrt(variance)
      })
      index++
    }
  })

  res.json({
    code: 0,
    result
  })
})

app.listen(3301, () => {
  console.log(`Start on port 3301!`)
});