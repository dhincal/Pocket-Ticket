import express from 'express';
import { json } from 'body-parser';

import {currentUserRouter} from './routes/current-user';
import {signupRouter} from './routes/signup';
import {signinRouter} from './routes/signin';
import {signoutRouter} from './routes/signout';
import { errorHandling } from './middlewares/error-handling';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.use(errorHandling);

app.get('/api/users/currentuser', (req, res) => {
    res.send('Hello from auth service');
})

app.listen(3000, () =>{
    console.log("Listening on port 3000...");
});