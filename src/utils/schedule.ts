import { business, type ScheduleSlot } from "../config/business";

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

/** Verifica se a loja está aberta agora, no fuso horário da loja. */
export function isOpenNow(now: Date = new Date()): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: business.timeZone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const day = WEEKDAYS[get("weekday")];
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  const slot = business.schedule.find((item) => item.days.includes(day));

  return Boolean(slot) && minutes >= toMinutes(slot!.open) && minutes < toMinutes(slot!.close);
}

export function formatSlot(slot: ScheduleSlot): string {
  const format = (time: string) => time.replace(":", "h");
  return `${slot.label}: ${format(slot.open)} às ${format(slot.close)}`;
}
