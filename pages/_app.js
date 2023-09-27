import "@/styles/globals.css";
import React, { useState } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [name, setName] = useState("");
  const answer = "10";
  const names = ["jai", "karan", "piyush", "rahul"];
  const contextValue = {

  };

  return (
    <AuthContext.Provider >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
