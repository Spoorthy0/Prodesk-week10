import User from '../models/User.js';

export const createUser = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
        return res.status(409).json({ message: "Email already in use" });
    }

    const user = await User.create({ name, email });
    res.status(201).json(user);
};

export const Login = (req, res) => {
    const { username, password } = req.body;

  if (username && password) {
    return res.json({
      token: "prodesk-mock-demo-jwt-token-12345"
    });
  }

  res.status(400).json({
    message: "Username and password required"
  });
};