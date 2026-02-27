export const dynamic = 'force-dynamic';

export default function SSRPage() {
  const timestamp = Date.now();
  return (
    <main style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>SSR Page</h1>
      <p>Timestamp: <strong>{timestamp}</strong></p>
      <p>This value changes on every request (SSR).</p>
    </main>
  );
}
