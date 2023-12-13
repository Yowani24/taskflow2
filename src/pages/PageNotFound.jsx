import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

export default function PageNotFound() {
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <div
      onClick={handleLogout}
      className="flex items-center justify-center h-screen"
    >
      <h1 className="text-2xl font-bold">Essa pagina não existe!</h1>
    </div>
  );
}
