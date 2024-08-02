import express from "express";
import cors from "cors";
import scrapeMedicines from './scripts/basic.js';

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // to parse json in body
app.use(express.static("public")); // to use static public folder


app.get("/medicines/:query",async (req, res)=>{
  console.log(req.params.query)
  const medicines = await scrapeMedicines(req.params.query);
  // console.log(medicines)
    res.json({medicines : medicines});
})

app.listen(8000, ()=>{
    console.log("App is listening on port 8000");
});

