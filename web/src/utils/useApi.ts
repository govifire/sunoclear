import { ContactUs } from "../__generated__/ContactUs";
import { BookHearingAid } from "../__generated__/BookHearingAid";
import { useMemo } from "react";

export function useApi() {
  return useMemo(() => {
    const httpClientConfig = {
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true,
    };

    return {
      hearingAidClient: new BookHearingAid(httpClientConfig),
      contactUsClient: new ContactUs(httpClientConfig),
    };
  }, []);
}
