export default function BackgroundCanvas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-paper dark:bg-ink"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(28,25,21,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,25,21,0.05)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(to_right,rgba(244,240,230,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(244,240,230,0.05)_1px,transparent_1px)]" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-copper/10 blur-3xl" />
    </div>
  );
}
