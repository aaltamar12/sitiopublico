"use client";
import { Button } from "@nextui-org/react";

export default function CustomButton({
  className,
  color,
  size,
  fullWidth,
  text,
}) {
  return (
    <Button
      className={className}
      color={color}
      size={size}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
}
