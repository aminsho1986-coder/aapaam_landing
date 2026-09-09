export default async function safeJson(res, fallback = {}) {
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      return await res.json();
    } catch {
      return fallback;
    }
  }
  return fallback;
}
