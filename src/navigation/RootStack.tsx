import React from "react";
import AuthStack from "./AuthStack";
import PublicStack from "./PublicStack";
import { useAuth } from "../hook/use-auth";

export default function RootStack() {
  const { user } = useAuth();

  return <>{user ? <AuthStack /> : <PublicStack />}</>;
}
