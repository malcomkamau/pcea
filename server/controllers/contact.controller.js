import Contact from '../models/contact.model.js';

export const createMessage = async (req, res) => {
  const message = await Contact.create(req.body);
  res.status(201).json({ message: 'Message received', data: message });
};

export const getMessages = async (req, res) => res.json(await Contact.findAll());

export const deleteMessage = async (req, res) => {
  const deleted = await Contact.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Message deleted' }) : res.status(404).json({ error: 'Message not found' });
};
