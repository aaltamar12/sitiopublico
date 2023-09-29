"use client";
import "../globals.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomButton from "../components/ui/Button";
import InputIcon from "../components/ui/InputIcon";

import { getTokenFromCookie } from "../helpers/actions";
import { encryptData } from "../helpers/cryptoHelper";
import { loginApi } from "../helpers/apiHelper";

import emailIcon from "../components/svg/email.svg";
import passwordIcon from "../components/svg/password.svg";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });

export default function Login({ }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const login = async () => {
    const { username, password } = formLogin;
    const user = await loginApi(username, password);
    if (user) {
      router.push("/");
    }
  };

  return (
    <div
      className="absolute inset-0 flex flex-col justify-center pl-8 pr-8"
      style={{ backgroundColor: "#FFFFFF" }}
    >

      <div className="pt-20">
        <div
          className={`text-3xl text-start ${poppins700.className}`}
          style={{ color: "#393F45" }}
        >
          <h1>Create Account</h1>
        </div>

        <div
          className={`mb-9 text-base text-start ${poppins400.className}`}
          style={{ opacity: "0.4" }}
        >
          <h1>Please fill in the form below to create an account. Easy isn't it?</h1>
        </div>
      </div>

      <div className="pt-10 pb-6">
        <InputIcon
          font={poppins400.className}
          type="text"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Nopbre"
          setValue={(value) => {
            setFormLogin({
              ...formLogin,
              username: value,
            });
          }}
          icon={emailIcon}
          alt="Email icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="text"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Apellidos"
          setValue={async (value) => {
            setFormLogin({
              ...formLogin,
              password: await encryptData(value),
            });
            console.log(formLogin);
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="text"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Numero de identificacion"
          setValue={async (value) => {
            setFormLogin({
              ...formLogin,
              password: await encryptData(value),
            });
            console.log(formLogin);
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="email"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Correo electronico"
          setValue={async (value) => {
            setFormLogin({
              ...formLogin,
              password: await encryptData(value),
            });
            console.log(formLogin);
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="phone"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Telefono"
          setValue={(value) => {
            setFormLogin({
              ...formLogin,
              username: value,
            });
          }}
          icon={emailIcon}
          alt="Email icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="date"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder=""
          setValue={async (value) => {
            setFormLogin({
              ...formLogin,
              password: await encryptData(value),
            });
            console.log(formLogin);
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="password"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Contraseña"
          setValue={async (value) => {
            setFormLogin({
              ...formLogin,
              password: await encryptData(value),
            });
            console.log(formLogin);
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-8">
        <InputIcon
          font={poppins400.className}
          type="password"
          boxWidth="w-full"
          inputWidth="w-56"
          placeholder="Confirma tu contraseña"
          setValue={(value) => {
            setFormLogin({
              ...formLogin,
              username: value,
            });
          }}
          icon={emailIcon}
          alt="Email icon"
        />
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
