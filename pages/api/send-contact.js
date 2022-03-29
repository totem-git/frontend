import nodemailer from "nodemailer";

export default function sendContact(req, res) {
  const {
    name,
    email: emailAddress,
    message,
    "date-checkin": dateCheckin,
    "date-checkout": dateCheckout,
  } = req.body;

  if (message.includes("http")) {
    return res.status(400).json({
      message: "Message cannot contain a link",
    });
  }

  var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "totemresortsmkt@gmail.com",
      pass: process.env.GMAIL_SMTP_PASSWORD,
    },
  });

  const email = {
    from: "totemresortsmkt@gmail.com",
    to: emailAddress,
    subject: `Website contact: ${name}`,
    text: `name: ${name},
email: ${emailAddress},
date of check-in: ${dateCheckin},
date of check-out: ${dateCheckout},
message: 

  ${message}`,
  };

  transport.sendMail(email, (err, info) => {
    if (err) {
      console.log(err);
    }
  });

  res.status(200).json({
    success: true,
    contact: {
      ...req.body,
    },
  });
}
