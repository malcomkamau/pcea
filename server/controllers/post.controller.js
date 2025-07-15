import Post from '../models/post.model.js';

export const createPost = async (req, res) => {
  try {
    const { title, content, category, published } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const post = await Post.create({ title, content, category, published, imageUrl });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
    const updatedFields = { ...req.body };
    if (imageUrl) updatedFields.imageUrl = imageUrl;

    const [updated] = await Post.update(updatedFields, { where: { id: req.params.id } });
    updated
      ? res.json({ message: 'Post updated' })
      : res.status(404).json({ error: 'Post not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.destroy({ where: { id: req.params.id } });
    deleted
      ? res.json({ message: 'Post deleted' })
      : res.status(404).json({ error: 'Post not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
