import { Section } from "@/components/ui/Section";
import type { Copy } from "@/data/copy";
import { stackGroups } from "@/data/profile";

export function Stack({ copy }: { copy: Copy }) {
  return (
    <Section id="stack" title={copy.headings.stack} meta={copy.meta.stack}>
      <dl className="space-y-px">
        {stackGroups.map((group) => (
          <div
            key={group.id}
            className="grid gap-x-8 gap-y-2 border-t border-line py-6 sm:grid-cols-[10rem_1fr]"
          >
            <dt className="text-sm text-mist">{copy.stack[group.id]}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-sm text-paper">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="after:ml-2.5 after:text-line after:content-['/'] last:after:content-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
