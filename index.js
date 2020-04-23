const express = require('express');
const expressGraphQl = require('express-graphql');
const typeDefs = require('./schema');
const root = require('./resolver');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(
  '/query',
  expressGraphQl({
    schema: typeDefs,
    rootValue: root,
    graphiql: true,
  })
);


app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to my GQL World',
  });
});


app.listen(8080, () => {
  console.log('Server Running at http://localhost:8080/query');
});
