const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
