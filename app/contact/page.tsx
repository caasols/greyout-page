import type { Metadata } from "next";
import { ContactBody } from "@/components/contact-body";
import { m } from "@/lib/messages";

export const metadata: Metadata = {
  title: m.meta.contactTitle,
  description: m.meta.contactDescription,
};

export default function ContactPage() {
  return <ContactBody />;
}
