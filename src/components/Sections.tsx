// Sections de la page : navigation, accueil (terminal animé), services, méthode, stack, à propos, contact.
import { useEffect, useState } from 'react';
import { profile, services, stack, steps, ui } from '../content';
import { useLang } from '../i18n';
import { Icon, Prompt, Reveal, SectionHead, Window, useTyping } from './ui';

const NAV = ['services', 'projects', 'process', 'about', 'contact'] as const;

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 10);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const langSwitch = (
    <div className="flex rounded-md border border-line font-mono text-xs" role="group" aria-label="Langue / Language">
      {(['fr', 'en'] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`px-2.5 py-1.5 uppercase transition ${lang === l ? 'bg-green font-bold text-bg' : 'text-dim hover:text-fg'}`}>
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled || open ? 'border-line bg-bg/90 backdrop-blur' : 'border-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-mono text-sm font-bold">
          <span className="text-green">~/</span>{profile.handle}<span className="caret" />
        </a>
        <div className="hidden items-center gap-6 font-mono text-sm md:flex">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className="text-dim transition hover:text-green">./{t(ui.nav[id])}</a>
          ))}
          {langSwitch}
        </div>
        <button className="rounded-md p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <Icon name={open ? 'x' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 px-4 pb-4 font-mono text-sm md:hidden">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-dim hover:bg-panel hover:text-green">./{t(ui.nav[id])}</a>
          ))}
          <div className="px-3 pt-2">{langSwitch}</div>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  const { t, lang } = useLang();
  const name = useTyping(profile.name, 110);
  const done = name === profile.name;
  const lines = ui.hero.lines[lang];

  return (
    <section id="top" className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
      <div>
        {profile.available && (
          <p className="mb-6 inline-flex items-center gap-2 rounded-md border border-green/30 bg-green/10 px-3 py-1.5 font-mono text-xs text-green">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green" /> {t(ui.hero.status)}
          </p>
        )}
        <h1 className="font-mono text-5xl font-extrabold leading-tight sm:text-7xl">
          <span className="text-dim">&gt; </span>{name}<span className="caret" />
        </h1>
        <p className="mt-3 font-mono text-lg text-blue sm:text-xl">{t(ui.hero.role)}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">{t(ui.hero.lead)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn-green">{t(ui.hero.cta1)} <Icon name="arrow" /></a>
          <a href="#projects" className="btn-outline">{t(ui.hero.cta2)}</a>
        </div>
      </div>

      <Window title={`${profile.handle}@portfolio: ~`}>
        <div className="space-y-4 p-5 font-mono text-sm leading-relaxed sm:p-6">
          <div>
            <Prompt cmd="whoami" />
            <p className="mt-1 text-fg">{profile.name} — {t(ui.hero.role)}</p>
          </div>
          <div>
            <Prompt cmd="cat services.txt" />
            <ul className={`mt-1 space-y-0.5 transition duration-700 ${done ? 'opacity-100' : 'opacity-0'}`}>
              {lines.map((l) => <li key={l} className="text-blue">→ {l}</li>)}
            </ul>
          </div>
          <div>
            <Prompt cmd="cat localisation.txt" />
            <p className={`mt-1 text-orange transition delay-300 duration-700 ${done ? 'opacity-100' : 'opacity-0'}`}>{t(profile.location)}</p>
          </div>
          <div>
            <Prompt cmd="./demander-devis.sh" />
            <a href="#contact" className="mt-2 inline-block rounded bg-green px-2 py-0.5 font-bold text-bg hover:brightness-110">
              [ {t(ui.hero.cta1)} ]
            </a>
          </div>
        </div>
      </Window>
    </section>
  );
}

export function Services() {
  const { t, lang } = useLang();
  const s = ui.sections.services;
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHead cmd={s.cmd} title={t(s)} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((sv, i) => (
          <Reveal key={sv.file} delay={i * 80} className="h-full">
            <div className="window h-full p-5 transition hover:-translate-y-1 hover:border-green/60">
              <p className="flex items-center gap-2 font-mono text-xs text-blue"><Icon name="folder" /> {sv.file}</p>
              <h3 className="mt-3 font-mono text-base font-bold">{t(sv.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{t(sv.text)}</p>
              <ul className="mt-4 space-y-1 font-mono text-xs">
                {sv.items[lang].map((it) => <li key={it}><span className="text-green">+</span> {it}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useLang();
  const s = ui.sections.process;
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHead cmd={s.cmd} title={t(s)} />
      <ol className="grid gap-5 md:grid-cols-4">
        {steps.map((st, i) => (
          <Reveal key={i} delay={i * 100} className="h-full">
            <li className="window h-full p-5">
              <span className="font-mono text-sm text-green">[{i + 1}/{steps.length}]</span>
              <h3 className="mt-2 font-mono text-base font-bold">{t(st.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{t(st.text)}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Stack() {
  const { t } = useLang();
  const s = ui.sections.stack;
  const entries = Object.entries(stack);
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHead cmd={s.cmd} title={t(s)} />
      <Reveal>
        <Window title="stack.json">
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 sm:p-6">
            <span className="text-dim">{'{'}</span>
            {entries.map(([k, v], i) => (
              <span key={k} className="block pl-5">
                <span className="text-purple">"{k}"</span><span className="text-dim">: [</span>
                {v.map((item, j) => (
                  <span key={item}><span className="text-blue">"{item}"</span>{j < v.length - 1 && <span className="text-dim">, </span>}</span>
                ))}
                <span className="text-dim">]{i < entries.length - 1 ? ',' : ''}</span>
              </span>
            ))}
            <span className="text-dim">{'}'}</span>
          </pre>
        </Window>
      </Reveal>
    </section>
  );
}

export function About() {
  const { t, lang } = useLang();
  const s = ui.sections.about;
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHead cmd={s.cmd} title={t(s)} />
      <Reveal className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <p className="text-lg leading-relaxed text-dim">{t(ui.about.body)}</p>
        <ul className="space-y-3 font-mono text-sm">
          {ui.about.points.map((p) => (
            <li key={p.fr} className="window px-4 py-3"><span className="text-green">✓</span> {p[lang]}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const s = ui.sections.contact;
  const [copied, setCopied] = useState(false);
  // Pas de lien mailto: (il ne marche que si une messagerie est installée) : Gmail et Outlook en ligne.
  const to = encodeURIComponent(profile.email);
  const subject = encodeURIComponent(t(ui.contact.subject));
  const body = encodeURIComponent(t(ui.contact.body));
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <SectionHead cmd={s.cmd} title={t(s)} />
      <Reveal>
        <Window title="contact.sh">
          <div className="p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-dim">{t(ui.contact.lead)}</p>
            <div className="mt-6 font-mono text-sm">
              <Prompt cmd="echo $EMAIL" />
              <div className="mt-2 flex flex-wrap items-center gap-3 rounded-lg border border-line bg-bg px-4 py-3">
                <Icon name="mail" className="h-5 w-5 text-green" />
                <a href={gmail} target="_blank" rel="noopener noreferrer" className="flex-1 break-all text-base text-fg hover:text-green sm:text-lg">{profile.email}</a>
                <button onClick={copy} className="rounded-md border border-line px-3 py-1 text-xs text-dim hover:border-green hover:text-green">
                  {copied ? t(ui.contact.copied) : t(ui.contact.copy)}
                </button>
              </div>
            </div>
            <a href={gmail} target="_blank" rel="noopener noreferrer" className="btn-green mt-6 w-full !py-4 !text-base">
              <Icon name="mail" className="h-5 w-5" /> {t(ui.contact.write)}
            </a>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-dim">
              <span>{t(ui.contact.or)}</span>
              <a href={outlook} target="_blank" rel="noopener noreferrer" className="btn-outline !px-3 !py-2 !text-xs">{t(ui.contact.outlook)}</a>
            </div>
          </div>
        </Window>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 font-mono text-xs text-dim sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}. {t(ui.footer.rights)}</p>
        <p><span className="text-green">$</span> exit 0</p>
      </div>
    </footer>
  );
}
