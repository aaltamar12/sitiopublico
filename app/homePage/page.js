"use client";
import { useRouter } from "next/navigation";
import { deleteCookie } from "../helpers/apiHelper";
import Navigator from "../components/Navigator";
import { useEffect, useState } from "react";

export default function HomePage({ isLogged, setIsLogged }) {
  const router = useRouter();

  const cerrarSesion = async () => {
    await deleteCookie("token");
    setIsLogged(false);
  };

  useEffect(() => {
    !isLogged && router.refresh();
  }, [isLogged]);

  return <Navigator signOutAction={cerrarSesion} />;
}
