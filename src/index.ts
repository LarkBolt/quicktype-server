import express from "express";
import { quicktypeJSON } from "./quick-type.generator";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/json", async (req, res) => {
  const metaData = req.body;
  const { targetLanguage, typeName, jsonString, rendererOptions } = metaData;
  try {
    const result = await quicktypeJSON(
      targetLanguage,
      typeName,
      jsonString,
      rendererOptions,
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`🚀 at http://localhost:${port}`);
});
