
import express from "express";
import routerUser from "./routes/user";

//config port and app
const port = 3000;
const app = express();

//config essencials middlewars
app.use(express.json());

//config use routes
app.use("/users", routerUser);

//to listen application
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});

