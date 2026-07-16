"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContactFormContent } from "@/lib/types";
import {
  buildContactWhatsAppMessage,
  buildWhatsAppLink,
} from "@/lib/whatsapp";

export interface ContactFormProps {
  content: ContactFormContent;
}

const fieldClassName =
  "mt-2 w-full rounded-md border border-ink/15 bg-paper px-4 py-3 text-base text-ink shadow-soft transition-default placeholder:text-ink-muted/70 focus-visible:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function ContactForm({ content }: ContactFormProps) {
  const formId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enquiry = {
      name,
      phone,
      interest,
      message,
      ...(email.trim() ? { email: email.trim() } : {}),
    };

    const whatsappUrl = buildWhatsAppLink(
      buildContactWhatsAppMessage(enquiry),
    );

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact-form"
      className="section-padding bg-sand/40"
      aria-labelledby="contact-form-heading"
    >
      <div className="container-content">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            titleId="contact-form-heading"
            description={content.description}
            tone="light"
          />
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-md border border-sand/80 bg-paper p-6 shadow-soft sm:p-8"
            >
              <p className="mb-6 text-sm text-ink-muted">{content.requiredNote}</p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor={`${formId}-name`}
                    className="text-sm font-semibold text-ink"
                  >
                    {content.nameLabel}{" "}
                    <span className="text-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={content.namePlaceholder}
                    className={fieldClassName}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor={`${formId}-phone`}
                    className="text-sm font-semibold text-ink"
                  >
                    {content.phoneLabel}{" "}
                    <span className="text-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder={content.phonePlaceholder}
                    className={fieldClassName}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor={`${formId}-email`}
                    className="text-sm font-semibold text-ink"
                  >
                    {content.emailLabel}
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={content.emailPlaceholder}
                    className={fieldClassName}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor={`${formId}-interest`}
                    className="text-sm font-semibold text-ink"
                  >
                    {content.interestLabel}{" "}
                    <span className="text-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <select
                    id={`${formId}-interest`}
                    name="interest"
                    required
                    value={interest}
                    onChange={(event) => setInterest(event.target.value)}
                    className={fieldClassName}
                  >
                    <option value="" disabled>
                      {content.interestPlaceholder}
                    </option>
                    {content.interestOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor={`${formId}-message`}
                    className="text-sm font-semibold text-ink"
                  >
                    {content.messageLabel}{" "}
                    <span className="text-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={content.messagePlaceholder}
                    className={`${fieldClassName} resize-y min-h-32`}
                  />
                </div>
              </div>

              <div className="mt-8">
                <CtaButton type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto">
                  {content.submitLabel}
                </CtaButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
