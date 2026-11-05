"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { programmes } from "@/lib/programmes";
import { site } from "@/lib/site";

type Fields = "name" | "email" | "phone" | "programme" | "message" | "consent";
type Errors = Partial<Record<Fields, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s()-]{8,18}$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (name.length < 2) errors.name = "Enter your name.";
  if (!email) errors.email = "Enter your email address.";
  else if (!EMAIL.test(email)) errors.email = "Enter an email address like name@example.com.";
  if (phone && !PHONE.test(phone)) errors.phone = "Enter a UK phone number, for example 07700 900123.";
  if (message.length < 10) errors.message = "Tell Maya a little about your goals (at least 10 characters).";
  if (!data.get("consent")) errors.consent = "Tick the box so Maya can reply to you.";
  return errors;
}

const fieldClass =
  "mt-2 block w-full rounded-md border bg-ink px-4 py-3 text-base text-paper placeholder:text-paper/40 transition-colors focus:border-lime focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sentName, setSentName] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    const first = Object.keys(found)[0] as Fields | undefined;
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // Demo site: nothing is sent anywhere.
    setSentName(String(data.get("name")).trim().split(/\s+/)[0]);
  }

  function clearError(field: Fields) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  if (sentName) {
    return (
      <div role="status" className="rounded-lg border border-lime/60 bg-panel p-8">
        <CheckCircle2 aria-hidden="true" className="size-9 text-lime" />
        <h3 className="display mt-4 text-4xl">Thanks, {sentName}</h3>
        <p className="mt-3 text-paper/85">
          Your details passed every check. This is a demo website, so the message was not sent anywhere. To book a real
          consultation you would call <a href={site.phoneHref} className="font-bold whitespace-nowrap text-lime underline underline-offset-2">{site.phoneDisplay}</a> or
          email <a href={`mailto:${site.email}`} className="font-bold text-lime underline underline-offset-2">{site.email}</a>.
        </p>
        <button
          type="button"
          onClick={() => setSentName(null)}
          className="mt-6 inline-flex min-h-11 items-center rounded-md border border-paper/35 px-5 font-bold hover:border-lime hover:text-lime"
        >
          Send another message
        </button>
      </div>
    );
  }

  const describe = (f: Fields, hint?: string) =>
    [errors[f] ? `${f}-error` : null, hint].filter(Boolean).join(" ") || undefined;

  const errorText = (field: Fields) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#ff8a8a]">
        <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  const border = (f: Fields) => (errors[f] ? "border-[#ff8a8a]" : "border-line");

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="grid gap-5" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold">
            Name <span className="text-mute">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            onChange={() => clearError("name")}
            className={`${fieldClass} ${border("name")}`}
          />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email <span className="text-mute">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            onChange={() => clearError("email")}
            className={`${fieldClass} ${border("email")}`}
          />
          {errorText("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-semibold">
            Phone <span className="text-mute">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={describe("phone")}
            onChange={() => clearError("phone")}
            className={`${fieldClass} ${border("phone")}`}
          />
          {errorText("phone")}
        </div>
        <div>
          <label htmlFor="programme" className="font-semibold">
            Interested in <span className="text-mute">(optional)</span>
          </label>
          <select
            id="programme"
            name="programme"
            defaultValue=""
            className={`${fieldClass} border-line appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23B6FF3B%22 stroke-width=%222.5%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
          >
            <option value="">Not sure yet</option>
            {programmes.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-semibold">
          Your goals <span className="text-mute">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={describe("message", "message-hint")}
          onChange={() => clearError("message")}
          className={`${fieldClass} ${border("message")} resize-y`}
        />
        <p id="message-hint" className="mt-2 text-sm text-mute">
          For example: what you want to change, how often you can train, and any injuries Maya should know about.
        </p>
        {errorText("message")}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            aria-invalid={!!errors.consent}
            aria-describedby={describe("consent")}
            onChange={() => clearError("consent")}
            className="mt-1 size-5 shrink-0 accent-[#B6FF3B]"
          />
          <label htmlFor="consent" className="text-[0.95rem] text-paper/90">
            I agree that Maya Stone Fitness can use these details to reply to my enquiry.
          </label>
        </div>
        {errorText("consent")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-lime px-6 font-bold whitespace-nowrap text-ink transition-colors hover:bg-paper"
        >
          Book my free consultation
        </button>
        <p id="form-note" className="text-sm text-mute">
          Demo form: your details are checked in your browser and never sent.
        </p>
      </div>
    </form>
  );
}
