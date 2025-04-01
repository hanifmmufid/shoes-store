import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A shorthand for `twMerge(clsx(...inputs))`.
 *
 * @example
 * cn('flex', 'items-center') // 'flex items-center'
 * cn('flex', ['items-center', 'justify-center']) // 'flex items-center justify-center'
 * cn('flex', 'items-center', { 'justify-center': props.center }) // 'flex items-center justify-center' when props.center is true
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Recursively converts a value to a plain object by stringifying it with
 * `JSON.stringify()` and then parsing it with `JSON.parse()`.
 *
 * This is useful for stripping away any prototype chains or other
 * non-enumerable properties that may be present on the value.
 *
 * @param value The value to convert to a plain object
 * @returns The plain object representation of the value
 */
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}


/**
 * Formats a number to a string with two decimal places.
 *
 * @param num - The number to format
 * @returns The formatted number as a string with two decimal places
 */

export function formatNumberWithDecimal(num:number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}}` : `${int}.00`
}