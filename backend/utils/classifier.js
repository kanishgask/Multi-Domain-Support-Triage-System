const { classifyTicket } = require("../utils/classifier");

let tickets = [];

exports.createTicket = (req, res) => {
  const { title, description } = req.body;

  const classification = classifyTicket(description);

  const ticket = {
    id: tickets.length + 1,
    title,
    description,
    category: classification.category,
    priority: classification.priority,
    createdAt: new Date()
  };

  tickets.push(ticket);

  res.status(201).json(ticket);
};

exports.getTickets = (req, res) => {
  res.json(tickets);
};
