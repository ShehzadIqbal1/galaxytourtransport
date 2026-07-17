"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  CalendarIcon,
  CloseIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { CtaButton } from "@/components/ui/CtaButton";
import { fleetVehicles } from "@/content/fleet";
import { quoteFormContent } from "@/content/quoteForm";
import {
  buildQuoteWhatsAppMessage,
  buildWhatsAppLink,
  formatUaeWhatsAppPhone,
  isValidUaeLocalMobile,
} from "@/lib/whatsapp";

export interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

type FieldKey =
  | "name"
  | "phone"
  | "pickup"
  | "dropoff"
  | "date"
  | "time"
  | "vehicle"
  | "vehicleCustom";

type FormErrors = Partial<Record<FieldKey, string>>;

const CUSTOM_VEHICLE_VALUE = "custom";

const fieldClassName =
  "mt-1.5 w-full rounded-md border border-ivory/15 bg-onyx px-3.5 py-3 text-base text-ivory shadow-soft transition-default placeholder:text-ivory/35 focus-visible:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const labelClassName = "text-sm font-semibold text-ivory/90";

function todayInputValue(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}/${month}/${year}`;
}

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  if (!open) {
    return null;
  }

  return <QuoteModalPanel onClose={onClose} />;
}

function QuoteModalPanel({ onClose }: { onClose: () => void }) {
  const content = quoteFormContent;
  const formId = useId();
  const titleId = `${formId}-title`;
  const closeRef = useRef<HTMLButtonElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [customVehicle, setCustomVehicle] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState(false);

  const isCustomVehicle = vehicle === CUSTOM_VEHICLE_VALUE;

  const vehicleOptions = useMemo(
    () =>
      fleetVehicles.map((item) => ({
        value: item.id,
        label: `${item.name} (${item.categoryLabel})`,
        name: item.name,
      })),
    [],
  );

  const minDate = todayInputValue();

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (name.trim().length < 2) {
      next.name = content.errors.name;
    }
    if (!isValidUaeLocalMobile(phone)) {
      next.phone = content.errors.phone;
    }
    if (!pickup.trim()) {
      next.pickup = content.errors.pickup;
    }
    if (!dropoff.trim()) {
      next.dropoff = content.errors.dropoff;
    }
    if (!date) {
      next.date = content.errors.date;
    } else if (date < minDate) {
      next.date = content.errors.datePast;
    }
    if (!time) {
      next.time = content.errors.time;
    }
    if (!vehicle) {
      next.vehicle = content.errors.vehicle;
    } else if (vehicle === CUSTOM_VEHICLE_VALUE && customVehicle.trim().length < 2) {
      next.vehicleCustom = content.errors.vehicleCustom;
    }

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const selected = isCustomVehicle
      ? customVehicle.trim()
      : (vehicleOptions.find((option) => option.value === vehicle)?.name ??
        vehicle);

    const message = buildQuoteWhatsAppMessage({
      name,
      phone: formatUaeWhatsAppPhone(phone),
      pickup,
      dropoff,
      date: formatDisplayDate(date),
      time,
      vehicle: selected,
    });

    window.open(
      buildWhatsAppLink(message),
      "_blank",
      "noopener,noreferrer",
    );
    onClose();
  }

  function errorFor(key: FieldKey): string | undefined {
    return touched ? errors[key] : undefined;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-onyx/70 backdrop-blur-[2px]"
        aria-label="Close quote form"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[min(94dvh,52rem)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-gold/30 bg-charcoal shadow-card sm:rounded-lg"
      >
        <div className="h-1 w-full bg-gold" aria-hidden="true" />

        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-ivory/10 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-gold">
              <CalendarIcon className="h-5 w-5 shrink-0" />
              <h2
                id={titleId}
                className="font-display text-xl text-ivory sm:text-2xl"
              >
                {content.title}
              </h2>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-ivory/65">
              {content.description}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-ivory/15 text-ivory transition-default hover:border-gold hover:text-gold"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6"
          noValidate
        >
          <p className="mb-5 text-xs text-ivory/45">{content.requiredNote}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-name`} className={labelClassName}>
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
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={content.namePlaceholder}
                className={fieldClassName}
                aria-invalid={Boolean(errorFor("name"))}
                aria-describedby={
                  errorFor("name") ? `${formId}-name-error` : undefined
                }
              />
              {errorFor("name") ? (
                <p
                  id={`${formId}-name-error`}
                  className="mt-1.5 text-sm text-gold-bright"
                  role="alert"
                >
                  {errorFor("name")}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-phone`} className={labelClassName}>
                {content.phoneLabel}{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </label>
              <div className="mt-1.5 flex gap-2">
                <span className="inline-flex min-h-12 shrink-0 items-center rounded-md border border-ivory/15 bg-onyx/80 px-3 text-sm font-semibold text-ivory/80">
                  {content.phoneCodeLabel}
                </span>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value.replace(/[^\d\s]/g, ""))
                  }
                  placeholder={content.phonePlaceholder}
                  className={`${fieldClassName} mt-0`}
                  aria-invalid={Boolean(errorFor("phone"))}
                  aria-describedby={
                    errorFor("phone") ? `${formId}-phone-error` : undefined
                  }
                />
              </div>
              {errorFor("phone") ? (
                <p
                  id={`${formId}-phone-error`}
                  className="mt-1.5 text-sm text-gold-bright"
                  role="alert"
                >
                  {errorFor("phone")}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-pickup`} className={labelClassName}>
                {content.pickupLabel}{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id={`${formId}-pickup`}
                name="pickup"
                type="text"
                value={pickup}
                onChange={(event) => setPickup(event.target.value)}
                placeholder={content.pickupPlaceholder}
                className={fieldClassName}
                aria-invalid={Boolean(errorFor("pickup"))}
                aria-describedby={
                  errorFor("pickup") ? `${formId}-pickup-error` : undefined
                }
              />
              {errorFor("pickup") ? (
                <p
                  id={`${formId}-pickup-error`}
                  className="mt-1.5 text-sm text-gold-bright"
                  role="alert"
                >
                  {errorFor("pickup")}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-dropoff`} className={labelClassName}>
                {content.dropoffLabel}{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id={`${formId}-dropoff`}
                name="dropoff"
                type="text"
                value={dropoff}
                onChange={(event) => setDropoff(event.target.value)}
                placeholder={content.dropoffPlaceholder}
                className={fieldClassName}
                aria-invalid={Boolean(errorFor("dropoff"))}
                aria-describedby={
                  errorFor("dropoff") ? `${formId}-dropoff-error` : undefined
                }
              />
              {errorFor("dropoff") ? (
                <p
                  id={`${formId}-dropoff-error`}
                  className="mt-1.5 text-sm text-gold-bright"
                  role="alert"
                >
                  {errorFor("dropoff")}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-date`} className={labelClassName}>
                {content.dateLabel}{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id={`${formId}-date`}
                name="date"
                type="date"
                min={minDate}
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className={`${fieldClassName} [color-scheme:dark]`}
                aria-invalid={Boolean(errorFor("date"))}
                aria-describedby={
                  errorFor("date") ? `${formId}-date-error` : undefined
                }
              />
              {errorFor("date") ? (
                <p
                  id={`${formId}-date-error`}
                  className="mt-1.5 text-sm text-gold-bright"
                  role="alert"
                >
                  {errorFor("date")}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-time`} className={labelClassName}>
                {content.timeLabel}{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id={`${formId}-time`}
                name="time"
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className={`${fieldClassName} [color-scheme:dark]`}
                aria-invalid={Boolean(errorFor("time"))}
                aria-describedby={
                  errorFor("time") ? `${formId}-time-error` : undefined
                }
              />
              {errorFor("time") ? (
                <p
                  id={`${formId}-time-error`}
                  className="mt-1.5 text-sm text-gold-bright"
                  role="alert"
                >
                  {errorFor("time")}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-vehicle`} className={labelClassName}>
                {content.vehicleLabel}{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </label>
              <select
                id={`${formId}-vehicle`}
                name="vehicle"
                value={vehicle}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setVehicle(nextValue);
                  if (nextValue !== CUSTOM_VEHICLE_VALUE) {
                    setCustomVehicle("");
                  }
                }}
                className={fieldClassName}
                aria-invalid={Boolean(errorFor("vehicle"))}
                aria-describedby={
                  errorFor("vehicle") ? `${formId}-vehicle-error` : undefined
                }
              >
                <option value="" disabled>
                  {content.vehiclePlaceholder}
                </option>
                {vehicleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                <option value={CUSTOM_VEHICLE_VALUE}>
                  {content.vehicleCustomOptionLabel}
                </option>
              </select>
              {errorFor("vehicle") ? (
                <p
                  id={`${formId}-vehicle-error`}
                  className="mt-1.5 text-sm text-gold-bright"
                  role="alert"
                >
                  {errorFor("vehicle")}
                </p>
              ) : null}

              {isCustomVehicle ? (
                <div className="mt-4">
                  <label
                    htmlFor={`${formId}-vehicle-custom`}
                    className={labelClassName}
                  >
                    {content.vehicleCustomLabel}{" "}
                    <span className="text-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id={`${formId}-vehicle-custom`}
                    name="vehicleCustom"
                    type="text"
                    value={customVehicle}
                    onChange={(event) => setCustomVehicle(event.target.value)}
                    placeholder={content.vehicleCustomPlaceholder}
                    className={fieldClassName}
                    aria-invalid={Boolean(errorFor("vehicleCustom"))}
                    aria-describedby={
                      errorFor("vehicleCustom")
                        ? `${formId}-vehicle-custom-error`
                        : undefined
                    }
                  />
                  {errorFor("vehicleCustom") ? (
                    <p
                      id={`${formId}-vehicle-custom-error`}
                      className="mt-1.5 text-sm text-gold-bright"
                      role="alert"
                    >
                      {errorFor("vehicleCustom")}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>

          <div className="sticky bottom-0 mt-6 border-t border-ivory/10 bg-charcoal pt-4 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
            <CtaButton
              type="submit"
              variant="whatsapp"
              size="lg"
              className="w-full"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              {content.submitLabel}
            </CtaButton>
          </div>
        </form>
      </div>
    </div>
  );
}
