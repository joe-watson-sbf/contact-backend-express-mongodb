import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

// connection mongoose
mongoose.Promise = global.Promise;
const url = 'mongodb+srv://joewatsonsbf:FOqsq0mKAA7FOrgH@learn-mdb'+
            '.lfvet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url)


// body parser 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);


app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send("MY FIST APP IS RUNNING ON PORT " + PORT);
})

app.listen(PORT, ()=>{
    console.log("MY FIST APP IS RUNNING ON PORT " + PORT);
})