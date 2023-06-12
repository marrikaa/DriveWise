import express from "express";
import cors from "cors";
import { User } from "./types/types";
import { login, register } from "./database/UserDBManager";
// import { https } from 'firebase-functions';

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.post('/api/register', async (request, response) => {
    try {
        if (!(request.body.email && request.body.password && request.body.username)) {
            response.status(400).send({ message: "Body is not correct" });
        }
        const operationMessage = await register(request.body.username, request.body.email, request.body.password);
        if (operationMessage === "success") {
            response.status(201).send({ message: operationMessage });
        }
        else {
            response.status(400).send({ message: operationMessage });
        }
    }
    catch (e: any) {
        response.status(500).send({ message: e.message });
    }
})

app.post('/api/login', async (request, response) => {
    try {
        if (!(request.body.email && request.body.password)) {
            response.status(400).send({ message: "Body is not correct" });
        }
        const user: (User | undefined) = await login(request.body.email, request.body.password);
        response.status(200).send(user);
    } catch (e: any) {
        response.status(500).send({ username: "", message: e.message });
    }
})

app.get('/test', async (request, response) => {
    response.status(200).send( "fjyfdhgfhfhjf");
    
})

// exports.app = https.onRequest(app);
const port = 3001;
app.listen(port, () => {
    console.log("Listen on the port 3001...");
});



