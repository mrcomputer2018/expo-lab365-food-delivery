import React from "react";
import AuthStack from "./auth-stack";
import PublicStack from "./public-stack";
import { useAuth } from "../hook/use-auth";

export default function RootStack() {
  const { user } = useAuth();

  return <>{user ? <AuthStack /> : <PublicStack />}</>;
}
