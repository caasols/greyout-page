"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV } from "@/lib/site";
import { useMessages } from "@/components/locale-provider";

// Shown only below the `sm` breakpoint, where the inline nav links are hidden.
export function MobileNav() {
  const m = useMessages();

  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {NAV.map(({ href, key }) => (
            <DropdownMenuItem key={href} asChild>
              <Link href={href}>{m.nav[key]}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
