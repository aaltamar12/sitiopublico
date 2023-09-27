"use client";
import { getCookieNext } from "./apiHelper";

export async function getTokenFromCookie(callback) {
  const token = await getCookieNext("token");
  if (token) {
    return token;
  }
}
