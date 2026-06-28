import fs from "fs";
import path from "path";

export interface AppcastItem {
  version: string;
  title: string;
  pubDate: string;
  notesHtml?: string;
}

function extractTag(block: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const m = block.match(re);
  return m ? m[1].trim() : "";
}

function extractCdata(block: string, tag: string): string | undefined {
  // Match <tag><![CDATA[…]]></tag> or plain text
  const re = new RegExp(
    `<${tag}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))<\\/${tag}>`,
    "i"
  );
  const m = block.match(re);
  if (!m) return undefined;
  const content = (m[1] ?? m[2] ?? "").trim();
  return content.length > 0 ? content : undefined;
}

function parseVersion(v: string): number[] {
  return v.split(".").map((n) => parseInt(n, 10) || 0);
}

function compareVersions(a: AppcastItem, b: AppcastItem): number {
  const av = parseVersion(a.version);
  const bv = parseVersion(b.version);
  for (let i = 0; i < Math.max(av.length, bv.length); i++) {
    const diff = (bv[i] ?? 0) - (av[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

export function readAppcast(): AppcastItem[] {
  let xml: string;
  try {
    const xmlPath = path.join(process.cwd(), "public", "appcast.xml");
    xml = fs.readFileSync(xmlPath, "utf8");
  } catch {
    return [];
  }

  // Split into <item>…</item> blocks
  const itemRe = /<item>([\s\S]*?)<\/item>/gi;
  const items: AppcastItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = itemRe.exec(xml)) !== null) {
    const block = match[1];

    const version =
      extractTag(block, "sparkle:version") ||
      extractTag(block, "sparkle:shortVersionString");
    const title = extractTag(block, "title");
    const pubDate = extractTag(block, "pubDate");

    if (!version) continue; // skip malformed items

    const notesHtml = extractCdata(block, "description");

    items.push({
      version,
      title: title || `Greyout ${version}`,
      pubDate,
      notesHtml,
    });
  }

  return items.sort(compareVersions);
}
