import { router as routes } from './routes/routes';
import express, { response } from 'express';
import { mongoConnect } from './mongo/mongo-link';
import bodyParser from 'body-parser';
import { IResponse } from './interfaces/IResponse';
import { respond } from './utils/local_utils';


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
    respond(res, 404, `Oops, the resource you're looking for is ... gone`);
    next();
});


// error handler function
app.use((err, req, res, next) =>
{
    console.log('ERROR HANDLER');

    respond(res, 500, 'Oops, something wrong happened...');
    next();
});

console.log('error handler added');

app.listen(PORT, () =>
{
    console.log(`Serverul merge pe portul ${PORT}`);
});

mongoConnect();
