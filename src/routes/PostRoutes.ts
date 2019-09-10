import { Request, Response, Router } from 'express';

class PostRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }


    getPosts(req: Request, res: Response) {
        res.send('Hi from Posts');
    }

    getPost() { }
    createPost() { }
    updatePost() { }
    deletePost() { }

    routes() {
        this.router.get('/', this.getPosts);
        this.router.get('/:id', this.getPost);
        this.router.post('/', this.createPost);
        this.router.put('/:id', this.updatePost);
        this.router.delete('/:id', this.deletePost);

    }
}

const postRoutes = new PostRoutes();
export default postRoutes.router;