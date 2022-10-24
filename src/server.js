const { json } = require('body-parser');
const express = require('express');
const env = require('dotenv').config();
const port = process.env.PORT ;
const app = express();
const mongoose = require('mongoose');

// routes
const guestRoutes = require('./routes/guest');
const orgGuest = require('./routes/orgGuest');
const adminRoutes = require('./routes/admin/admin');
const categoryRoutes = require('./routes/category');
const courseRoutes = require('./routes/course');
   
// app.use
app.use(express.json());  
app.use('/api', guestRoutes);
app.use('/api',categoryRoutes);
app.use('/api',adminRoutes);
app.use('/api',courseRoutes);
app.use('/api', orgGuest);


// server listening
app.listen(port, () => console.log(`server running on port ${port}`)); 

//mongo db & mongoose
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.uoerd5c.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,

    }
).then(() => {
    console.log(`database connected`);
});





app.get('/', (req, res, next) => {
    res.send(`checked `);

});
app.post('/data', (req, res, next) => {
    res.status(200).json({message : req.body});

});





