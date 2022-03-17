import express from 'express';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url'; // the node package 'url'
import { dirname } from 'path';
import path from 'path';
import morgan from 'morgan';

// f*ck __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// localhost:3000/
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
