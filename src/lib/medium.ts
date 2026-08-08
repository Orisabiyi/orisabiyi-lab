export interface MediumPost {
  title: string;
  link: string;
  date: string;
  rawDate: Date;
  description: string;
  image: string | null;
  categories: string[];
  readTime: string;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch("https://medium.com/feed/@Orisabiyidavid", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const posts: MediumPost[] = [];
    const items = xml.split("<item>").slice(1);

    for (const item of items) {
      const title =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
        item.match(/<title>(.*?)<\/title>/)?.[1] ??
        "";

      const link =
        item.match(/<link>(.*?)<\/link>/)?.[1] ??
        item.match(/<link\/>\s*<guid>(.*?)<\/guid>/)?.[1] ??
        "#";

      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";
      const rawDate = pubDate ? new Date(pubDate) : new Date();

      const date = pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
        }).toUpperCase()
        : "";

      // Extract first image from content
      const content =
        item.match(
          /<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s
        )?.[1] ?? "";
      const image = content.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null;

      // Extract categories
      const categories: string[] = [];
      const catMatches = item.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g);
      for (const m of catMatches) {
        categories.push(m[1].toUpperCase());
      }

      // Strip HTML for description
      const rawDesc =
        item.match(
          /<description><!\[CDATA\[(.*?)\]\]><\/description>/s
        )?.[1] ?? "";
      const description = rawDesc
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .trim()
        .slice(0, 200);

      // Estimate reading time from content
      const plainText = content.replace(/<[^>]*>/g, "");
      const wordCount = plainText.split(/\s+/).length;
      const readTime = `${Math.max(1, Math.round(wordCount / 250))} MIN READ`;

      posts.push({
        title,
        link,
        date,
        rawDate,
        description,
        image,
        categories: categories.slice(0, 3),
        readTime,
      });
    }

    return posts.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
  } catch {
    return [];
  }
}