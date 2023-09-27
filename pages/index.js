import React, { useContext, useState } from "react";
import { AuthContext } from "./_app";
import { useRouter } from "next/router";



export default function Home() {
  const router = useRouter();

  return (
    <div id="loginPage">
      <h1>Type your name below</h1>
      <input id="name" />
      <h1 >Type puzzle answer below 8/4+2*6-4 :</h1>

      <input id="answer" />
      <button >Click</button>

    </div>
  );
}
