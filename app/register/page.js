"use client";
import "../globals.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CustomButton from "../components/ui/Button";
import Input from "../components/ui/Input";

import { getTokenFromCookie } from "../helpers/actions";
import { encryptData } from "../helpers/cryptoHelper";
import { fetchApi } from "../helpers/apiHelper";

import emailIcon from "../components/svg/email.svg";
import passwordIcon from "../components/svg/password.svg";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });

export default function Login({}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formRegister, setFormRegister] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    birthday: "",
    username: "",
    mobile: "",
    legalId: "",
    isNaturalUser: true,
    email: "",
    password: "",
    username: "",
    password: "",
  });

  const register = async () => {
    try {
      const response = await fetchApi("POST", formRegister, "/api/auth/signup");
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="flex flex-col justify-center pl-8 pr-8"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="pt-[34px]">
        <div
          className={`text-3xl text-start ${poppins700.className}`}
          style={{ color: "#393F45" }}
        >
          <h1>Create Account</h1>
        </div>

        <div
          className={`mb-9 pt-2 text-base text-start ${poppins400.className}`}
          style={{ opacity: "0.4" }}
        >
          <h1>
            Please fill in the form below to create an account. Easy isn't it?
          </h1>
        </div>
      </div>

      <div className="pb-6">
        <Input
          font={poppins400.className}
          type="text"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          inputWidth="w-56"
          placeholder="Nombre"
          setValue={(value) => {
            setFormRegister({
              ...formRegister,
              first_name: value,
            });
          }}
          icon={emailIcon}
          alt="Email icon"
        />
      </div>

      <div className="pb-5">
        <Input
          font={poppins400.className}
          type="text"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          inputWidth="w-56"
          placeholder="Apellidos"
          setValue={async (value) => {
            setFormRegister({
              ...formRegister,
              last_name: await value,
            });
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-5">
        <Input
          font={poppins400.className}
          type="text"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          placeholderWidth="w-full"
          inputWidth="w-56"
          placeholder="Numero de identificacion"
          setValue={async (value) => {
            setFormRegister({
              ...formRegister,
              legalId: await value,
            });
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-5">
        <Input
          font={poppins400.className}
          type="email"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          inputWidth="w-56"
          placeholder="Correo electronico"
          setValue={async (value) => {
            setFormRegister({
              ...formRegister,
              email: await value,
            });
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-5">
        <Input
          font={poppins400.className}
          type="phone"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          inputWidth="w-56"
          placeholder="Telefono"
          setValue={(value) => {
            setFormRegister({
              ...formRegister,
              mobile: value,
            });
          }}
          icon={emailIcon}
          alt="Email icon"
        />
      </div>

      <div className="pb-5">
        <Input
          font={poppins400.className}
          type="date"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          inputWidth="w-56"
          placeholder=""
          setValue={async (value) => {
            setFormRegister({
              ...formRegister,
              birthday: await value,
            });
          }}
          icon={passwordIcon}
          alt="Password icon"
        />
      </div>

      <div className="pb-5">
        <Input
          font={poppins400.className}
          type="password"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          inputWidth="w-56"
          placeholder="Contraseña"
          icon={passwordIcon}
          showPassword={false}
          alt="Password icon"
        />
      </div>

      <div className="pb-12">
        <Input
          font={poppins400.className}
          type="password"
          boxWidth="w-full"
          boxHeight="h-[52px]"
          placeholderWidth="w-full"
          inputWidth="w-56"
          placeholder="Confirma tu contraseña"
          setValue={(value) => {
            setFormRegister({
              ...formRegister,
              password: encryptData(value),
            });
          }}
          icon={emailIcon}
          alt="Email icon"
        />
      </div>

      <div className="pb-6 h-6 justify-center items-center gap-2 inline-flex">
        <div
          className={`text-center text-blue-700 text-base font-semibold font-['Poppins'] leading-normal ${poppins700.className}`}
        >
          <Link href="/login?redirect=true">Ya tengo una cuenta</Link>
        </div>
      </div>

      <div>
        <CustomButton
          className={`text-xl text-white h-14 bg-gradient-to-r from-blue-600 to-indigo-500`}
          size="lg"
          fullWidth="true"
          text="Registrarse"
          url="/login"
          style={{ borderRadius: "10px" }}
          onPressExecute={async () => {
            await register();
          }}
        />
      </div>
    </div>
  );
}
