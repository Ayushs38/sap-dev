import {vendors, users} from '../models/dataStore.js'

export const login = (req, res) =>{
    const {email, password} = req.body;
    const user = users.find(u => u.email === email && u.password ===password);

    if(!user){
        return res.status(401).json({message: "Invalid email or password"});
    }

    req.session.user = user;

    // Get session cookie value (for debugging, not recommended for production)
    const sessionCookie = req.sessionID;
     
    res.json({
        message: "Login Successful",
        user: {userId: user.userId, name: user.name, org: user.organization, email: user.email},
        sessionCookie // This is session ID,
    });
}

export const getUserDetails = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const user = users.find(u => u.userId === req.session.user.userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ user: { userId: user.userId, name: user.name, email: user.email, organization: user.organization } });
};

export const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: "Logout failed" });
    }
    res.clearCookie("connect.sid"); // Default cookie name for express-session
    res.json({ message: "Logged out successfully" });
  });
};
