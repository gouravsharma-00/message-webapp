// JavaScript: NodeJS: ExpressJS

import { Router } from 'express';

const messages = [
    {
        text: "Hello 👋",
        user: "Arnold",
        added: new Date()
    },
    {
        text: "Hi 🙋‍♀️",
        user: "Tony",
        added: new Date()
    }
]
const Route = Router();

Route.post('/new', (req, res) => {
    const messageText = req.body.text;
    const messageUser = req.body.user;
    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date()
    })
    res.redirect('/');
})
Route.get('/new', (req, res) => {
    res.render( "form.ejs");
})
Route.use('/', (req, res) => {
    res.render( "index.ejs", { messages: messages } );
})

export { Route };