"use client";
import { useRouter } from "next/navigation";
import { deleteCookieNext } from "../helpers/apiHelper";
import Navigator from "../components/Navigator";
import { useEffect, useState } from "react";

export default function HomePage({ isLogged, setIsLogged }) {
  const router = useRouter();

  const cerrarSesion = async () => {
    await deleteCookieNext("token");
    setIsLogged(false);
  };

  useEffect(() => {
    !isLogged && router.refresh();
  }, [isLogged, router]);

  return <Navigator signOutAction={cerrarSesion} />;
}
