"use client";

import { useState } from "react";

type ApiResponse = {
  success?: boolean;
  error?: string;
};

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
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: ApiResponse = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Your message could not be sent. Please try again."
        );
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Quote form submission failed:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call or text instead."
      );
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
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/80">Name</span>

          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            disabled={loading}
            className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/80">
            Phone Number
          </span>

          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Your phone number"
            disabled={loading}
            className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/80">
          Email Address
        </span>

        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          disabled={loading}
          className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/80">
          Service Needed
        </span>

        <select
          name="service"
          defaultValue=""
          disabled={loading}
          className="h-12 rounded-lg border border-white/10 bg-black px-4 text-white outline-none focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <option value="" disabled>
            Choose a plumbing service
          </option>

          <option value="Drain Cleaning">Drain Cleaning</option>
          <option value="Water Heaters">Water Heaters</option>

          <option value="Sewer & Water Line Repairs">
            Sewer &amp; Water Line Repairs
          </option>

          <option value="Slab Leaks">Slab Leaks</option>

          <option value="Gas Piping & Testing">
            Gas Piping &amp; Testing
          </option>

          <option value="Kitchen Plumbing">Kitchen Plumbing</option>

          <option value="Bathroom Remodel Plumbing">
            Bathroom Remodel Plumbing
          </option>

          <option value="New Construction Plumbing">
            New Construction Plumbing
          </option>

          <option value="Other Plumbing Work">Other Plumbing Work</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/80">
          Tell Us About the Job
        </span>

        <textarea
          name="message"
          required
          placeholder="Tell us what is going on, where the job is located, and any other details that may help..."
          rows={5}
          disabled={loading}
          className="resize-y rounded-lg border border-white/10 bg-black p-4 text-white outline-none placeholder:text-white/40 focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-gold disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending Request..." : "Request Free Estimate"}
      </button>

      <div aria-live="polite">
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
      </div>
    </form>
  );
}

