const SANITY_PROJECT_ID = "h4g60wzb";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2025-02-19";

async function sanityQuery(query) {
  const url =
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Sanity HTTP Error: ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}

// Sanity image asset ref: image-{assetId}-{width}x{height}-{format}
function getSanityImageUrl(image) {
  if (!image?.asset?._ref) return "";
  const match = image.asset._ref.match(/^image-(.+)-(\d+x\d+)-(\w+)$/);
  if (!match) return "";
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${match[1]}-${match[2]}.${match[3]}`;
}

function formatSanityDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date)) return "";
  return new Intl.DateTimeFormat("fa-IR", { dateStyle: "long" }).format(date);
}