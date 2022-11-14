let token = "";
const refreshToken = process.env.CC_REFRESH_TOKEN;

const updateToken = async () => {
  const newToken = await fetch(
    `https://authz.constantcontact.com/oauth2/default/v1/token?refresh_token=${refreshToken}&grant_type=refresh_token`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic OWVhY2VhY2MtM2QxNS00MDI2LTk2ZWYtZDhmZWRmOTU4Mzg3OjFYYUdtZjNUYnduRTE1WnJSS0Z1cmc=",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data?.access_token);
  if (!newToken) {
    throw new Error("Token failed");
  }
  token = newToken;
};

export const subscribe = async ({ email_address, name }) => {
  const subscribeRes = await fetch("https://api.cc.email/v3/contacts", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: { address: email_address, permission_to_send: "explicit" },
      first_name: name,
      create_source: "Contact",
      list_memberships: ["48c3bf1c-4a39-11ed-81d9-fa163e0234d4"],
    }),
  });

  if (subscribeRes.status === 401) {
    await updateToken();
    return await subscribe({ email_address, name });
  } else {
    return await subscribeRes.json();
  }
};
