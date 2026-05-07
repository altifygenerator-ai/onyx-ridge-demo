"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please call or text instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-[var(--border)] bg-[#0b0d12] p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Name"
          className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)]"
        />

        <input
          name="phone"
          required
          placeholder="Phone Number"
          className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)]"
        />
      </div>

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)]"
      />

      <select
        name="service"
        defaultValue=""
        className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none focus:border-[var(--primary)]"
      >
        <option value="" disabled>
          Service Needed
        </option>
        <option value="Water Heaters">Water Heaters</option>
        <option value="Slab Leaks">Slab Leaks</option>
        <option value="Sewer Repairs">Sewer Repairs</option>
        <option value="Gas Testing">Gas Testing</option>
        <option value="Kitchen Plumbing">Kitchen Plumbing</option>
        <option value="Bathroom Remodel Plumbing">
          Bathroom Remodel Plumbing
        </option>
        <option value="Other Plumbing Work">Other Plumbing Work</option>
      </select>

      <textarea
        name="message"
        required
        placeholder="Tell us about the job..."
        rows={5}
        className="rounded-lg border border-white/10 bg-black p-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)]"
      />

      <button type="submit" disabled={loading} className="btn btn-gold">
        {loading ? "Sending..." : "Request Free Estimate"}
      </button>

      {success && (
        <p className="text-sm font-bold text-[var(--primary)]">
          Your message has been sent. Onyx Ridge will follow up soon.
        </p>
      )}

      {error && (
        <p className="text-sm font-bold text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}