const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { config } = require('process');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    userCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connected successfully!');
  });



const app = require('./app');
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});