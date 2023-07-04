import { None } from "../utils/None.js";

type BaseConfig = {
  readonly allowSwagger: boolean;
  readonly courierAuthToken: string;
  readonly frontendUrl: string;
  readonly isDevelopment: boolean;
  readonly listenIp: string;
  readonly port: number;
};

type DevelopmentConfig = BaseConfig & {
  readonly appHostEnv: "development";
  readonly isDevelopment: true;
};

type HostedConfig = BaseConfig & {
  readonly appHostEnv: "local" | "production" | "staging";
  readonly isDevelopment: false;
};

export type Config = DevelopmentConfig | HostedConfig;

const devConfig: DevelopmentConfig = {
  allowSwagger: true,
  appHostEnv: "development",
  courierAuthToken: "pk_prod_E8WVBW81964E3ZJG9EWPF47GB548",
  frontendUrl: "http://localhost:3000",
  isDevelopment: true,
  listenIp: "127.0.0.1",
  port: 8080,
};

function getConfig(): Config {
  const appHostEnv = process.env.APP_HOST_ENV;

  // Hardcode variables during development, and grab from env vars in any hosted environment
  if (None(appHostEnv)) {
    return devConfig;
  }

  if (appHostEnv === "local") {
    return {
      ...devConfig,
      appHostEnv: "local",
      isDevelopment: false,
    };
  }

  if (appHostEnv !== "staging" && appHostEnv !== "production") {
    throw new Error(`Invalid APP_HOST_ENV variable: ${appHostEnv}`);
  }

  return {
    allowSwagger: false,
    appHostEnv,
    courierAuthToken: process.env.COURIER_AUTH_TOKEN,
    frontendUrl: process.env.FRONTEND_URL,
    isDevelopment: false,
    listenIp: "0.0.0.0",
    port: Number(process.env.PORT),
  };
}

export const config = getConfig();
