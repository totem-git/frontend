import nodemailer from "nodemailer";
import { subscribe } from "@/lib/mailchimp";

const packagesCodesToNames = {
  AP: "American Plan Package (AP)",
  CAP: "Complete American Plan Package (CAP)",
  HSK: "Housekeeping Package (HSK)",
};

if (
  !process.env.RESERVATIONS_EMAIL_ADDRESS &&
  process.env.GMAIL_SMTP_PASSWORD
) {
  throw new Error(
    "Please define the RESERVATIONS_EMAIL_ADDRESS and GMAIL_SMTP_PASSWORD environment variables inside .env.local"
  );
}

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
    newsletter,
    adultsCount,
    teensCount,
    childrenCount,
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
    to: process.env.RESERVATIONS_EMAIL_ADDRESS,
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
      `Adults: ${adultsCount}, teens: ${teensCount}, children: ${childrenCount}`,
      `Resort: ${capitalizedResortName}`,
      `Message:`,
      ``,
      `  ${message}`,
    ].join("\n"),
  };

  transport.sendMail(email, (err) => {
    if (err) {
      console.log(err);
    }
  });

  if (newsletter) {
    subscribe({
      email_address: emailAddress,
      first_name: name.split(" ")[0],
      last_name: name.split(" ").slice(1).join(" "),
      phone: phone,
      selected_package: packagesCodesToNames[packageType] || packageType,
      selected_resort: capitalizedResortName,
    });
  }

  res.status(200).json({
    success: true,
    contact: {
      ...req.body,
    },
  });
}
