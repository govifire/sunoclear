import { DataSource } from "typeorm";
import { config } from "../config/config.js";
import { fileURLToPath } from "url";
import path from "path";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const fileExtension = path.extname(fileName);

export const PostgresDataSource = new DataSource({
  database: config.dbName,
  entities: [path.join(dirName, "../entity", `*${fileExtension}`)],
  host: config.dbHost,
  logging: false,
  migrations: [path.join(dirName, "../migrations", `*${fileExtension}`)],
  migrationsRun: true,
  password: config.dbPass,
  port: config.dbPort,
  type: "postgres",
  username: config.dbUser,
});
