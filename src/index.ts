
import express from "express";
import userRouter from "./routes/user";

const port = 3000;
const app = express();

//config use routes
app.use("/users", userRouter);

app.listen(port, ()=> {
    console.log(`Server running in http://localhost:${port}`);
});

