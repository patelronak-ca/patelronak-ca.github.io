"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied.");
    } catch {
      setMessage("Copy blocked here. Select the address to copy it.");
    }
  }

  return (
    <>
      <button className="btn primary" type="button" onClick={copy}>
        Copy email
      </button>
      <p className="copy-msg" role="status" aria-live="polite">
        {message}
      </p>
    </>
  );
}
