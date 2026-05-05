require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

const emailEngine = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user: process.env.AUTHOR_GMAIL,
    pass: process.env.AUTHOR_PASS
  }
});

app.post('/api/contact', async (req, res)=>{
  const { name, email, message } = await req.body;

  let isValid = true;

  if (name === '') {
    isValid = false;
  }

  if (email === ''){
    isValid = false;
  }

  if (message === '') {
    isValid = false;
  }

  if (isValid) {
    const authormail = {
      from: process.env.AUTHOR_GMAIL,
      to: process.env.AUTHOR_GMAIL,
      subject: "PORTFOLIO MAIL",
      html: `<h2>${name}:</h2><br><p>${message}</p>`
    }

    const usermail = {
      from: process.env.AUTHOR_GMAIL,
      to: email,
      subject: "WELCOME",
      html: `<div style="font-family: sans-serif; padding: 0 1rem; background-color: #121212; color: #ffffff;"><h2>Welcome ${name},</h2><br> <p style="line-height: 1.6; font-weight: 300;">Thank you so much for explore my portfolio. If you have any openion about my website than you can tell me and I will try to improve it.</p> <br><br><br> <p style="text-align: center; border-top: 1px solid #ffffff; padding: 1rem 0; font-weight: 200;">&copy; 2026 SADAT. All rights reserved</p></div>`
    }

    try {
      await emailEngine.sendMail(usermail);
      await emailEngine.sendMail(authormail);

      return res.sendStatus(200);

    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }

  }


});

app.listen(PORT, ()=>{
  console.log("server started on: %d", PORT);
});
