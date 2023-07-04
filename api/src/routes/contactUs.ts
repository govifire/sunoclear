import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { Static, Type } from "@sinclair/typebox";
import { contactUsService } from "../service/ContactUsService.js";


const GetAboutUsResponse = Type.Array(Type.Object({
  description: Type.String(),
  email: Type.String(),
  mobileNumber: Type.String(),
  name: Type.String(),
}))

type GetAboutUsResponseType = Static<typeof GetAboutUsResponse>;


export function registerContactUsRoutes(fastify: FastifyInstance, _: FastifyPluginOptions, done: () => void) {
    fastify.get<{
        readonly Reply: GetAboutUsResponseType;
      }>(
        "about-us",
        {
          schema: {
            operationId: "getAboutUs",
            response: {
              200: GetAboutUsResponse,
            },
          },
        },
        async () => {
          const contactUsDetails = await contactUsService.aboutUs();
    
          return contactUsDetails;
        }
      );
  done();
}