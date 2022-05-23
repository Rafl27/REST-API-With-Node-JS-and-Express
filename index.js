import express, { response } from 'express';
import bodyParser from 'body-parser';
import usersRoutes from "./routes/users.js"; //default exports can have any names when importing

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //this means I'll use json (java script object notation)

app.use("/users", usersRoutes)


app.get("/", (req, res) => {

    res.send("right back at you partner");
})

app.listen(PORT, () => console.log(`The server is running on port: http://localhost:${PORT}`))