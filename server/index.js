import sequelize from './config/db.config.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/* == MODELS == */
import User from './models/user.model.js';
import Post from './models/post.model.js';
import Event from './models/event.model.js';
import Media from './models/media.model.js';
import Contact from './models/contact.model.js';
import Ministry from './models/ministry.model.js';
import Setting from './models/setting.model.js';

/* == ROUTES == */
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';
import eventRoutes from './routes/event.route.js';
import ministryRoutes from './routes/ministry.route.js';
import mediaRoutes from './routes/media.route.js';
import contactRoutes from './routes/contact.route.js';
import settingRoutes from './routes/settings.route.js';

/* == MIDDLEWARES == */
import { errorHandler } from './middlewares/error.middleware.js';

/* == INITIALIZATION == */
dotenv.config();
const app = express();

app.use(express.json());

/* == API ROUTES == */
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/ministries', ministryRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/settings', settingRoutes);
app.use('/uploads', express.static('uploads'));

app.use(errorHandler);

try {
  await sequelize.authenticate();
  console.log('Database connection established.');
  await sequelize.sync({ alter: true });

  app.listen(process.env.PORT || 5000, () => 
    console.log(`Server running on port ${process.env.PORT} || 5000`)
  );
}catch(err){
  console.error('Error while establishing database connection: ', err.message);
}import Post from '../models/post.model.js';

export const createPost = async (req, res) => {
  const { title, content, category, published } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  const post = await Post.create({ title, content, category, published, imageUrl });
  res.status(201).json(post);
};

export const updatePost = async (req, res) => {
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
  const updatedFields = { ...req.body };
  if (imageUrl) updatedFields.imageUrl = imageUrl;

  const [updated] = await Post.update(updatedFields, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Post updated' }) : res.status(404).json({ error: 'Post not found' });
};
