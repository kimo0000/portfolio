// Petits composants réutilisables du thème « terminal ».
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { profile } from '../content';

const PATHS: Record<string, ReactNode> = {
  github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
  external: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14L21 3" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  menu: <path d="M3 12h18M3 6h18M3 18h18" />,
  x: <path d="M18 6L6 18M6 6l12 12" />,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  folder: <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />,
};

export function Icon({ name, className = 'h-4 w-4' }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

/** Invite de commande : karim@portfolio:~$ commande */
export function Prompt({ cmd, className = '' }: { cmd: string; className?: string }) {
  return (
    <p className={`font-mono text-sm ${className}`}>
      <span className="text-green">{profile.handle}@portfolio</span>
      <span className="text-dim">:</span>
      <span className="text-blue">~</span>
      <span className="text-dim">$ </span>
      <span className="text-fg">{cmd}</span>
    </p>
  );
}

/** Fenêtre de terminal avec ses trois pastilles. */
export function Window({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`window overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 truncate font-mono text-xs text-dim">{title}</span>
      </div>
      {children}
    </div>
  );
}

/** Apparition douce quand l'élément entre à l'écran. */
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('shown');
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHead({ cmd, title }: { cmd: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <Prompt cmd={cmd} />
      <h2 className="mt-3 font-mono text-2xl font-bold sm:text-3xl">
        <span className="text-dim"># </span>
        {title}
      </h2>
    </Reveal>
  );
}

/** Écrit un texte caractère par caractère (instantané si l'utilisateur réduit les animations). */
export function useTyping(text: string, speed = 45, start = true) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!start) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(text);
      return;
    }
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, start]);
  return out;
}
