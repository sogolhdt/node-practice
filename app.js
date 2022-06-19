const tourRouter = require ('./routes/tourRoutes');
const userRouter = require ('./routes/userRoutes');

const express = require('express');
const morgan = require('morgan');
const main = express();
main.use(express.json());
main.use('/api/v1/tours',tourRouter);
main.use('/api/v1/users',userRouter);
module.exports=main;