import express, { Request, Response } from 'express';

const app = express();

const port = 3000;

// Make sure you understand the following line of code.

app.get('/', (req: Request, res: Response) => {
    res.send('Pray4Me');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
