import User from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'User not found' });
};

export const updateUser = async (req, res) => {
  const [updated] = await User.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'User updated' }) : res.status(404).json({ error: 'User not found' });
};

export const deleteUser = async (req, res) => {
  const deleted = await User.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'User deleted' }) : res.status(404).json({ error: 'User not found' });
};
