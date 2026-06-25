export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Photo Studio</p>
        <a href="mailto:hello@example.com" className="hover:text-foreground">
          hello@example.com
        </a>
      </div>
    </footer>
  );
}
