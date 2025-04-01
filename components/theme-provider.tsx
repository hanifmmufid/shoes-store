"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * A wrapper around `next-themes`'s `ThemeProvider` that makes it easier to use.
 *
 * You can use this component in the same way as `next-themes`'s `ThemeProvider`.
 *
 * @example
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
