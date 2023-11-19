const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");

const defaultAddress = "http://localhost:9200";
// Connect to Elasticsearch
const client = new Client({
  node: process.env.ELASTIC_ADDR ? process.env.ELASTIC_ADDR : defaultAddress,
});

/* GET logs from Elasticsearch within a time range. */
router.get("/", async function (req, res, next) {
  try {
    const {
      level,
      message,
      resourceId,
      timestampStart,
      timestampEnd,
      traceId,
      spanId,
      commit,
      parentResourceId,
    } = req.query;

    console.log(req.query);

    const response = await client.search({
      index: "logs-index",
      body: {
        query: {
          bool: {
            must: [
              level && {
                fuzzy: { level: { value: level, fuzziness: "AUTO" } },
              }, // Fuzzy matching for log level
              message && { match: { message: message } }, // Exact matching for log message
              resourceId && {
                fuzzy: { resourceId: { value: resourceId, fuzziness: "AUTO" } },
              }, // Fuzzy matching for resource ID
              {
                range: {
                  timestamp: {
                    ...(timestampEnd && { lte: timestampEnd }),
                    ...(timestampStart && { gte: timestampStart }),
                  },
                },
              }, // Filter by timestamp range
              traceId && {
                fuzzy: { traceId: { value: traceId, fuzziness: "AUTO" } },
              }, // Fuzzy matching for trace ID
              spanId && {
                fuzzy: { spanId: { value: spanId, fuzziness: "AUTO" } },
              }, // Fuzzy matching for span ID
              commit && {
                fuzzy: { commit: { value: commit, fuzziness: "AUTO" } },
              }, // Fuzzy matching for commit
              parentResourceId && {
                fuzzy: {
                  parentResourceId: {
                    value: parentResourceId,
                    fuzziness: "AUTO",
                  },
                },
              }, // Fuzzy matching for parent resource ID
            ].filter(Boolean), // Remove undefined filters
          },
        },
      },
    });

    console.log(response.body.hits.hits);
    res.json(response.body.hits.hits);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
