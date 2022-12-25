require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('public'))

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const adminRouter = require('./routes/adminrouter')
app.use('/admin', adminRouter)

const userRouter = require("./routes/userrouter");
app.use("/user_data", userRouter);

const {carRouter} = require("./routes/carrouter");
app.use("/cars", carRouter);

app.get('/profile', (req,res)=>{
  res.sendFile(`${__dirname}/public/profile.html`)
})

app.get('/dashboard/voted', (req,res)=>{
  res.sendFile(`${__dirname}/public/dashVoted.html`)
})
app.get('/dashboard/nonvoted', (req,res)=>{
  res.sendFile(`${__dirname}/public/dashNonVoted.html`)
})

app.get('/login', (req,res)=>{
  res.sendFile(`${__dirname}/public/login.html`)
})

app.get('/signup', (req,res)=>{
  res.sendFile(`${__dirname}/public/signup.html`)
})

app.get('/logout', (req,res)=>{
  res.sendFile(`${__dirname}/public/logout.html`)
})


const authRouter = require("./routes/authrouter");
const { urlencoded } = require("express");
app.use("/", authRouter);

require("./dbConfig")
  .config()
  .then(() => {
    const listener = app.listen(process.env.PORT || 8000, () => {
      console.log(`server started on port ${listener.address().port}`);
    });
  });
