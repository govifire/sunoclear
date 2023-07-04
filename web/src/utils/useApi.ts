import { HearingAidTrial } from "../__generated__/HearingAidTrial";
import { useMemo } from "react";

export function useApi() {
  return useMemo(() => {
    const httpClientConfig = {
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true,
    };

    return {
      hearingAidClient: new HearingAidTrial(httpClientConfig),
    };
  }, []);
}
