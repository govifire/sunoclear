import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { hearingAidService } from "../service/BookHearingAid.js";

const HearingAidFreeTrialRequest = Type.Object({
  email: Type.Optional(Type.String()),
  name: Type.String(),
  mobileNumber: Type.String(),
  userProblem: Type.Optional(Type.String()),
});

type HearingAidFreeTrialRequestType = Static<typeof HearingAidFreeTrialRequest>;

export function registerBookHearingAidRoutes(fastify: FastifyInstance, _: FastifyPluginOptions, done: () => void) {
  fastify.post<{
    readonly Body: HearingAidFreeTrialRequestType;
  }>(
    "free-trial",
    {
      schema: {
        body: HearingAidFreeTrialRequest,
        operationId: "bookFreeHearingAidTrial",
        response: {
          200: {
            type: "null",
          },
        },
      },
    },
    async ({ body }, reply) => {
      await hearingAidService.bookHearingAidFreeTrial(body);

      reply.send(200);
    }
  );
  done();
}
