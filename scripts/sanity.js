const SANITY_PROJECT_ID = "h4g60wzb";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2025-02-19";

async function sanityQuery(query) {

  const url =
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;

  console.log("Sanity URL:", url);

  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`Sanity HTTP Error: ${response.status}`);
  }

  const data = await response.json();

  return data.result;
}