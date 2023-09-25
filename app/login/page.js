"use client";
import { Checkbox, Input } from "@nextui-org/react";
import CustomButton from "../components/ui/Button";

export default function Login({}) {
  return (
    <div className="flex flex-col justify-center min-h-screen pl-10 pr-10 bg-gray-600">
      <div className="text-3xl text-center">
        <h1>Welcome Back</h1>
      </div>

      <div className="pb-9 text-base text-center">
        <h1>Inicia sesion para continuar</h1>
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
          <Checkbox>Remember me</Checkbox>
        </div>

        <div className="container text-end">
          <small>Forgot password?</small>
        </div>
      </div>

      <div>
        <CustomButton
          className={`text-xl text-white bg-gradient-to-tr from-pink-500 to-orange-400 shadow-md h-14`}
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
