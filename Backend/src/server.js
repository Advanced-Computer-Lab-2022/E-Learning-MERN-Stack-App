const env = require('dotenv').config();
const { json } = require('body-parser');
const express = require('express');
const port = process.env.PORT;
const app = express();
const mongoose = require('mongoose');

// routes
const guestRoutes = require('./routes/guest');
const orgGuest = require('./routes/orgGuest');
const adminRoutes = require('./routes/admin/admin');
const categoryRoutes = require('./routes/category');


// app.use

app.use(express.json());
app.use('/api', guestRoutes);
app.use('/api', categoryRoutes);
app.use('/api', adminRoutes);
app.use('/api', orgGuest);


// server listening
app.listen(port, () => console.log(`server running on port ${port}`));

//mongo db & mongoose
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.uoerd5c.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }
).then(() => {
    console.log(`database connected`);
});





app.get('/', (req, res, next) => {
    res.send(`checked`);

});
app.post('/data', (req, res, next) => {
    res.status(200).json({ message: req.body });
});




// Mina's Modifications
const path = require("path");
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/guestSignin', (req, res, next) => {
    res.render(path.join(__dirname + '/views/guestSignin'));
});
app.get('/guestSignUp', (req, res, next) => {
    res.render(path.join(__dirname + '/views/guestSignup'));
});

app.get('/addCompany', (req, res, next) => {
    res.render(path.join(__dirname + '/views/addCompany'));
});
app.get('/addOrgGuest', (req, res, next) => {
    res.render(path.join(__dirname + '/views/addOrgGuest'));
});
app.get('/adminSignin', (req, res, next) => {
    res.render(path.join(__dirname + '/views/adminSignin'));
});
app.get('/adminSignup', (req, res, next) => {
    res.render(path.join(__dirname + '/views/adminSignup'));
});
