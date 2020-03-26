import { router as routes } from "./routes/routes";
import express from 'express';
import { mongoConnect } from "./mongo/mongo-link";
import bodyParser from 'body-parser';


const PORT = 8003;
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

// app.post('/', () => { throw new Error('plm') })

console.log('error handler added');

app.use((err, req, res, next) =>
{
    console.log('ERROR HANDLER');
    res.status(500).send('error');
    next();
});


app.listen(PORT, function ()
{
    console.log(`Serverul merge pe portul ${PORT}`)
});

mongoConnect();
