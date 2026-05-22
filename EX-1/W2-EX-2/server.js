const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head><title>About</title></head>
            <body>
                <h1>About page</h1>
                <p>About us: at CADT, we love node.js!</p>
            </body>
        </html>
    `);
});

app.get('/contact-us', (req, res) => {
    res.send(`
        <html>
            <head><title>Contact</title></head>
            <body>
                <h1>Contact us</h1>
                <p>You can reach us via email…</p>
            </body>
        </html>
    `);
});

app.get('/products', (req, res) => {
    res.send(`
        <html>
            <head><title>Product</title></head>
            <body>
                <h1>Product</h1>
                <p>Buy one get one…</p>
            </body>
        </html>
    `);
});

app.get('/projects', (req, res) => {
    res.send(`
        <html>
            <head><title>Projects</title></head>
            <body>
                <h1>Project</h1>
                <p>Here are our awesome projects</p>
            </body>
        </html>
    `);
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});