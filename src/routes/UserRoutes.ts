import { Request, Response, Router } from 'express';
import User from '../models/User';
import Post from '../models/Post';


class UserRoutes {


    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', this.getUsers);
        this.router.post('/', this.createUsers);
        this.router.delete('/', this.deleteUser);
        this.router.get('/:id', this.getUser);
        this.router.put('/:id', this.updateUser);
    }

    getUsers(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    getUser(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    updateUser(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    deleteUser(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
    createUsers(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;