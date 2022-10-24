const { json } = require('body-parser');
const express = require('express');
const env = require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// routes
const guestRoutes = require('./routes/guest');

// app.use
app.use(express.json());
app.use('/api', guestRoutes);


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


app.set('view engine', 'ejs');
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) => {
    // Until integrated with the backend to retrive actual data
    const testCourse = {
        name: "Test Course 1",
        price: "0.99$",
        instructor: "Instructor Name",
        rating: "4.2/5.0 (189 Reviews)"
    }
    res.render(path.join(__dirname + '/views/homepage.ejs'), { testCourse: testCourse });
});
app.post('/data', (req, res, next) => {
    res.status(200).json({ message: req.body });

});





