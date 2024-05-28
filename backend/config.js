const moongose = require('mongoose');
require("dotenv").config();


moongose
.connect(process.env.MONGODB)
.then(() => console.log('Connected to MONGODB'))
.catch((error) => console.error('Error connecting to mongo',error));