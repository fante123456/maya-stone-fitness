"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, Info } from "lucide-react";
import { services } from "@/lib/coaching";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

type Fields = "name" | "email" | "phone" | "programme" | "message" | "consent";
type Errors = Partial<Record<Fields, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s()-]{8,18}$/;

const text = {
  fr: {
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    interest: "Ce qui vous intéresse",
    notSure: "Je ne sais pas encore",
    goals: "Votre objectif",
    required: "(obligatoire)",
    optional: "(facultatif)",
    hint: "Par exemple : ce que vous voulez changer, votre niveau actuel, et une éventuelle blessure à signaler.",
    consent: "J'ai compris que ce formulaire est une démonstration et que rien n'est envoyé.",
    submit: "Envoyer",
    note: `Formulaire de démonstration : rien n'est envoyé. Pour un vrai rendez-vous, appelez le ${site.phoneDisplay}.`,
    errName: "Indiquez votre nom.",
    errEmail: "Indiquez votre adresse e-mail.",
    errEmailFormat: "Indiquez une adresse e-mail comme nom@exemple.fr.",
    errPhone: "Indiquez un numéro de téléphone, par exemple 06 12 34 56 78.",
    errMessage: "Décrivez votre objectif en quelques mots (10 caractères minimum).",
    errConsent: "Cochez la case pour continuer.",
    doneTitle: "Formulaire de démonstration – appelez le",
    doneText: "Ce site est un projet d'entraînement : votre message n'a été envoyé à personne. Pour joindre Hassane, appelez le",
    again: "Revenir au formulaire",
  },
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    interest: "What interests you",
    notSure: "Not sure yet",
    goals: "Your goal",
    required: "(required)",
    optional: "(optional)",
    hint: "For example: what you want to change, your current level, and any injury to mention.",
    consent: "I understand this form is a demo and nothing is sent.",
    submit: "Send",
    note: `Demo form: nothing is sent. For a real appointment, call ${site.phoneDisplay}.`,
    errName: "Enter your name.",
    errEmail: "Enter your email address.",
    errEmailFormat: "Enter an email address like name@example.com.",
    errPhone: "Enter a phone number, for example 06 12 34 56 78.",
    errMessage: "Describe your goal in a few words (at least 10 characters).",
    errConsent: "Tick the box to continue.",
    doneTitle: "Demo form – call",
    doneText: "This website is a practice project: your message was not sent to anyone. To reach Hassane, call",
    again: "Back to the form",
  },
};
type Text = (typeof text)["fr"];

function validate(data: FormData, t: Text): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (name.length < 2) errors.name = t.errName;
  if (!email) errors.email = t.errEmail;
  else if (!EMAIL.test(email)) errors.email = t.errEmailFormat;
  if (phone && !PHONE.test(phone)) errors.phone = t.errPhone;
  if (message.length < 10) errors.message = t.errMessage;
  if (!data.get("consent")) errors.consent = t.errConsent;
  return errors;
}

const fieldClass =
  "mt-2 block w-full rounded-md border bg-ink px-4 py-3 text-base text-paper placeholder:text-paper/40 transition-colors focus:border-lime focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

export function ContactForm({ lang }: { lang: Lang }) {
  const t = text[lang];
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data, t);
    setErrors(found);
    const first = Object.keys(found)[0] as Fields | undefined;
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // Demo site: nothing is sent anywhere, the visitor is told to call instead.
    setDone(true);
  }

  function clearError(field: Fields) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  if (done) {
    return (
      <div role="status" className="rounded-lg border border-lime/60 bg-panel p-8">
        <Info aria-hidden="true" className="size-9 text-lime" />
        <h3 className="display mt-4 text-4xl">
          {t.doneTitle}{" "}
          <a href={site.phoneHref} className="whitespace-nowrap text-lime underline underline-offset-4">
            {site.phoneDisplay}
          </a>
        </h3>
        <p className="mt-3 text-paper/85">
          {t.doneText}{" "}
          <a href={site.phoneHref} className="font-bold whitespace-nowrap text-lime underline underline-offset-2">
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 inline-flex min-h-11 items-center rounded-md border border-paper/35 px-5 font-bold hover:border-lime hover:text-lime"
        >
          {t.again}
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
            {t.name} <span className="text-mute">{t.required}</span>
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
            {t.email} <span className="text-mute">{t.required}</span>
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
            {t.phone} <span className="text-mute">{t.optional}</span>
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
            {t.interest} <span className="text-mute">{t.optional}</span>
          </label>
          <select
            id="programme"
            name="programme"
            defaultValue=""
            className={`${fieldClass} border-line appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23B6FF3B%22 stroke-width=%222.5%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
          >
            <option value="">{t.notSure}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title[lang]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-semibold">
          {t.goals} <span className="text-mute">{t.required}</span>
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
          {t.hint}
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
            {t.consent}
          </label>
        </div>
        {errorText("consent")}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-lime px-6 font-bold whitespace-nowrap text-ink transition-colors hover:bg-paper"
        >
          {t.submit}
        </button>
        <p id="form-note" className="text-sm text-mute">
          {t.note}
        </p>
      </div>
    </form>
  );
}
