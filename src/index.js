import express from 'express'; //Expressjs
import morgan from 'morgan'; //Logger
import { engine } from 'express-handlebars'; //Template engine
import { route } from './routes/index.route.js';

const app = express();
const port = 3000;

app.use(express.static('./src/public'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

//Render views
//Function handler
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
