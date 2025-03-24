import React from "react";
import AuthStack from "./AuthStack";
import PublicStack from "./PublicStack";

export default function RootStack() {
  const user = null;

  return <>{user ? <AuthStack /> : <PublicStack />}</>;
}
