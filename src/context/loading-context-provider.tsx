"use client";
import { Loading } from "@/app/components/atoms/loading";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: (value: boolean) => {},
});

const LoadingContextProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <>
        <Loading isLoading={isLoading} />
        {children}
      </>
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  return useContext(LoadingContext);
};

export { LoadingContext, LoadingContextProvider, useLoading };
