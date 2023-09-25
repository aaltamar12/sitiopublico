"use server";
import { cookies } from "next/headers";

async function setCookie(name, value, path) {
  cookies().set(name, value);
}

export async function getCookie(name) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(name);
  return cookie;
}

export async function loginApi(username, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({ username, password }),
  };

  const res = await fetch(
    process.env.BACKEND_URL + "/api/auth/login",
    requestOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();
  await setCookie("token", response.token);

  return response;
}

export async function fetchApi(method, body, url, token) {
  const authorization = token ? { Authorization: `Bearer ${token}` } : "";

  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const res = await fetch(process.env.BACKEND_URL + url, requestOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
