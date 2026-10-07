export const SUBSTACK = {
  url: "https://orisabiyi.substack.com",
  profileUrl: "https://substack.com/@orisabiyidavid",
  handle: "orisabiyidavid",
  userId: 135098530,
};

export interface SubstackPost {
  title: string;
  link: string;
  date: string;
  rawDate: Date;
  description: string;
  image: string | null;
  readTime: string;
}

export interface SubstackNote {
  id: number;
  body: string;
  link: string;
  date: string;
  rawDate: Date;
  likes: number;
  restacks: number;
  replies: number;
}

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { day: "2-digit", month: "short" }).toUpperCase();

const decode = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');

// Full posts come from the publication's RSS feed.
export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(`${SUBSTACK.url}/feed`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const posts: SubstackPost[] = [];

    for (const item of xml.split("<item>").slice(1)) {
      const title =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
        item.match(/<title>(.*?)<\/title>/)?.[1] ??
        "";
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? SUBSTACK.url;
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";
      const rawDate = pubDate ? new Date(pubDate) : new Date();

      const content =
        item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s)?.[1] ?? "";
      const image =
        item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ??
        content.match(/<img[^>]+src="([^"]+)"/)?.[1] ??
        null;

      const rawDesc =
        item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s)?.[1] ?? "";
      const description = decode(rawDesc.replace(/<[^>]*>/g, "")).trim().slice(0, 200);

      const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
      const readTime = `${Math.max(1, Math.round(wordCount / 250))} MIN READ`;

      posts.push({ title: decode(title), link, date: formatDate(rawDate), rawDate, description, image, readTime });
    }

    return posts.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
  } catch {
    return [];
  }
}

interface FeedItem {
  type: string;
  comment?: {
    id: number;
    body: string;
    date: string;
    user_id: number;
    ancestor_path?: string;
    reaction_count?: number;
    restacks?: number;
    children_count?: number;
  };
}

// Substack's RSS feed doesn't include Notes, so they come from the public
// profile feed. It's unofficial, so any failure falls back to no notes.
export async function getSubstackNotes(maxPages = 5): Promise<SubstackNote[]> {
  const notes: SubstackNote[] = [];
  let cursor: string | null = null;

  try {
    for (let page = 0; page < maxPages; page++) {
      const url = new URL(`https://substack.com/api/v1/reader/feed/profile/${SUBSTACK.userId}`);
      if (cursor) url.searchParams.set("cursor", cursor);

      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; orisabyi.com)" },
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;

      const data: { items?: FeedItem[]; nextCursor?: string | null } = await res.json();

      for (const item of data.items ?? []) {
        const c = item.comment;
        if (item.type !== "comment" || !c?.body) continue;
        // Only top-level notes written by me — skip replies and restacks.
        if (c.user_id !== SUBSTACK.userId || c.ancestor_path) continue;

        const rawDate = new Date(c.date);
        notes.push({
          id: c.id,
          body: c.body.trim(),
          link: `${SUBSTACK.profileUrl}/note/c-${c.id}`,
          date: formatDate(rawDate),
          rawDate,
          likes: c.reaction_count ?? 0,
          restacks: c.restacks ?? 0,
          replies: c.children_count ?? 0,
        });
      }

      cursor = data.nextCursor ?? null;
      if (!cursor) break;
    }
  } catch {
    // keep whatever was fetched before the failure
  }

  return notes.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
}
