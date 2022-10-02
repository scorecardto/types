import { createContext, Dispatch, SetStateAction } from "react";

export const LoadingContext = createContext<LoadingProvider>({
  loading: false,
  setLoading: () => {
    /* do nothing */
  },
  reloadContent: () => {
    /* do nothing */
  },
});

export interface LoadingProvider {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  reloadContent: () => void;
};
