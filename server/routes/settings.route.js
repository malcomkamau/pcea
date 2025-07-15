import express from 'express';
import {
  getSettings, updateSetting, createSetting
} from '../controllers/setting.controller.js';

const router = express.Router();

router.get('/', getSettings);
router.post('/', createSetting);
router.put('/:key', updateSetting);

export default router;
