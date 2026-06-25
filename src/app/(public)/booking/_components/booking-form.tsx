"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const sessionTypes = [
  "Portrait",
  "Couple",
  "Maternity",
  "Outdoor",
  "Editorial",
] as const;

const bookingFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  sessionType: z.enum(sessionTypes, {
    error: "Please choose a session type.",
  }),
  preferredDate: z.date({
    error: "Please choose a preferred date.",
  }),
  message: z
    .string()
    .min(10, "Tell me a little more about what you want to create."),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function BookingForm() {
  const [isSent, setIsSent] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    setIsSent(true);
  };

  return (
    <form
      className="grid gap-4 rounded-4xl bg-brand-charcoal p-5 sm:p-6 lg:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="text-xs font-black uppercase tracking-[0.2em] text-brand-red"
          >
            Name
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-3xl border border-brand-white/10 bg-brand-black px-4 py-4 text-sm text-brand-white outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-red"
            placeholder="Your name"
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="mt-2 text-xs text-brand-red">{errors.fullName.message}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-xs font-black uppercase tracking-[0.2em] text-brand-red"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-3xl border border-brand-white/10 bg-brand-black px-4 py-4 text-sm text-brand-white outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-red"
            placeholder="hello@example.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-2 text-xs text-brand-red">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="text-xs font-black uppercase tracking-[0.2em] text-brand-red"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-3xl border border-brand-white/10 bg-brand-black px-4 py-4 text-sm text-brand-white outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-red"
            placeholder="+371 ..."
            {...register("phone")}
          />
        </div>

        <Controller
          control={control}
          name="sessionType"
          render={({ field }) => (
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
                Session
              </p>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="mt-2 h-auto w-full rounded-3xl border-brand-white/10 bg-brand-black px-4 py-4 text-sm text-brand-white hover:bg-brand-black">
                  <SelectValue placeholder="Choose session type" />
                </SelectTrigger>
                <SelectContent
                  align="start"
                  position="popper"
                  className="z-60 w-(--radix-select-trigger-width) rounded-3xl border border-brand-white/10 bg-brand-black p-2 text-brand-white"
                >
                  {sessionTypes.map((sessionType) => (
                    <SelectItem
                      key={sessionType}
                      value={sessionType}
                      className="rounded-2xl px-3 py-3 text-sm font-black uppercase tracking-[0.08em] focus:bg-brand-red-deep focus:text-brand-white"
                    >
                      {sessionType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.sessionType ? (
                <p className="mt-2 text-xs text-brand-red">
                  {errors.sessionType.message}
                </p>
              ) : null}
            </div>
          )}
        />
      </div>

      <Controller
        control={control}
        name="preferredDate"
        render={({ field }) => (
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
              Preferred date
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "mt-2 h-auto w-full justify-between rounded-3xl border-brand-white/10 bg-brand-black px-4 py-4 text-left text-sm font-medium text-brand-white hover:bg-brand-black hover:text-brand-red",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value ? format(field.value, "PPP") : "Choose a date"}
                  <CalendarIcon className="size-4" aria-hidden="true" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-auto rounded-3xl border border-brand-white/10 bg-brand-charcoal p-2"
              >
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={{ before: today }}
                  autoFocus
                />
              </PopoverContent>
            </Popover>
            {errors.preferredDate ? (
              <p className="mt-2 text-xs text-brand-red">
                {errors.preferredDate.message}
              </p>
            ) : null}
          </div>
        )}
      />

      <div>
        <label
          htmlFor="message"
          className="text-xs font-black uppercase tracking-[0.2em] text-brand-red"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full resize-none rounded-3xl border border-brand-white/10 bg-brand-black px-4 py-4 text-sm text-brand-white outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-red"
          placeholder="Tell me the session type, mood, location idea, timing, or anything you already know."
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-2 text-xs text-brand-red">{errors.message.message}</p>
        ) : null}
      </div>

      {isSent ? (
        <p className="rounded-3xl bg-brand-black px-4 py-4 text-sm leading-6 text-brand-white">
          Front-end preview only: the form is ready visually, but backend
          submission still needs to be connected.
        </p>
      ) : null}

      <button
        type="submit"
        className="rounded-[20px] bg-brand-red-deep px-3 py-4 text-xs font-black uppercase tracking-[0.08em] text-foreground transition-colors hover:bg-brand-white hover:text-brand-black"
      >
        Send request
      </button>
    </form>
  );
}
