import express from 'express';
import expressGraphQl from 'express-graphql';
import typeDefs from './schema';
import root from './resolver';
import cors from 'cors';

const dotenv = require('dotenv');
const app = express();

app.use(cors());

app.use(
  '/query',
  expressGraphQl({
    schema: typeDefs,
    rootValue: root,
    graphiql: false,
  })
);


app.get('/', (req, res) => {
  return res.json({
    msg: 'Welcome to my GQL World',
  });
});

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('Server Running at http://localhost:8080/query');
});
