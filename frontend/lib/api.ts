const API = process.env.NEXT_PUBLIC_API_URL;

export const request = async (url: string, method = "GET", body?: any) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return res.json();
};