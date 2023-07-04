import express, { json } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
import router from "./src/routes/bookHearingAid.js";
import cookieParser from "cookie-parser";
import { config } from './src/config/config.js';

app.use(cors())
app.use(json())
app.use(cookieParser())


app.use('/',router)
app.use(bodyParser.json())


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})