import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;
dotenv.config({ path: './.env' });

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL)


// body parser 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);


app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send("SERVER RUNNING ON PORT " + PORT);
})

app.listen(PORT, ()=>{
    console.log("SERVER RUNNING ON PORT " + PORT);
})