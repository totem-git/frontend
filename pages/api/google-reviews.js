export default async (req, res) => {
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  const data = await fetch(detailsUrl)
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error fetching place details:", err);
    });
  res.status(200).json({
    data,
  });
};
