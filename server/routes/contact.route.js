import express from 'express';
import { createMessage, getMessages, deleteMessage } from '../controllers/contact.controller.js';

const router = express.Router();

router.get('/', getMessages); // admin only
router.post('/', createMessage); // public
router.delete('/:id', deleteMessage); // admin

export default router;
