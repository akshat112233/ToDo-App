import express, { json } from 'express';
import * as uuid from 'uuid';

const exp = express();
exp.use(express.json());
var arr = [];

exp.get('/', (req, res) => {
    res.send(arr);
});

exp.post('/add', (req, res) => {
    const data = req.body;
    data['id'] = uuid.v4();
    arr.push(data);
    res.send(arr);
});

exp.put('/update', (req, res) => {
    const update = req.body;
    let id = req.query.id;
    let index = arr.findIndex(ind => ind.id == `${id}`);
    arr[index].name = update.name;
    arr[index].type = update.type;
    res.send(arr);
});

exp.delete('/delete', (req, res) => {
    let id = req.query.id;
    arr = arr.filter(items => items.id !== `${id}`);
    res.send(arr);
});

exp.listen(4000, () => {
    console.log('server started at 4000');
})