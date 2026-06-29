import type { Metadata } from "next";
import { SuccessBody } from "@/components/success-body";
import { m } from "@/lib/messages";

export const metadata: Metadata = {
  title: m.meta.successTitle,
  // Order pages shouldn't be indexed.
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return <SuccessBody />;
}
