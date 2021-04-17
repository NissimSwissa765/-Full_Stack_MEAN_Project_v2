const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserDB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
