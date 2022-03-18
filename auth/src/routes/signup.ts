import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req,res) => {
    res.send("Hello from routers");
})

export {router as signupRouter};