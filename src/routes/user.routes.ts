import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import multer from 'multer';

const router = Router();
const upload = multer();

// router.post('/users', upload.none(), UserController.create);
// router.get('/users', upload.none(), UserController.getAll);

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getById);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

export default router;
