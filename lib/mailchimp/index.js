import mcClient from "@mailchimp/mailchimp_marketing";

const LIST_ID = process.env.MAILCHIMP_LIST_ID;
const TAG = "WEB";

mcClient.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export const subscribe = async ({
  email_address,
  first_name,
  last_name,
  selected_resort,
  selected_package,
  phone,
}) => {
  const response = await mcClient.lists.addListMember(LIST_ID, {
    email_address,
    status: "subscribed",
    email_type: "html",
    tags: [TAG],
    merge_fields: {
      FNAME: first_name,
      LNAME: last_name,
      PRFRESORT: selected_resort,
      PREPACKAGE: selected_package,
      PHONE: phone,
    },
  });

  return response.contact_id;
};
