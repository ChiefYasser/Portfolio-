const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'portfolio_db'
});

db.connect(err => {
    if (err) {
        console.error('Pas connecter DB', err);
    } else {
        console.log('Connecter DB');  
    }
});

// API Route to Handle Form Submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }

    const sql = 'INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        res.status(200).json({ success: true, message: 'Message bien reçu' });
    });
});

// Serve the portfolio website
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server khdam le port :${port}`);
});
