const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

exports.sendEmail = async (req, res)=>{

  const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.sendStatus(400);
    }

  try {
    const emailEngine = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTHOR_GMAIL,
        pass: process.env.AUTHOR_PASS
      }
    });

    const authormail = {
      from: process.env.AUTHOR_GMAIL,
      to: process.env.AUTHOR_GMAIL,
      subject: "PORTFOLIO MAIL",
      html: `<h2>${name}:</h2><br><p>${message}</p>`
    };

    const usermail = {
      from: process.env.AUTHOR_GMAIL,
      to: email,
      subject: "WELCOME",
      html: `<div style="font-family: sans-serif; padding: 1rem; background-color: #121212; color: #ffffff;"><h2>Welcome ${name},</h2><br> <p style="line-height: 1.6; font-weight: 300;">Thank you so much for explore my portfolio. If you have any openion about my website you can tell me.</p> <br><br><br> <p style="text-align: center; border-top: 1px solid #ffffff; padding: 1rem 0; font-weight: 200;">&copy; 2026 SADAT. All rights reserved</p></div>`
    };

    /*await emailEngine.sendMail(usermail);
    await emailEngine.sendMail(authormail);

    // add in database
    await Contact.create({
      name,
      email,
      message
    });
    */
    console.log(name, email, message);
    return res.sendStatus(200);

  } catch (err) {
    return res.sendStatus(500);
  }
}
