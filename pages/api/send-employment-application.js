import nodemailer from "nodemailer";
import nextConnect from "next-connect";
import multer from "multer";
import FormData from "form-data";
import fetch from "node-fetch";
import { createReadStream } from "fs";
import { getStrapiURL } from "utils/api";
import { getStrapiMedia } from "utils/media";

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads/applications_resume",
    filename: (req, file, cb) => {
      const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        `${req.body.name.replace(/[/\\?%*:|"<>]/g, "-")}-${uniquePrefix}.pdf`
      );
    },
  }),
});

const handler = nextConnect({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.single("resume");

handler.use(uploadMiddleware);

handler.post(async (req, res) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(req.body));
  formData.append(
    "files.resume",
    createReadStream(req.file.path),
    req.file.filename
  );

  let strapiResponse = await fetch(getStrapiURL("/employment-applications"), {
    method: "POST",
    body: formData,
  });

  if (!strapiResponse.ok) {
    res.status(500).json({ error: "Error sending application" });
    return;
  }

  let application = await strapiResponse.json();

  const {
      name,
      email: emailAddress,
      job_title,
      location,
      position_length,
      phone,
    } = req.body,
    resume_url = getStrapiMedia(application.resume.url);

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
    to: "info@totemresorts.com",
    cc: ["totemresortsmkt@gmail.com"],
    subject: `Website employment application: ${name} - ${job_title}`,
    text: [
      `Name: ${name}`,
      `Mail: ${emailAddress}`,
      `Phone: ${phone}`,
      `Job Title: ${job_title}`,
      `Location: ${location}`,
      `Position Length: ${position_length}`,
      `Resume download url: ${resume_url}`,
      ``,
      ``,
      `This application was also stored in the CMS of Totem Resorts.`,
      `If you need access to the CMS, please contact us at dev@digitalmix.ar.`,
    ].join("\n"),
  };

  transport.sendMail(email, (err, info) => {
    if (err) {
      console.log(err);
    }
  });

  res.status(200).json({
    success: true,
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
