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
    resort,
    email_subject,
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

  const resortWordsArray = resort
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1));
  const capitalizedResortName = resortWordsArray.join(" ");
  const email = {
    from: "totemresortsmkt@gmail.com",
    to: "reservations@totemresorts.com",
    replyTo: emailAddress,
    cc: ["totemresortsmkt@gmail.com"],
    subject: `Totem Resorts ${email_subject}: ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Mail: ${emailAddress}`,
      `Date of Check-in: ${dateCheckin}`,
      `Date of Check-out: ${dateCheckout}`,
      `Package type of interest: ${packageType}`,
      `Resort: ${capitalizedResortName}`,
      `Message:`,
      ``,
      `  ${message}`,
    ].join("\n"),
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
