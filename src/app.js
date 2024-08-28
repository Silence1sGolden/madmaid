const express = require('express')
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const uri = "mongodb://localhost:27017/";

async function run() {
    try {
        const client = new MongoClient(uri);
        const database = client.db('admin');
        return database.collection('streams');
    } catch (err) {
        console.log(err);
    }
}

const db = run().catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(_, response) {
    response.sendFile(__dirname + '/public/index.html');
})

app.get('/stream', function(request, response) {
    response.sendFile(__dirname + '/public/add/add.html');
})

app.get('/streams', function (request, response) {
    response.sendFile(__dirname + '/public/streams/streams.html');
})

app.get("/streams/all", function (request, response) {
    console.log('Запрос пришёл');
    response.setHeader("Content-Type", "text/html; charset=utf-8; application/json;");
    db.then((dataBase) => {
        console.log('База данных получена');
        dataBase.find().toArray()
        .then((data) => {
            console.log('Получены данные');
            if (data) {
                console.log('Данные обрабатываются');
                response.statusCode = 200;
                response.write(JSON.stringify(data));
                console.log('Данные отправлены');
                response.end();
            } else {
                console.log('Данных нет');
                return Promise.reject();
            }
        })
    }).catch((err) => {
        console.log(err, 'error');
        response.statusCode = 404;
        response.end();
    })
})

app.post("/streams/add", (request, response) => {
    if (request.headers['content-type'] != 'application/json') {
        response.statusCode = 415;
        response.write("Content-Type supported only application/json");
        response.end();
    } else {
        const data = request.body;
        if (data.title == "" || data.date == "") {
            response.statusCode = 400;
            response.write('Incorrect data in form')
            response.end();
        } else {
            db.then((data) => {
                return data.insertOne(request.body);
            }).then((ok) => {
                if (ok) {
                    console.log(`Data was saved`);
                    response.statusCode = 200;
                    response.end();
                }
            })
        }
    }
})

app.listen(3000, function(){ console.log("Сервер запущен по адресу http://localhost:3000")});