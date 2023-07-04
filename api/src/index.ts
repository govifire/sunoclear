import "reflect-metadata";
import { Some } from "./utils/Some.js";
import { config } from "./config/config.js";
import cors from "@fastify/cors";
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fs from "fs";
import { registerContactUsRoutes } from "./routes/contactUs.js";
import { registerBookHearingAidRoutes } from "./routes/bookHearingAid.js";

async function startServer(generateSwagger: boolean) {

  // // Connect to DB
  const writeSwaggerFileAndExit = config.allowSwagger && generateSwagger;

  // if (!writeSwaggerFileAndExit) {
  //   try {
  //     await PostgresDataSource.initialize();
  //   } catch (error: unknown) {
  //     console.error(error);
  //     process.exit(1);
  //   }
  // }

  const server = fastify({
    ignoreTrailingSlash: true,
    logger: config.isDevelopment, // No logging, to reduce PII
  });

  if (config.allowSwagger) {
    server.register(fastifySwagger, {
      swagger: {
        consumes: ["application/json"],
        host: config.listenIp,
        info: {
          description: "Suno-clear swagger API",
          title: "Suno-clear Swagger API",
          version: "0.1.0",
        },
        produces: ["application/json"],
        schemes: ["http", "https"],
      },
    });
  }

  // Application routes
  server.register(registerContactUsRoutes, { prefix: "api/contact-us/" });
  server.register(registerBookHearingAidRoutes, { prefix: "api/book-hearing-aid/" });

  // CORS
  server.register(cors, {
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["DELETE", "PATCH", "POST", "PUT"],
    origin: config.frontendUrl,
  });

  // Error handling
  server.setErrorHandler((error, _, reply) => {
    
      if (config.isDevelopment) {
        console.error(error);
      }

      reply.status(500).send(config.isDevelopment ? error.message : "Something went wrong");
  });

  server.listen({ host: config.listenIp, port: config.port }, (error: Error | null, address) => {
    if (Some(error)) {
      console.error(error);
      process.exit(1);
    }

    if (writeSwaggerFileAndExit) {
      const json = server.swagger();
      fs.writeFileSync("./swagger.json", JSON.stringify(json, null, 2));
      process.exit();
    }

    console.log(`Server listening at ${address}`);
  });
}

const generateSwagger = process.argv.includes("--swagger");
startServer(generateSwagger);
