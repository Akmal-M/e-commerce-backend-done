import express from 'express';
import data from "./data";

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products)
});

app.listen(5000, () => {console.log('backend started at localhost://5000') });


