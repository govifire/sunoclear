import { PostgresDataSource } from "../config/PostgresDataSource.js";
import { courierClient } from "../courier/CourierClient.js";
import { FreeHearingAidTrial } from "../entity/FreeHearingAidTrial.js";
import { getFreeHearingAidRepository } from "../repository/FreeHearingAidRepository.js";
import { Some } from "../utils/Some.js";

type BookHearingAidFreeTrial = {
  readonly email?: string;
  readonly name: string;
  readonly mobileNumber: string;
  readonly userProblem?: string;
};

function makeHearingAidService() {
  const bookHearingAidFreeTrial = async ({ email, name, mobileNumber, userProblem }: BookHearingAidFreeTrial) =>
    PostgresDataSource.transaction(async (manager) => {
      const freeHearingAidRepository = getFreeHearingAidRepository(manager);

      await freeHearingAidRepository.baseRepositiory.save(
        new FreeHearingAidTrial({
          email,
          name,
          mobileNumber,
          userProblem,
        })
      );

      if (Some(email)) {
        try {
          const requestId = await courierClient.send(email, "2TG03RBZZR4JGYQ02AHBVT4509FY", { name });
        } catch (error: unknown) {
          console.log("error:", error);
        }
      }

      try {
        const data = {
          name,
          mobileNumber,
          ...(Some(email) && { email }),
          ...(Some(userProblem) && { userProblem })
        }
        const requestId = await courierClient.send("gsingh@mt.iitr.ac.in", "8P1ZEQ1JMT4C6CN6FNQP7SNX8W2K", data );
      } catch (error: unknown) {
        console.log("error:", error);
      }
    });

  return {
    bookHearingAidFreeTrial,
  };
}

export const hearingAidService = makeHearingAidService();
