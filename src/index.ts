import express from "express";
import { quicktypeJSON } from "./quick-type.generator";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/json", async (req, res) => {
  const metaData = req.body;
  const { targetLanguage, typeName, jsonString } = metaData;
  const result = await quicktypeJSON(targetLanguage, typeName, jsonString);
  res.send(result);
});

app.listen(port, () => {
  console.log(`🚀 at http://localhost:${port}`);
});
