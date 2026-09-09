// Custom image loader that prefixes local paths with basePath ("/company")
// Workaround for Next.js 13.4.7 basePath + next/image bug where src isn't auto-prefixed.
export default function imageLoader({ src }) {
  if (src.startsWith("http") || src.startsWith("data:")) return src;
  return "/company" + src;
}
