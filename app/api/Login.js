"use server";
import jwt from "jsonwebtoken";
import { query } from "mysql2";

export default async function handleLogin(req, res) {
  if (req.method != "POST") {
    return res.status(405).end;
  }

  const { username, password } = req.body;

  const user = await query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
  );

  if (user.length > 0) {
    const token = jwt.sign(
      { userId: user[0].id },
      c37ce5f4831c6b033f6108bc50bbab55f186ef9a189483a2dbeff87076640e34,
      { expiresIn: "1h" },
    );

    res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly`);
    res.status(200).json({ success: true, message: "Login Successful" });
  } else {
    res.status(401).json({ success: false, message: "Login Failed" });
  }
}
