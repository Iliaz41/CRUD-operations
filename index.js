import express from "express"
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 3000;
const app = express();
const DB_URL = `mongodb+srv://iliaz:useriliaz@cluster0.qulfmmf.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("Server started " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
