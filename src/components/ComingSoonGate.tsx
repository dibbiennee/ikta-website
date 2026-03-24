"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PASS = "ikta2026";
const STORAGE_KEY = "ikta-access";

export default function ComingSoonGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthorized(true);
    }
    setLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthorized(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (!loaded) return null;

  if (authorized) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        fontFamily: "sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "1.5rem",
          marginBottom: "2rem",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/logo-ikta-world.png"
          alt="IKTA World"
          width={220}
          height={220}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        Presto Disponibile
      </h1>

      <p style={{ color: "#999", fontSize: "1.1rem", marginBottom: "2.5rem" }}>
        Il sito è in fase di sviluppo. Torna a trovarci presto.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          width: "100%",
          maxWidth: "320px",
        }}
      >
        <input
          type="password"
          placeholder="Inserisci la password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: error ? "2px solid #e53e3e" : "2px solid #333",
            background: "#111",
            color: "#fff",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color 0.2s",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "none",
            background: "#c8102e",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Accedi
        </button>
        {error && (
          <p style={{ color: "#e53e3e", fontSize: "0.9rem", margin: 0 }}>
            Password errata
          </p>
        )}
      </form>
    </div>
  );
}
