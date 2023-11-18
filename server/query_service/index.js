const { Client } = require("@elastic/elasticsearch");

// Replace with your Elasticsearch service URL
const elasticsearchUrl = "http://localhost:9200";

const client = new Client({
  node: elasticsearchUrl,
  requestParams: { headers: { "Content-Type": "application/json" } },
});

// Fetch data from Elasticsearch based on a query
async function fetchData(index, query) {
  try {
    const { body } = await client.search({
      index,
      body: {
        query,
      },
    });

    // Return the hits from the response body
    return body.hits.hits;
  } catch (error) {
    console.error("Error fetching data from Elasticsearch:", error);
    throw error; // You can handle the error as per your application's needs
  }
}

// Example usage
const indexName = "your_index_name";
const searchQuery = {
  match: {
    level: "error",
  },
};

// Fetch data and log the results
fetchData(indexName, searchQuery)
  .then((hits) => {
    console.log("Fetched data:", hits);
  })
  .catch((error) => {
    // Handle errors
  });
