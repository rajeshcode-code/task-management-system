"use client";

import { useState } from "react";
import { request } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const register = async () => {
    await request("/auth/register", "POST", { email, password });
    router.push("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Register</h1>
      <input onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={register}>Register</button>
    </div>
  );
}