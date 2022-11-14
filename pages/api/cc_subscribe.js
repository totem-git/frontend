import { subscribe } from "@/lib/constant-contact";
import fetch from "node-fetch";

export default async (req, res) => {
  const { token, name, email } = req.body;
  const secret = process.env.RECAPTCHA_SECRET;

  const recaptchaVerification = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  ).then((res) => res.json());

  if (!recaptchaVerification.success) {
    res.status("400");
    res.json({ message: "Failed verification" });
    return;
  }

  const subscribeRes = await subscribe({ email_address: email, name });

  res.status("201");
  res.json(subscribeRes);
};
