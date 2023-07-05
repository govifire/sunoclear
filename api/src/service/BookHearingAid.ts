import { courierClient } from "../courier/CourierClient.js";
import { Some } from "../utils/Some.js";
import { Request, RequestHandler, Response } from "express";

// type BookHearingAidFreeTrial = {
//   readonly email?: string;
//   readonly name: string;
//   readonly mobileNumber: string;
//   readonly userProblem?: string;
// };

console.log("cntrl file")

export const bookHearingAidFreeTrial = async (req: Request, res: Response) => {
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
  } catch (error: unknown) {
    return res.send(500);
  }

  res.end();
};
