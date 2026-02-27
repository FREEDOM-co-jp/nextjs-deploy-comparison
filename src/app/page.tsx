export default function HomePage() {
  const envLabel = process.env.NEXT_PUBLIC_ENV_LABEL ?? 'unknown';
  return (
    <main style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>Next.js Deploy Comparison</h1>
      <p>Environment: <strong>{envLabel}</strong></p>
      <ul>
        <li><a href="/ssr">SSR Page</a></li>
        <li><a href="/api/health">API Health</a></li>
      </ul>
    </main>
  );
}
