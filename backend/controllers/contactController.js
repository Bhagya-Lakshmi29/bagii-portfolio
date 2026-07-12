// Temporary in-memory storage for messages
const messages = [];

exports.submitContactForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    date: new Date()
  };

  messages.push(newMessage);
  console.log('New message received:', newMessage);

  res.status(200).json({ success: true, message: 'Message sent successfully!' });
};
