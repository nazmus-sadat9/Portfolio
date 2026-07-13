require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRouter = require("./routes/contactRoute");
const projectRouter = require("./routes/projectRoutes");

const app = express();

app.use(cors({
  origin: "*" //"https://portfolio-frontend-jfy0.onrender.com"
}));

app.use(express.json());

connectDB();

// contact 
app.use('/api/contact', contactRouter);

// projects 
app.use("/api/projects", projectRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`server is running at ${PORT}`);
});
