import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [getMsg, setGetMsg] = useState<string>("");
  const [postResp, setPostResp] = useState<string>("");

  useEffect(() => {
    fetch(`${API}/hello`)
      .then((r) => r.json())
      .then((d) => setGetMsg(d.message))
      .catch((e) => setGetMsg(`GET failed: ${String(e)}`));
  }, []);

  async function sendPost() {
    try {
      const res = await fetch(`${API}/hello`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clickedAt: new Date().toISOString() }),
      });
      const data = await res.json();
      setPostResp(JSON.stringify(data, null, 2));
    } catch (e) {
      setPostResp(`POST failed: ${String(e)}`);
    }
  }

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>MiniKeen Frontend</h1>

      <h2>GET /hello</h2>
      <div>{getMsg || "Loading..."}</div>

      <h2 style={{ marginTop: 24 }}>POST /hello</h2>
      <button onClick={sendPost}>Send POST</button>

      <pre style={{ marginTop: 12, padding: 12, background: "#111", color: "#eee", overflowX: "auto" }}>
        {postResp}
      </pre>
    </div>
  );
}
