import { connection, set as mongooseSet, connect as mongooseConnect } from 'mongoose';
import { debug } from '../utils/local_utils';

// const db = `mongodb://localhost:27017/proba`
const db = `mongodb://user_proba:user_proba@192.168.100.105:27017/proba`

export let mongoConnectState: boolean = false;

export async function mongoConnect()
{
    console.log('Starting mongo connection...');
    mongooseSet('bufferCommands', false);

    connection.on('error', error => { debug('mongo: ' + error.name, 'MONGO') })
    connection.on('disconnected', () => { debug('mongo: Disconnected', 'MONGO') })
    connection.on('connected', () => 
    {
        debug('mongo: Connected', 'MONGO')
        mongoConnectState = true;
    })

    const ret = await mongooseConnect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

}

