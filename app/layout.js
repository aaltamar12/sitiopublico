import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navigator from "./components/Navigator";
import "./globals.css";
import StartUp from "./startup/page";

const isLogged = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {isLogged ? (
        <body className={inter.className}>
          <Providers>
            {isLogged && <Navigator />}
            {isLogged && children}
          </Providers>
        </body>
      ) : (
        <StartUp inter={inter} providers={Providers} />
      )}
    </html>
  );
}
