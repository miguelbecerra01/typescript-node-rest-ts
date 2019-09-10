import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet'; //middleware de seguridad
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import postRoutes from './routes/PostRoutes';

class Server {

    //app express
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        //DB Config
        const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/rest-api-ts-db';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(db => {
            console.log('MongoDB is connected');
        });

        //Settings
        this.app.set('port', process.env.PORT || 3000);

        //Middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: false
        }));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());


    }

    routes() {
        //usa las rutas del modulo indexRoutes
        this.app.use(indexRoutes);
        this.app.use('/api/posts', postRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        })
    }

}

const server = new Server();
server.start();