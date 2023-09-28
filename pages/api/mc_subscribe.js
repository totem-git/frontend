import { subscribe } from "@/lib/mailchimp";
import fetch from "node-fetch";

export default async (req, res) => {
  const { token, name, email, phone, selected_resort, selected_package } =
    req.body;
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

  const contact_id = await subscribe({
    email_address: email,
    first_name: name?.split(" ")[0],
    last_name: name?.split(" ").slice(1).join(" "),
    phone,
    selected_resort,
    selected_package,
  });

  res.status("201");
  res.json({ contact_id: contact_id ?? null });
};
