"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function CustomButton({
  className,
  color,
  size,
  fullWidth,
  text,
  style,
  onPressExecute,
  redirectTo,
}) {
  const router = useRouter();

  return (
    <Button
      className={className}
      color={color}
      size={size}
      fullWidth={fullWidth}
      style={style}
      onClick={() => {
        onPressExecute && onPressExecute();
        redirectTo && router.push(redirectTo);
      }}
    >
      {text}
    </Button>
  );
}
