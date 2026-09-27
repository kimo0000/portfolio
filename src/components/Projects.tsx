// Section « Projets » : vraies captures d'écran dans des fenêtres ; projet confidentiel sans capture ni code.
import { projects, ui, type Project } from '../content';
import { useLang } from '../i18n';
import { Icon, Reveal, SectionHead, Window } from './ui';

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-xs text-blue">{t}</li>
      ))}
    </ul>
  );
}

function Links({ p }: { p: Project }) {
  const { t } = useLang();
  return (
    <div className="flex flex-wrap gap-3">
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-green !px-4 !py-2 !text-xs">
          <Icon name="external" /> {t(ui.projects.demo)}
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-outline !px-4 !py-2 !text-xs">
          <Icon name="github" /> {t(ui.projects.code)}
        </a>
      )}
    </div>
  );
}

/** Carte du projet confidentiel : on montre qu'il existe, pas son contenu. */
function Confidential({ p }: { p: Project }) {
  const { t, lang } = useLang();
  return (
    <Window title={`~/projets/${p.id} — ${t(ui.projects.featured)}`} className="mb-8">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-mono text-2xl font-bold">{p.name}</h3>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-yellow/40 bg-yellow/10 px-2 py-0.5 font-mono text-xs text-yellow">
              <Icon name="lock" className="h-3.5 w-3.5" /> {t(ui.projects.confidential)}
            </span>
          </div>
          <p className="mt-1 font-mono text-sm text-green">{t(p.tagline)}</p>
          <p className="mt-4 leading-relaxed text-dim">{t(p.text)}</p>
          <ul className="mt-5 grid gap-2 font-mono text-sm sm:grid-cols-2">
            {p.highlights[lang].map((h) => (
              <li key={h}><span className="text-green">✓</span> {h}</li>
            ))}
          </ul>
          <div className="mt-6"><Tags tags={p.tags} /></div>
        </div>
        <div className="flex flex-col justify-center rounded-lg border border-dashed border-line bg-bg p-6 font-mono text-sm">
          <p><span className="text-dim">$</span> open ./{p.id}</p>
          <p className="mt-2 text-red">Permission denied: {lang === 'fr' ? 'projet confidentiel' : 'confidential project'}</p>
          <div className="my-5 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-2xl border border-yellow/40 bg-yellow/10 text-yellow">
              <Icon name="lock" className="h-8 w-8" />
            </span>
          </div>
          <p className="text-center font-sans text-sm leading-relaxed text-dim">{t(ui.projects.confidentialNote)}</p>
        </div>
      </div>
    </Window>
  );
}

function Card({ p }: { p: Project }) {
  const { t, lang } = useLang();
  return (
    <Window title={`~/projets/${p.id}`} className="flex h-full flex-col">
      {p.image && (
        <a href={p.demo ?? p.repo} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden border-b border-line bg-white">
          <img src={p.image} alt={`${p.name} — ${t(p.tagline)}`} loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
        </a>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-mono text-lg font-bold">{p.name}</h3>
        <p className="mt-0.5 font-mono text-xs text-green">{t(p.tagline)}</p>
        <p className="mt-3 text-sm leading-relaxed text-dim">{t(p.text)}</p>
        <ul className="mt-3 space-y-1 font-mono text-xs">
          {p.highlights[lang].map((h) => <li key={h}><span className="text-green">✓</span> {h}</li>)}
        </ul>
        <div className="mt-auto space-y-4 pt-5">
          <Tags tags={p.tags} />
          <Links p={p} />
        </div>
      </div>
    </Window>
  );
}

export default function Projects() {
  const { t } = useLang();
  const s = ui.sections.projects;
  const featured = projects.filter((p) => p.confidential);
  const others = projects.filter((p) => !p.confidential);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHead cmd={s.cmd} title={t(s)} />
      {featured.map((p) => <Reveal key={p.id}><Confidential p={p} /></Reveal>)}
      <div className="grid gap-6 md:grid-cols-3">
        {others.map((p, i) => (
          <Reveal key={p.id} delay={i * 100} className="h-full"><Card p={p} /></Reveal>
        ))}
      </div>
    </section>
  );
}
