import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';



const app = express();
app.use(morgan('dev'));

connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.send("Hello World");
})

export default app;