import Link from "next/link";

export function BackHomeLink() {
  return (
    <Link
      href="/home"
      className="inline-flex rounded-[20px] bg-brand-white px-3 py-3 text-xs font-black uppercase tracking-[0.22em] text-brand-red transition-colors hover:bg-brand-red-deep hover:text-brand-white"
    >
      Back to home
    </Link>
  );
}
