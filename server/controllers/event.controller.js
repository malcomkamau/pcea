import Event from '../models/event.model.js';

export const getEvents = async (req, res) => res.json(await Event.findAll());

export const getEventById = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  event ? res.json(event) : res.status(404).json({ error: 'Event not found' });
};

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

export const updateEvent = async (req, res) => {
  const [updated] = await Event.update(req.body, { where: { id: req.params.id } });
  updated ? res.json({ message: 'Event updated' }) : res.status(404).json({ error: 'Event not found' });
};

export const deleteEvent = async (req, res) => {
  const deleted = await Event.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Event deleted' }) : res.status(404).json({ error: 'Event not found' });
};
