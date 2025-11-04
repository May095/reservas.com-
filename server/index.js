import express from "express";
import "dotenv/config";
import { connectDb } from "./config/db.js";
import User from "./models/user.js";

const app = express();
const { PORT } = process.env;

app.get('/users', async (req, res) => {
    connectDb()

    try {
        const userDoc = await User.find(); 
        res.json(userDoc);

    } catch (error) {
        res.status(500).json(error);
    }
});

app.post("/users", async (req, res) =>{
    connectDb();

    try {
        const newUserDoc = await User.create({
            name: 'teste',
            email: 'teste@teste.com',
            password: '123456789'
        });
        res.json(newUserDoc);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});