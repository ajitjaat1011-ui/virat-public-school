/**
 * Cloudflare Pages Function — catch-all for /api/*
 * Returns 404 for unknown API routes.
 */
export const onRequest: PagesFunction = async () => {
  return new Response(
    JSON.stringify({ error: "Not found" }),
    {
      status: 404,
      headers: { "Content-Type": "application/json" },
    }
  );
};
