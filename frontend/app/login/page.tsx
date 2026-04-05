"use client";

import { useState } from "react";
import { request } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    const res = await request("/auth/login", "POST", { email, password });

    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("refreshToken", res.refreshToken);

    router.push("/dashboard");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <br />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}