// JavaScript: NodeJS: ExpressJS
import express from 'express';
import url from 'url';
import path from 'path';
import { Route } from './Route/index.js';

const PORT = process.env.PORT;
const __dirname = path.dirname( url.fileURLToPath(import.meta.url) );

const App = express();

App.set("views", path.join(__dirname, "Template"));
App.set("views engine", "ejs");
App.use(express.static(path.join(__dirname, "Template", "static")))
App.use(express.urlencoded({ extended: true }));

App.use('/', Route);

App.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
})