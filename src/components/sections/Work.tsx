import { Section } from "@/components/ui/Section";
import type { Copy } from "@/data/copy";

export function Work({ copy }: { copy: Copy }) {
  return (
    <Section id="work" title={copy.headings.work} meta={copy.meta.work}>
      <ol className="space-y-px">
        {copy.experience.map((role) => (
          <li
            key={role.company + role.period}
            className="grid gap-x-8 gap-y-3 border-t border-line py-7 sm:grid-cols-[7.5rem_1fr]"
          >
            <div className="flex items-center gap-2 sm:block">
              <p className={`text-sm ${role.current ? "text-brass" : "text-mist"}`}>
                {role.period}
              </p>
              <p className="text-sm text-mist sm:mt-1 sm:text-xs">{role.place}</p>
            </div>

            <div>
              <h3 className="text-[1.05rem] text-paper">
                {role.title},{" "}
                <span className={role.current ? "text-paper" : "text-mist"}>{role.company}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {role.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative max-w-[62ch] pl-4 text-sm leading-relaxed text-mist before:absolute before:top-[0.6em] before:left-0 before:h-px before:w-2 before:bg-line"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
