import express from 'express';
import cors from 'cors';
import counterService from './counterService.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/counter', (_, res) => {
    res.json(counterService.getValue());
});

app.post('/counter/increment', (_, res) => {
    const newValue = counterService.increment();
    res.json(newValue);
});

app.post('/counter/decrement', (_, res) => {
    const newValue = counterService.decrement();
    res.json(newValue);
});

app.put('/counter', (req, res) => {
    try {
        const { value } = req.body;
        const newValue = counterService.update(value);
        res.json(newValue);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
