"use client";

import Link from "next/link";
import { ComponentProps } from "react";

// Wrapper component to avoid Next.js 16.0.1+ unstable_prefetch.mode server error
// This component ensures prefetch is never passed to avoid the server-side error
export default function SafeLink({ 
  children, 
  ...props 
}: Omit<ComponentProps<typeof Link>, 'prefetch'>) {
  // Completely omit prefetch prop to avoid the bug
  return <Link {...props}>{children}</Link>;
}

