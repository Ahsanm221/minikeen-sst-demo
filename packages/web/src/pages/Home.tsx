import { useEffect, useState } from "react";
import { getHello, postHello } from "../services/helloApi";

export default function Home() {
  const [getMsg, setGetMsg] = useState("");
  const [postResp, setPostResp] = useState("");

  useEffect(() => {
    getHello()
      .then((d) => setGetMsg(d.message))
      .catch((e) => setGetMsg(`GET failed: ${String(e)}`));
  }, []);

  async function sendPost() {
    try {
      const data = await postHello({ clickedAt: new Date().toISOString() });
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

      <pre
        style={{
          marginTop: 12,
          padding: 12,
          background: "#111",
          color: "#eee",
          overflowX: "auto",
        }}
      >
        {postResp}
      </pre>
    </div>
  );
}
