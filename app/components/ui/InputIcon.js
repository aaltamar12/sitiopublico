"use client";

import { useState } from "react";
import Image from "next/image";

export default function InputIcon({
  font,
  type,
  style,
  boxWidth,
  inputWidth,
  placeholder,
  icon,
  alt,
}) {
  const [activatePlaceholder, setActivatePlaceholder] = useState(true);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    !newValue && setActivatePlaceholder(true);
  };

  return (
    <div className={`${boxWidth} h-14 relative ${font}`}>
      <div className="pl-[14px] pt-[19px]">
        <Image src={icon} alt={alt} />
      </div>

      {activatePlaceholder && (
        <div className="w-32 h-4 left-[51px] top-[19px] absolute text-gray-400 text-sm font-normal leading-none tracking-tight">
          <h4>{placeholder}</h4>
        </div>
      )}

      <div
        className={`${boxWidth} h-14 left-0 top-0 absolute rounded-lg border border-stone-300`}
        style={style}
      >
        <div className="h-4 left-[51px] absolute">
          <input
            type={type}
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
