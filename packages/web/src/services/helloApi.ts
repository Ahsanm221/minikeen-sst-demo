const API = import.meta.env.VITE_API_URL;

export async function getHello() {
  const res = await fetch(`${API}/hello`);
  if (!res.ok) throw new Error(`GET /hello failed: ${res.status}`);
  return res.json() as Promise<{ message: string }>;
}

export async function postHello(payload: unknown) {
  const res = await fetch(`${API}/hello`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`POST /hello failed: ${res.status}`);
  return res.json();
}
