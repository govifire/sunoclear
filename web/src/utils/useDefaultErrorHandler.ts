import { Some } from "../utils/Some";
import { useCallback, useState } from "react";

/*
 * A wrapper around the prevalent Error handling that stores Error in state
 * and throws it during Render, so as to be caught by ErrorBoundary
 */
export const useDefaultErrorHandler = () => {
  const [error, setError] = useState<unknown>();

  const errorHandler = useCallback(
    (err: unknown) => {
      setError(err);
    },
    [setError]
  );

  if (Some(error)) {
    throw error;
  }

  return { errorHandler };
};
