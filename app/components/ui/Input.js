"use client";

import { useState } from "react";
import HidePass from "../svg/hide-eye.svg";
import ShowPass from "../svg/show-eye.svg";
import Image from "next/image";

export default function Input({
  font,
  type,
  style,
  boxWidth,
  boxHeight,
  inputWidth,
  placeholder,
  setValue,
  placeholderWidth,
  alt,
}) {
  const [activatePlaceholder, setActivatePlaceholder] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue && setValue(newValue);

    const validateValue = !newValue ? true : false;
    setActivatePlaceholder(validateValue);
  };

  var inputType = type || "text";

  const showPasswordIcon = () => {
    if (type === "password") {
      if (showPassword) {
        inputType = "text";
      } else {
        inputType = "password";
      }
      return (
        <div className="flex justify-end p-[14px]">
          <button
            style={{ zIndex: "1" }}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Image src={showPassword ? HidePass : ShowPass} alt={alt} />
          </button>
        </div>
      );
    }
  };

  return (
    <div className={`${boxWidth} ${boxHeight || "h-14"} relative ${font}`}>
      {showPasswordIcon()}

      {activatePlaceholder && (
        <div
          className={`${
            placeholderWidth || "w-32"
          }  h-4 left-[14px] top-[19px] absolute text-gray-400 text-sm font-normal leading-none tracking-tight`}
        >
          <h4>{placeholder}</h4>
        </div>
      )}

      <div
        className={`${boxWidth} ${
          boxHeight || "h-14"
        } left-0 top-0 absolute rounded-lg border border-stone-300`}
        style={style}
      >
        <div className="h-4 left-[14px] absolute">
          <input
            type={inputType}
            className={`${inputWidth} h-14 border-none bg-transparent text-gray-600 focus:outline-none focus:border-blue-500`}
            onClick={() => {
              setActivatePlaceholder(false);
            }}
            onChange={handleInputChange}
            style={style}
          />
        </div>
      </div>
    </div>
  );
}
