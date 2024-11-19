const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, organizer: req.user.id });
    await event.save();
    res.status(201).json({ success: true, event });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json({ success: true, events });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
