const app = require('./app');

const dotenv = require('dotenv');

dotenv.config({path: 'config/config.env'});
//connect Data Base 
const connectDatabase = require('./config/database')
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
