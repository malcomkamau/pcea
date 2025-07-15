import Setting from '../models/setting.model.js';

export const getSettings = async (req, res) => res.json(await Setting.findAll());

export const createSetting = async (req, res) => {
  const setting = await Setting.create(req.body);
  res.status(201).json(setting);
};

export const updateSetting = async (req, res) => {
  const [updated] = await Setting.update(req.body, { where: { key: req.params.key } });
  updated ? res.json({ message: 'Setting updated' }) : res.status(404).json({ error: 'Setting not found' });
};
