"use client";
import { useState, createContext } from "react";

export const AppContext = createContext({
  appProps: {
    name: "",
    version: "",
  },
});

interface AppProps {
  name: string;
  version: string;
}

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContext.Provider
      value={{
        appProps: {
          name: "FirstNextJSApp",
          version: "1.0.0",
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
