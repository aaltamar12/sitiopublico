"use client";
import "../globals.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Checkbox } from "@nextui-org/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../components/ui/Button";
import InputIcon from "../components/ui/InputIcon";

import { getTokenFromCookie } from "../helpers/actions";
import { loginApi } from "../helpers/apiHelper";

import LogoIcon from "../components/svg/logo.svg";
import emailIcon from "../components/svg/email.svg";
import passwordIcon from "../components/svg/password.svg";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });

export default function Login({ searchParams }) {
  const router = useRouter();

  useEffect(() => {
    const redirectUnauthorized = async () => {
      const token = await getTokenFromCookie();
      console.log(
        token,
        !token,
        await searchParams.redirect,
        searchParams.redirect !== "true"
      );

      if (!token && (await searchParams.redirect) !== "true") {
        router.push("/");
      }
    };

    redirectUnauthorized();
  }, [router]);

  const login = async () => {
    const user = await loginApi("aaltamar12", "alfonso");
    if (user) {
      router.push("/");
    }
  };

  return (
    <div
      className="absolute inset-0 flex flex-col justify-center pl-10 pr-10"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="flex justify-center pb-9">
        <Image className="w-60 h-32" src={LogoIcon} alt="Logo AdMedia" />
      </div>

      <div
        className={`text-3xl text-center ${poppins700.className}`}
        style={{ color: "#393F45" }}
      >
        <h1>Welcome Back</h1>
      </div>

      <div
        className={`pb-9 text-base text-center ${poppins400.className}`}
        style={{ opacity: "0.4" }}
      >
        <h1>Sign in for continue</h1>
      </div>

      <div className="w-full pb-6">
        <InputIcon
          font={poppins400.className}
          type="email"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Escribe tu correo"
          icon={emailIcon}
          alt="Email icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="password"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Contraseña"
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="grid grid-cols-2 pb-9">
        <div className="container">
          <Checkbox>
            <small className="text-gray-400">Recuerdame</small>
          </Checkbox>
        </div>

        <div className="container text-end text-blue-600">
          <small>Forgot password?</small>
        </div>
      </div>

      <div>
        <CustomButton
          className={`text-xl text-white h-14 bg-gradient-to-r from-blue-600 to-indigo-500`}
          size="lg"
          fullWidth="true"
          text="Ingresar"
          url="/login"
          style={{ borderRadius: "10px" }}
          onPressExecute={async () => {
            await login();
          }}
        />
      </div>
    </div>
  );
}
