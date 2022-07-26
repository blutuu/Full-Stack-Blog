import express from "express";
import { MongoClient } from "mongodb";
import path from "path";

const app = express();
const port = process.env.PORT || 8000;

// Initialize server
app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());

// DB action
const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    const db = client.db("my-blog");

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

//////////////////////////////
//  * Database Endpoints    //
//////////////////////////////

// Get selected article
app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(articleInfo);
  }, res);
});

// Upvote selected article
app.post("/api/articles/:name/upvote", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    const updates = { $set: { upvotes: articleInfo.upvotes + 1 } };

    await db.collection("articles").updateOne({ name: articleName }, updates);

    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

// View upvotes of selected article
app.post("/api/articles/:name/view-upvotes", (req, res) => {
  const articleName = req.params.name;
});

// Add Comment to selected article
app.post("/api/articles/:name/add-comment", (req, res) => {
  withDB(async (db) => {
    const { username, text } = req.body;
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    const updates = {
      $set: {
        comments: articleInfo.comments.concat({ username, text }),
      },
    };

    await db.collection("articles").updateOne({ name: articleName }, updates);

    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

// Mongo: View info from all articles
app.get("/api/articles", async (req, res) => {
  withDB(async (db) => {
    const articles = await db.collection("articles").find({}).toArray();

    res.status(200).json(articles);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => console.log("Listening on port 8000"));
