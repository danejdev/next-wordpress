const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(
  query: String,
  { variables }: Record<string, any> = {}
) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { "Content-Type": "application/json" };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getSiteTitle() {
  const data = await fetchAPI(
    `
    query getSiteTitle {
      generalSettings {
        title
      }
    }
    `
  );

  return data?.generalSettings.title;
}
