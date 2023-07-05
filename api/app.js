import express, { json } from 'express';
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
import cookieParser from "cookie-parser";
import { config } from './src/config/config.js';
import { courierClient } from "./src/courier/CourierClient.js";
import { Some } from "./src/utils/Some.js";


app.use(cors())
app.use(json())
app.use(cookieParser())

console.log("app.js")
app.use(bodyParser.json())
app.post("/api/hearing-aid-trial", async (req,res) => {
  try {
    const { email, name, mobileNumber, userProblem } = req.body;

    if (Some(email)) {
      await courierClient.send(email, "2TG03RBZZR4JGYQ02AHBVT4509FY", { name });
    }
    const data = {
      name,
      mobileNumber,
      ...(Some(email) && { email }),
      ...(Some(userProblem) && { userProblem }),
    };
    await courierClient.send("gsingh@mt.iitr.ac.in", "8P1ZEQ1JMT4C6CN6FNQP7SNX8W2K", data);
  } catch (error) {
    console.log("error:", error);
    return res.sendStatus(500);
  }

  res.json({ message: "success" });
});


app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})