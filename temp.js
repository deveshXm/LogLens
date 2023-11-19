const url = `http://localhost:3001/query?resourceId=server-1&timestampStart=2023-08-15T00:00:00Z&timestampEnd=2023-09-15T23:59:59Z`;

// Make the HTTP request with a GET method
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
