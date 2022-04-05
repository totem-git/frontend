import nodemailer from "nodemailer";

export default function sendContact(req, res) {
  const {
    name,
    email: emailAddress,
    message,
    "date-checkin": dateCheckin,
    "date-checkout": dateCheckout,
    phone,
    "package-type": packageType,
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
    to: "reservations@totemresorts.com",
    cc: ["totemresortsmkt@gmail.com"],
    subject: `Website contact: ${name}`,
    text: `Name: ${name},
Phone: ${phone},
Mail: ${emailAddress},
Date of check-in: ${dateCheckin},
Date of check-out: ${dateCheckout},
Pakcage type of interest: ${packageType},
Message: 

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
