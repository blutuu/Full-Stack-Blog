import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;
const articlesInfo = {
  'learn-react': {
    upvotes: 0
  },
  'learn-node': {
    upvotes: 0
  },
  'my-thoughts-on-resumes': {
    upvotes: 0
  }
};

app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1; 
  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`);
});

app.post('/api/articles/:name/view-upvotes', (req, res) => {
  const articleName = req.params.name;

  res.status(200).send(`${articleName} has ${articlesInfo[articleName].upvotes} upvotes.`);
});

app.listen(port, () => console.log('Listening on port 8000')); 
 
// process.on('SIGINT', () => { console.log("exiting…"); process.exit(); });
// process.on('exit', () => { console.log("exiting…"); process.exit(); });