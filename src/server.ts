import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Ola, Typescript!' });
});
app.listen(3000);
