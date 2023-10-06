const express = require("express");
const dotenv = require("express");
const chats = require("./data/data");

const app = express();
dotenv.config

app.get('/', (req, res) => {
    res.send("API 돌아가는 중... ㅋㅋ nodemon을 사용하면 수정하고 다시 껐다가 켜지 않아도 됨");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

app.listen(5000, console.log(`Server Started on PORT 5000`));
 //5000 - whatever