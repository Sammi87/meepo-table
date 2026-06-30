import { SubTableStore, TableStore } from "@/types/tableTypes";

export const uid = (): string => {
	return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const formatDate = (date: Date, locale: string = 'sv-SE'): string => {
	return new Intl.DateTimeFormat(locale).format(date);
};

export const formatNumber = (number: number, locale: string = 'sv-SE'): string => new Intl.NumberFormat(locale).format(number);

// --- Sort comparators -------------------------------------------------------
// Pure, side-effect-free comparators a column can own. Keeping them here makes
// them trivially unit-testable in isolation from the table/Vue.

/** Coerce a date-ish value (Date | number | string) to a sortable timestamp. */
export const toTime = (value: unknown): number => {
  const t = value instanceof Date ? value.getTime()
    : typeof value === 'number' ? value
    : Date.parse(String(value));
  return Number.isNaN(t) ? -Infinity : t; // invalid/empty dates sort first
};

/** Compare two date-ish values chronologically. */
export const compareDates = (a: unknown, b: unknown): number => toTime(a) - toTime(b);

/** Compare two number-ish values numerically (not lexically: 999 < 1000). */
export const compareNumbers = (a: unknown, b: unknown): number => {
  const na = Number(a), nb = Number(b);
  return (Number.isNaN(na) ? -Infinity : na) - (Number.isNaN(nb) ? -Infinity : nb);
};

/** Locale-aware string comparison; the fallback for untyped columns. */
export const compareStrings = (a: unknown, b: unknown, locale = 'sv'): number =>
  String(a ?? '').localeCompare(String(b ?? ''), locale, { numeric: true, sensitivity: 'base' });

export const getCssVar = (variable: string) => getComputedStyle(document.body).getPropertyValue(variable);

export const isObject = (input: any): boolean => {
  if (typeof input !== 'object' || input === null) {
    return false;
  }
  return Object.keys(input).length > 0;
}

export const hexToRgb = (hex: string): { r: number, g: number, b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : { r: 128, g: 128, b: 128 };
}

export const lumen = (r: number, g: number, b: number): number => Math.sqrt(0.299*r * r + 0.587* g * g + 0.114 * b * b) / 255 // (255*255+255*255+255*255);

export function formatDateInput(ev: Event) {
  const event = ev as KeyboardEvent
  const yearmonth = /^(1|2)$|^(1(?:9)|2(?:0))$|^(1(?:9)|2(?:0)\d{1,2})$|^(1(?:9)|2(?:0)\d{2})$/
}

export const throttle = <T extends any[]>(func: (...args: T) => void, limit: number): ((...args: T) => void) => {
  let inThrottle: boolean;

  return function(...args: T) {
      if (!inThrottle) {
          func(...args);
          inThrottle = true;

          setTimeout(() => {
              inThrottle = false;
          }, limit);
      }
  };
}

export const debounce = <T extends any[]>(func: (...args: T) => void, delay: number): ((...args: T) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function(...args: T) {
      if (timer !== null) {
          clearTimeout(timer);
      }
      timer = setTimeout(() => {
          func(...args);
      }, delay);
  };
}

export const focusAdjcentElement = (element: HTMLElement, travelIndex: number) => {

  const focusableSelectors = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
  const focusableElements: HTMLElement[] = Array.from(document.querySelectorAll(focusableSelectors));
  const currentIndex = focusableElements.indexOf(element);

  let nextIndex = currentIndex + travelIndex;

  if (nextIndex >= focusableElements.length) {
    nextIndex = 0;
  }

  focusableElements[nextIndex]?.focus();
}

export const hasSubStore = <T, S>(props: TableStore<T, S> | SubTableStore<S>): Map<string, SubTableStore<S>> | undefined => {
  return (props as TableStore<T, S>).subStores !== undefined ? (props as TableStore<T, S>).subStores : undefined;
}
