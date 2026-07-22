// Vercel serverless function — proxies a published Google Sheets CSV link.
// Runs server-side, so the browser's CORS restrictions never apply here;
// only allow-listed Google hostnames can be requested through it.
export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    res.status(400).json({ error: "Missing 'url' query parameter." });
    return;
  }

  let upstream;
  try {
    upstream = new URL(url);
  } catch {
    res.status(400).json({ error: "Invalid URL." });
    return;
  }

  const allowedHosts = ["docs.google.com", "googleusercontent.com"];
  const isAllowed = allowedHosts.some(
    (host) => upstream.hostname === host || upstream.hostname.endsWith(`.${host}`)
  );
  if (!isAllowed) {
    res.status(400).json({ error: "Only Google Sheets published CSV links are allowed." });
    return;
  }

  try {
    const response = await fetch(upstream.toString(), {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!response.ok) {
      res.status(502).json({ error: `Upstream fetch failed (${response.status})` });
      return;
    }

    const text = await response.text();
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message || "Failed to fetch sheet." });
  }
}
