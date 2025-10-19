require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const hashUrl = require('./utils/hashBase62');
const ShortUrl = require('./models/ShortUrl');

const app = express();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://22071012:${password}@cluster0.toaqgy4.mongodb.net/url_shortener?retryWrites=true&w=majority&appName=Cluster0`;


// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true, useUnifiedTopology: true
// });

mongoose.connect(connectionString, {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find().sort({ created_at: -1 });
  res.render('index', { shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  const fullUrl = req.body.fullUrl;
  let short;
  let existed = true;
  // Ensure unique short url
  while (existed) {
    short = hashUrl(fullUrl);
    existed = await ShortUrl.findOne({ short });
  }
  const newUrl = new ShortUrl({ full: fullUrl, short });
  await newUrl.save();
  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const entry = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (!entry) return res.sendStatus(404);
  entry.clicks += 1;
  await entry.save();
  res.redirect(entry.full);
});

// Delete URL endpoint
app.post('/delete/:shortUrl', async (req, res) => {
  await ShortUrl.deleteOne({ short: req.params.shortUrl });
  res.redirect('/');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port', process.env.PORT || 5000);
});
