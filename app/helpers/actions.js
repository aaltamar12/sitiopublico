"use client";
import { getCookie } from "./apiHelper";

export async function getTokenFromCookie(callback) {
  const token = await getCookie("token");
  if (token) {
    return token;
  }
}
