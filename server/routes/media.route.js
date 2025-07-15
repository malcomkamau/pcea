import express from 'express';

import {
  getMediaItems, getMediaById, uploadMedia, updateMedia, deleteMedia
} from '../controllers/media.controller.js';
import { upload } from '../middlewares/upload.middleware.js';

const router = express.Router();

router.get('/', getMediaItems);
router.get('/:id', getMediaById);

router.post('/', upload.single('file'),uploadMedia);

router.put('/:id', updateMedia);
router.delete('/:id', deleteMedia);

export default router;
