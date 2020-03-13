import { router as dorel } from "./routes/api";
import express from 'express';


const PORT = 8003;
const app = express();

app.use('*', dorel);


app.listen(PORT, function ()
{
    console.log(`Serverul merge pe portul ${PORT}`)
})