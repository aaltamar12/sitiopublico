"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Providers } from "./providers";
import { getCookieNext } from "./helpers/apiHelper";
import { Skeleton } from "@nextui-org/react";
import StartUp from "./startup/page";
import HomePage from "./homePage/page";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function Index({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  let contentToRender;

  if (isLoading) {
    contentToRender = <Skeleton className="flex h-screen w-screen" />;
  } else if (!isLoading) {
    contentToRender = <StartUp>{children}</StartUp>;
  }

  return contentToRender;
}
