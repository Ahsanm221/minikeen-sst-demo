export async function handler() {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Hello from MiniKeen 👋" }),
  };
}
export async function post(event: any) {
  const input = event?.body ? JSON.parse(event.body) : {};
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "POST /hello received ✅",
      received: input,
    }),
  };
}
