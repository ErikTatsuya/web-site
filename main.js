const { error } = require("console");
const express = require("express"); //configura o express
const cors = require("cors");       //configura cors
const app = express();              //configura o express
const PORT = 3000;                  //configura porta

//para conseguir usar json
app.use(express.json());
app.use(cors());

//GET
//rota da api (localhost:3000/api/status)
app.get("/api/status", (req, res) => {
    res.json({
        service: "api de teste express",
        status: "200 hehehe",
        method: req.method              //mostra o metodo HTTP usado(GET)
    })
})

const messages = [];

app.post("/api/messages", (req,res) => {
    const newMessage = req.body;

    if(!newMessage.content)
    {
        return res.status(400).json({error: "conteudo obrigatória burro"})
    }
    if(!newMessage.receiver)
    {
        return res.status(400).json({error: "receptor obrigatório burro"})
    }

    newMessage.id = messages.length + 1;
    messages.push(newMessage)

    res.status(201).json({
        message: "mensagem enviada com sucesso!",
        item: newMessage
    });

    console.log(messages);
})

//mostra os itens
app.get("/api/messages", (req, res) => {
    res.json(messages);
})

//inicializar o servidor
app.listen(PORT,() => {
    console.log(`rodando na porta ${PORT}`);
    console.log(`Endpoint GET de teste: http://localhost:${PORT}/api/status`);
})

