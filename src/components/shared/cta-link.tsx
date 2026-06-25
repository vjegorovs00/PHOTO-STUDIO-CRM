import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";

const ctaLinkVariants = cva(
  "inline-flex justify-center whitespace-nowrap rounded-[20px] px-3 py-3 text-xs font-black uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
  {
    variants: {
      variant: {
        primary: "bg-brand-red-deep text-foreground hover:bg-brand-white hover:text-brand-black",
        secondary: "bg-brand-black border border-brand-white text-foreground hover:bg-brand-white hover:text-brand-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type CtaLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof ctaLinkVariants>;

export function CtaLink({ className, variant, ...props }: CtaLinkProps) {
  return <Link className={cn(ctaLinkVariants({ variant }), className)} {...props} />;
}
