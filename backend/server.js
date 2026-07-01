require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
 origin: "*"
}));

app.use('/api/contact', require('./routes/contactRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`server is running at ${PORT}`);
});
