const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// =========================================== JUST A NOTE FOR MYSELF (CAN IGNORE IT) =======================================
// express.urlencoded() = reads the data from HTML forms (like <input> fields) and converts it into a JavaScript object.
// ==========================================================================================================================
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/contact', (req, res) => {
    res.send(`
        <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/contact', (req, res) => {
    const name = req.body.name;

    console.log('Submitted name:', name);

    if (!name || name.trim() === '') {
        return res.status(400).send(`
            <h1>Error</h1>
            <p>Name cannot be empty.</p>
            <a href="/contact">Go back</a>
        `);
    }

    fs.appendFile(path.join(__dirname, 'submissions.txt'), name + '\n', err => {
        if (err) {
            console.error('File write error:', err);
            return res.status(500).send(`
                <h1>Server error</h1>
                <p>Could not save your submission.</p>
                <a href="/contact">Try again</a>
            `);
        }

        res.send(`
            <h1>Thank you, ${name}!</h1>
            <p>Submission received.</p>
            <a href="/contact">Submit again</a>
        `);
    });
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});