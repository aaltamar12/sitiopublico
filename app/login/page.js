"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Checkbox } from "@nextui-org/react";
import CustomButton from "../components/ui/Button";
import LogoIcon from "../components/svg/logo.svg";

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });

export default function Login({}) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-center pl-10 pr-10"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="flex justify-center pb-9">
        <Image
          className="w-60 h-32"
          src={LogoIcon}
          alt="Follow us on Twitter"
        />
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

      <div className="pb-6">
        <input
          className="w-full h-14"
          style={{ borderRadius: "8px", border: "0.7px solid #D0D0D0" }}
          placeholder="Usuario"
        />
      </div>

      <div className="pb-8">
        <input
          className="w-full h-14"
          style={{ borderRadius: "8px", border: "0.7px solid #D0D0D0" }}
          placeholder="Contraseña"
        />
      </div>

      <div className="grid grid-cols-2 pb-9">
        <div className="container">
          <Checkbox>
            <small className="text-gray-400">Remember me</small>
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
          onPressExecute={() => {
            setRedirectState(false);
          }}
        />
      </div>
    </div>
  );
}
