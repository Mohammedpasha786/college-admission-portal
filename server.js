const express = require('express');
const path = require('path');
const bodyParser = require('express');

const app = express();
const PORT = 3000;

const submissions = []; // Temporary storage

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to serve the admission form
app.get('/admission', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

// Route to handle form submission
app.post('/admission', (req, res) => {
  const { fullName, email, phone, course } = req.body;
  submissions.push({ fullName, email, phone, course });

  res.send(`<h2>Thank you, ${fullName}! You’ve successfully applied for the ${course} program.</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/admission`);
});
