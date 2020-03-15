import { router as routes } from "./routes/routes";
import express from 'express';
import { mongoConnect } from "./mongo/mongo-link";
import bodyParser from 'body-parser';


const PORT = 8003;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((err, req, res, next) =>
{
    if (res.headersSent) {
        return next(err)
      }
      res.status(500)
      res.render('error', { error: err })
});

app.use('/', routes);


app.listen(PORT, function ()
{
    console.log(`Serverul merge pe portul ${PORT}`)
});

mongoConnect();