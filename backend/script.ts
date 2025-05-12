import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
// app.use(express.json());
// app.use(cors());

// type User = {
//     id: string;
//     name: string;
//     username: string;
//     password: string;
// };

// const users: User[] = [];

// const Ali: User = {
//     id: "1",
//     name: "Ali",
//     username: "aliprogrammer",
//     password: "tre"
// };
// users.push(Ali);

// // GET /
// app.get("/", (req: Request, res: Response) => {
//     const user = req.query.user as string | undefined;
//     res.send((user ?? "Guest") + "!");
// });

// // POST /create_user
// app.post("/create_user", (req: Request, res: Response) => {
//     const user: User = req.body.user;

//     users.push({
//         id: user.id,
//         name: user.name,
//         username: user.username,
//         password: user.password
//     });

//     console.log(users);

//     res.json({ loggedIn: true, message: "Everything went well" });
// });

// // GET /users
// app.get("/users", (_req: Request, res: Response) => {
//     res.json(users);
// });

// DELETE /delete
// app.delete("/delete", (req: Request, res: Response) => {
//     const { username, password } = req.body as { username: string; password: string };

//     const existingUser = users.find(
//         (u) => u.username === username && u.password === password
//     );
//     console.log(existingUser);

//     if (!existingUser) {
//         return res.status(401).json({ errorStatus: "Creds did not match" });
//     }

//     users.splice(users.indexOf(existingUser), 1);
//     res.json(users);
// });

// Start server
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
