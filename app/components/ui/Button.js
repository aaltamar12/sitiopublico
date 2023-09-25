"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function CustomButton({
  className,
  color,
  size,
  fullWidth,
  text,
  url,
  style,
  onPressExecute,
}) {
  return (
    <Button
      className={className}
      color={color}
      size={size}
      fullWidth={fullWidth}
      style={style}
      onClick={() => {
        onPressExecute();
      }}
    >
      <Link href={url}>{text}</Link>
    </Button>
  );
}
