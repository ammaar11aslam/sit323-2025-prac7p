const express = require("express");
const { connectDB, getDB } = require("./db");

const app = express();
app.use(express.json());

connectDB();

//GET
app.get("/items", async (req, res) => {
  const items = await getDB().collection("items").find().toArray();
  res.json(items);
});

// POST
app.post("/items", async (req, res) => {
  const result = await getDB().collection("items").insertOne(req.body);
  res.json(result);
});

// PUT
const { ObjectId } = require("mongodb");

app.put("/items/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getDB().collection("items").updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send("Item not found.");
    }

    res.json(result);
  } catch (err) {
    console.error("PUT error:", err);
    res.status(500).send("Server error");
  }
});


// DELETE 
app.delete("/items/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await getDB().collection("items").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).send("Item not found.");
    }

    res.json(result);
  } catch (err) {
    console.error("DELETE error:", err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
