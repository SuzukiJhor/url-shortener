import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!url) return;
    const res = await axios.post("http://localhost:3000/shorten", { url });
    setShortUrl(res.data.shortUrl);
    setUrl("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "system-ui, sans-serif",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "3rem 4rem",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          maxWidth: "800px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
            textAlign: "center",
            color: "#111827",
          }}
        >
        Encurtador de URL   🔗 
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
            gap: "1rem",
          }}
        >
          <input
            type="url"
            placeholder="Cole sua URL aqui..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "0.75rem",
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: "1rem",
              transition: "all 0.2s ease",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            style={{
              background: "#4f46e5",
              color: "white",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "0.75rem",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "background 0.2s ease",
            }}
          >
            Encurtar
          </button>
        </form>

        {shortUrl && (
          <div
            style={{
              marginTop: "2rem",
              padding: "1.25rem",
              background: "#f9fafb",
              borderRadius: "0.75rem",
              textAlign: "center",
              wordBreak: "break-word",
              fontSize: "1.05rem",
              border: "1px solid #e5e7eb",
            }}
          >
            ✅ Sua URL curta:{" "}
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2563eb", fontWeight: "600" }}
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
