import dotenv from 'dotenv';
import Server from './models/server';

//Config DotEnv
dotenv.config();

const server = new Server();
server.listen();