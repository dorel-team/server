import { set as mongooseSet, connect as mongooseConnect } from 'mongoose';

// const db = `mongodb://localhost:27017/proba`
const db = `mongodb://user_proba:user_proba@192.168.100.105:27017/proba`

export let mongoConnectState: boolean = false;

export async function mongoConnect()
{
    console.log('Starting mongo connection...');
    mongooseSet('bufferCommands', false);

    const ret = await mongooseConnect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err =>
    {
        if (err)
        {
            console.error(`Conectarea la Mongo a esuat: ${err}`);
        } else
        {
            console.log(`Conectat la baza de date: ${db}`);
            mongoConnectState = true;
        }
    })
}