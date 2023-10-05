import { setCookie, getCookie, deleteCookie } from "cookies-next";

async function setCookieNext(name, value, path) {
  setCookie(name, value);
}

export async function getCookieNext(name) {
  const cookie = getCookie(name);
  return cookie;
}

export async function deleteCookieNext(name) {
  deleteCookie(name);
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
  try {
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
  } catch (error) {
    throw error;
  }
}
