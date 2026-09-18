import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  meta?: string;
  children: ReactNode;
};

/**
 * The heading rule carries the section name and its size, then gets out of the way.
 * The meta drops to its own line on narrow screens, where longer Spanish strings
 * would otherwise push the row past the viewport.
 */
export function Section({ id, title, meta, children }: Props) {
  return (
    <section id={id} className="scroll-mt-10 pt-20 sm:pt-28">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="font-display text-heading whitespace-nowrap">{title}</h2>
        <span aria-hidden className="h-px flex-1 bg-line" />
        {meta && (
          <span className="basis-full text-xs text-mist sm:basis-auto sm:shrink-0">{meta}</span>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
