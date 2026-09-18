import { Section } from "@/components/ui/Section";
import type { Build, Copy } from "@/data/copy";

export function Builds({ copy }: { copy: Copy }) {
  const [lead, ...rest] = copy.builds;

  return (
    <Section id="builds" title={copy.headings.builds} meta={copy.meta.builds}>
      <article className="border-t border-line pt-7">
        <h3 className="font-display text-[1.75rem] leading-tight sm:text-[2.1rem]">{lead.name}</h3>
        <p className="mt-3 max-w-[62ch] leading-[1.7] text-mist">{lead.summary}</p>
        <Meta build={lead} />
      </article>

      <div className="mt-4 grid gap-x-10 sm:grid-cols-2">
        {rest.map((b) => (
          <article key={b.name} className="border-t border-line py-7">
            <h3 className="text-[1.05rem] text-paper">{b.name}</h3>
            <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-mist">{b.summary}</p>
            <Meta build={b} />
          </article>
        ))}
      </div>
    </Section>
  );
}

function Meta({ build }: { build: Build }) {
  return (
    <div className="mt-5 space-y-2">
      <p className="text-xs text-signal">{build.scope}</p>
      <ul className="flex flex-wrap gap-x-2.5 gap-y-1 text-xs text-mist">
        {build.stack.map((s) => (
          <li
            key={s}
            className="after:ml-2.5 after:text-line after:content-['/'] last:after:content-none"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
