const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 

// Configurazione EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => {
    const name = req.cookies.name; // Legge il cookie "name"
    if (name) {
        // Se il cookie esiste, mostra la pagina di saluto
        res.render('greet', { message:'Bentornato', name: name });
    } else {
        // Se non esiste, mostra il form
        res.render('form');
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('name'); // Cancella il cookie chiamato "name"
    res.redirect('/'); // Reindirizza alla home page
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

