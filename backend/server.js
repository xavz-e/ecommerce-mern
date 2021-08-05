const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

//setting config files

dotenv.config({path: 'backend/config/config.env'})


// connectDatabase

connectDatabase();



app.listen(process.env.PORT, () => {
    console.log("The value of PORT is:", process.env.PORT, 'in' , process.env.NODE_ENV) ;

})



