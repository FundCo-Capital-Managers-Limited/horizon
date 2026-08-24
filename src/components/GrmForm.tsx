"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const COMPLAINT_TYPES = [
  "Land or asset use",
  "Community engagement / consultation",
  "Labour or employment concern",
  "Environmental or safety concern",
  "Gender or inclusion concern",
  "Other",
];

export default function GrmForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const message = [
      `Community/Location: ${raw.location || "-"}`,
      `Type of Complaint: ${raw.complaintType || "-"}`,
      `Confidentiality: ${raw.confidentiality || "-"}`,
      "",
      String(raw.details || ""),
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: raw.name,
          email: raw.email,
          subject: "Grievance Redress Mechanism submission",
          message,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <h3 className="text-lg font-semibold text-brand mb-2">
          Grievance submitted
        </h3>
        <p className="text-text-secondary">
          Your grievance has been received and will be acknowledged within
          48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-navy mb-4">
          Personal Information
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-text mb-1">
              Community / Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-navy mb-4">
          Grievance Details
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="complaintType" className="block text-sm font-medium text-text mb-1">
              Type of Grievance
            </label>
            <select
              id="complaintType"
              name="complaintType"
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none"
            >
              {COMPLAINT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-text mb-1">
              Describe your grievance
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-brand focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-navy mb-4">
          Confidentiality Preference
        </h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-text">
            <input type="radio" name="confidentiality" value="Confidential" defaultChecked />
            I want my grievance to remain confidential.
          </label>
          <label className="flex items-center gap-2 text-sm text-text">
            <input type="radio" name="confidentiality" value="Shareable" />
            I agree my information can be shared with relevant parties to resolve this issue.
          </label>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Grievance"}
      </button>
    </form>
  );
}
