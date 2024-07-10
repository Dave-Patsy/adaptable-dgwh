const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const todosRouter = require('./routes/todos');

const app = express();

const corsOptions = {
  // origin: "https://t3-portfolio-a.vercel.app",
  origin: "*",
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use('/todos', todosRouter);

app.get('/test',(req,res)=>{
  const origin =
    req.headers.origin || req.headers.referer || "Origin not found";
  res.send(`Request Origin: ${origin}`);
})


module.exports = app;
