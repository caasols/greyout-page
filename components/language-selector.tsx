"use client";

import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

export function LanguageSelector() {
  const { locale, setLocale } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Change language"
          className="gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {locale.toUpperCase()}
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLocale(l.code)}
            className="justify-between gap-6"
          >
            <span>
              <span className="font-medium">{l.code.toUpperCase()}</span>
              <span className="text-muted-foreground"> · {l.label}</span>
            </span>
            {l.code === locale ? <Check className="size-4" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
