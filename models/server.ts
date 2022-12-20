import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private paths = {
        usuarios: '/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';


        //Inicar conexion bd
        this.conectarDb();

        //Llamar Middlewares
        this.middlewares();
        
        //Definir rutas
        this.routes();
    }

    middlewares() {
        //Configurar CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta publica
        //Directorio publico
        this.app.use(express.static('public'));
    }

    async conectarDb(){
        try {
            await db.authenticate();
            console.log('DB conectada')
        } catch (error:any) {
            console.log(error);
            throw new Error(error);
        }
    }

    routes(){
        this.app.use(this.paths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('¡Servidor iniciado!');
        })
    }

}

export default Server;