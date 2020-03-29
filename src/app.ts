import { router as routes } from './routes/routes';
import express from 'express';
import { mongoConnect } from './mongo/mongo-link';
import bodyParser from 'body-parser';
import { SendError } from './utils/local_utils';


const PORT = 8003;
const app = express();


// tslint:disable-next-line: deprecation
app.use(bodyParser.json());
// tslint:disable-next-line: deprecation
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);


// 404 handler
app.use((req, res, next) =>
{
    SendError(res, 404);
    next();
});


// error handler function
app.use((err, req, res, next) =>
{
    console.log('ERROR HANDLER...');

    SendError(res, 500);
    next();
});

console.log('error handler added');

app.listen(PORT, () =>
{
    console.log(`Serverul merge pe portul ${PORT}`);
});

mongoConnect();
