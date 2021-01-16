import mongoose from 'mongoose'
import express from 'express'

import User from './schemas/User'

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true, useUnifiedTopology: true});


app.get('/create', (req: any, res: any) => {
 
  const user = new User ({ email: 'test1@mail.ru', fullname: 'Test User' });
  user.save().then((obj:any) =>  {res.json(obj)});

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})