import { Section } from "@/components/ui/Section";
import type { Copy } from "@/data/copy";
import { repos } from "@/data/profile";

export function PublicCode({ copy }: { copy: Copy }) {
  return (
    <Section id="code" title={copy.headings.code} meta={copy.meta.code}>
      <ul className="space-y-px">
        {repos.map((r) => {
          const text = copy.repos[r.id];
          return (
            <li
              key={r.id}
              className="grid gap-x-8 gap-y-2 border-t border-line py-6 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="text-[1.05rem] text-paper">{text.label}</h3>
                <p className="mt-1.5 max-w-[52ch] text-sm leading-relaxed text-mist">
                  {text.summary}
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-2.5 text-xs text-mist">
                  {r.stack.map((s) => (
                    <li
                      key={s}
                      className="after:ml-2.5 after:text-line after:content-['/'] last:after:content-none"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start gap-5 text-sm sm:justify-end">
                {r.demo && (
                  <a href={r.demo} target="_blank" rel="noreferrer" className="link text-paper">
                    {copy.repoLive}
                  </a>
                )}
                <a
                  href={r.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="link text-mist hover:text-paper"
                >
                  {copy.repoSource}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
