/** Iran / Tehran timezone + Jalali (Persian) calendar display helpers */

export const TEHRAN_TZ = 'Asia/Tehran';

const JALALI_LATN = 'fa-IR-u-ca-persian-nu-latn';

function toDate(input: string | number | Date | null | undefined): Date | null {
  if (input == null || input === '') return null;
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function partsMap(date: Date, options: Intl.DateTimeFormatOptions) {
  const parts = new Intl.DateTimeFormat(JALALI_LATN, {
    timeZone: TEHRAN_TZ,
    ...options,
  }).formatToParts(date);
  const map: Record<string, string> = {};
  for (const p of parts) {
    if (p.type !== 'literal') map[p.type] = p.value;
  }
  return map;
}

/** Shamsi date + Tehran time — example: `1405/05/02 · 18:18` */
export function formatTehranDateTime(
  input: string | number | Date | null | undefined,
): string {
  const date = toDate(input);
  if (!date) return '';
  const p = partsMap(date, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    hourCycle: 'h23',
  });
  return `${p.year}/${p.month}/${p.day} · ${p.hour}:${p.minute}`;
}

/** Shamsi date only — example: `1405/05/02` */
export function formatTehranDate(
  input: string | number | Date | null | undefined,
): string {
  const date = toDate(input);
  if (!date) return '';
  const p = partsMap(date, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return `${p.year}/${p.month}/${p.day}`;
}

/** Jalali year in Tehran — for copyright etc. */
export function formatTehranYear(
  input: string | number | Date | null | undefined = new Date(),
): string {
  const date = toDate(input);
  if (!date) return '';
  return partsMap(date, { year: 'numeric' }).year ?? '';
}
