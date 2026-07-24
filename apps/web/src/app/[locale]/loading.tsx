export default function LocaleLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl animate-pulse space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="h-10 w-2/5 rounded-lg bg-muted" />
      <div className="h-5 w-3/5 rounded bg-muted" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="aspect-[16/10] rounded-2xl bg-muted" />
        <div className="aspect-[16/10] rounded-2xl bg-muted" />
        <div className="aspect-[16/10] rounded-2xl bg-muted" />
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-11/12 rounded bg-muted" />
        <div className="h-4 w-4/5 rounded bg-muted" />
      </div>
    </div>
  );
}
