import Ministry from '../models/ministry.model.js';

export const getMinistries = async (req, res) => res.json(await Ministry.findAll());

export const getMinistryById = async (req, res) => {
  const ministry = await Ministry.findByPk(req.params.id);
  ministry ? res.json(ministry) : res.status(404).json({ error: 'Ministry not found' });
};

export const createMinistry = async (req, res) => {
  const ministry = await Ministry.create(req.body);
  res.status(201).json(ministry);
};

export const updateMinistry = async (req, res) => {
  const [updated] = await Ministry.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Ministry updated' }) : res.status(404).json({ error: 'Ministry not found' });
};

export const deleteMinistry = async (req, res) => {
  const deleted = await Ministry.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Ministry deleted' }) : res.status(404).json({ error: 'Ministry not found' });
};
