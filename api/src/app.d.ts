import { FastifyAuthFunction } from "fastify-auth";
import { Stringifiable } from "query-string";

declare global {
  namespace NodeJS {
    // eslint-disable-next-line
    interface ProcessEnv {
      readonly APP_HOST_ENV: string | undefined;
      readonly FRONTEND_URL: string;
      readonly NODE_ENV: string;
      readonly APP_ID: string;
      readonly APP_ORG_ID: string;
      readonly APP_SECRET: string;
      readonly COOKIE_SECRET: string;
      readonly COURIER_AUTH_TOKEN: string;
      readonly DB_HOST: string;
      readonly DB_NAME: string;
      readonly DB_PASS: string;
      readonly DB_USER: string;
      readonly JWT_SECRET: string;
      readonly GIT_HASH: string;
    }
  }
}
