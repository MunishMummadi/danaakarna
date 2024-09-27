const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());  // Enable CORS for all requests
app.use(bodyParser.json());  // Parse JSON requests

// In-memory storage for campaigns (you can use a real database like MongoDB later)
let campaigns = [
  {
    id: 1,
    title: 'Help John with Medical Expenses',
    amount: 50000,
    description: 'John needs urgent funds for surgery.',
  },
  {
    id: 2,
    title: 'Support Mary’s Education',
    amount: 100000,
    description: 'Mary is raising funds to pay for her university tuition.',
  }
];

// Get all campaigns
app.get('/campaigns', (req, res) => {
  res.json(campaigns);
});

// Get details of a single campaign by ID
app.get('/campaigns/:id', (req, res) => {
  const { id } = req.params;
  const campaign = campaigns.find(c => c.id == id);

  if (campaign) {
    res.json(campaign);
  } else {
    res.status(404).json({ message: 'Campaign not found' });
  }
});

// Create a new campaign
app.post('/campaigns', (req, res) => {
  const { title, amount, description } = req.body;
  const id = campaigns.length + 1;
  const newCampaign = { id, title, amount, description };

  campaigns.push(newCampaign);
  res.status(201).json({ message: 'Campaign created', campaign: newCampaign });
});

// Start the server
app.listen(5000, () => {
  console.log('Backend server is running on port 5000');
});
