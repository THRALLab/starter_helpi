// server.js
const OpenAI = require('openai');
const openai = new OpenAI();

async function generateRap() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Come up with a rap." }],
        model: "gpt-3.5-turbo",
      });
    
      console.log(completion.choices[0]);
    return "This is a generated rap!"; // Example rap text
}
  
  

const express = require('express');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3017;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Define Root Route Handler
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Handle GET requests to '/generate-rap' endpoint
app.get('/generate-rap', (req, res) => {
  try {
    const rap = generateRap(); // Call function to generate rap dynamically
    res.send(rap); // Send the dynamically generated rap text as the response
  } catch (error) {
    console.error('Error generating rap:', error);
    res.status(500).send('Error generating rap');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
