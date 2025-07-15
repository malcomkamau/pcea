import Media from '../models/media.model.js';

export const getMediaItems = async (req, res) => res.json(await Media.findAll());

export const getMediaById = async (req, res) => {
  const media = await Media.findByPk(req.params.id);
  media ? res.json(media) : res.status(404).json({ error: 'Media not found' });
};

export const uploadMedia = async (req, res) => {
  try {
    const fileUrl = `/uploads/${req.file.filename}`;
    const { title, type, description } = req.body;
    const media = await Media.create({ title, type, description, url: fileUrl });
    res.status(201).json({ message: 'Media uploaded', media });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateMedia = async (req, res) => {
  const [updated] = await Media.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Media updated' }) : res.status(404).json({ error: 'Media not found' });
};

export const deleteMedia = async (req, res) => {
  const deleted = await Media.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Media deleted' }) : res.status(404).json({ error: 'Media not found' });
};
