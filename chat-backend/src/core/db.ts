import mongoose from "mongoose";

const PORT = process.env.PORT || 3000

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://nikita:12345@cluster0.iu3mn.mongodb.net/chat',
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()