import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import ebersLogo from '../Images/Ebers logo.png';
import infoImage from '../Images/info.png';
import {
  ChevronDown,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  Search,
  Target,
  Stethoscope,
  Globe,
  MessageSquare,
  Sun,
  ScanLine,
  Box,
  Flame,
  CloudSun,
  LayoutGrid,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import Visual from '@/components/Visual';

/* ---------------- data ---------------- */

type Idea = {
  n: string;
  title: string;
  type: string;
  icon: typeof Globe;
  visual: Parameters<typeof Visual>[0]['variant'];
  alt: string;
  desc: ReactNode;
  bullets: ReactNode[];
  tagline?: string;
};

const IDEAS: Idea[] = [
  /*
  {
    n: '01',
    title: 'Scar Care Hub .  Own the Journey',
    type: 'WEB PLATFORM + CONTENT CREATION',
    icon: LayoutGrid,
    visual: 'hub',
    alt: 'Abstract hub diagram with a central green node connected by spokes to blue satellite nodes',
    desc: 'Before a patient considers buying NewGel+, they need to understand what a scar needs, why silicone matters, and which NewGel+ option fits them. The Scar Care Hub builds this understanding through relatable, engaging content. not just standard product posts.',
    bullets: [
      (<><span className="font-bold">HCP Show:</span> Short videos filmed inside a pharmacy or styled like a newsletter/show, where doctors explain scar care, silicone, and the differences between NewGel+ products.</>),
      (<><span className="font-bold">Real Patient Stories:</span> Emotional videos where patients share how their scars affected their lives, using personal memories with family and loved ones to show the emotional side of recovery.</>),
      (<><span className="font-bold"> The NewGel+ Character: </span>A recognizable animated character. such as a heart, brush, or talking scar. appears across content to give simple scar-care tips and information.</>),
      (<><span className="font-bold">Myth or Fact? </span> A serious, engaging series tackling real patient misconceptions about scars and silicone, with the animated character revealing what is actually true.</>),
      (<><span className="font-bold"> Which NewGel+ Is Right for Me? </span>Simple visual content showing when to consider Gel, Gel+E, UV, or Sheets.</>),
    ],
  }, 
  {
    n: '01',
    title: 'Scan Your Scar',
    type: 'AI-POWERED ASSESSMENT',
    icon: ScanLine,
    visual: 'scan',
    alt: 'A phone scanning frame with a green scan line over a scar, surrounded by floating orbs',
    desc: 'A simple interactive quiz that asks patients a few questions about their scar, its age, location, and current condition. Based on their answers, the experience generates a personalized Scar Care Report with the most suitable NewGel+ product, practical care tips, and guidance they can share with their doctor or pharmacist.\nQuick Scar Quiz: Simple questions such as:\nHow old is your scar?\nWhere is your scar located?\nIs it raised, red, dark, or itchy?\nAre you currently using any scar treatment?',
    bullets: [
    ],
    tagline: 'From a simple scan to a personalized scar-care plan',
  },*/
  {
    n: '01',
    title: 'NewGel  — See the Difference',
    type: 'INTERACTIVE  AWARENESS EXPERIENCE',
    icon: Sun,
    visual: 'uv',
    alt: 'A glowing sun orb radiating  rays over a gradient panel',
    desc:       <>
        <span className="font-bold">Entry point: Pharmacy Product Stand → QR Code → Before & After Experience</span>
        <br />
          The journey starts at a NewGel+ product stand in the pharmacy, where a QR code invites shoppers to “See the Difference.” Scanning it opens an interactive experience featuring relevant before-and-after results and scar-care education, helping reinforce product efficacy and support the purchase decision at the point of sale.

      </>,
    bullets: [,
    ],
    tagline: 'Make the invisible impact of UV visible',

  },
  {
    n: '02',
    title: 'Scar Check — From Diagnosis to Better Scar Care',
    type: 'INTERACTIVE DIGITAL CONTENT',
    icon: LayoutGrid,
    visual: 'new',
    alt: 'Abstract hub diagram with a central green node connected by spokes to blue satellite nodes',
    desc: (
      <>
        <span className="font-bold">Entry point: Clinic Drop Cards → QR Code → Scar Check</span>
        <br />
        Place specialty-specific drop cards in clinics. Patients scan the QR code to access a short Scar Check, with questions personalized according to the clinic specialty and relevant scar types. Based on their answers, they receive a personalized recommendation for the most suitable NewGel+ product/version and can check their scar before and after using it through a filter experience, helping bridge the journey from HCP interaction to product consideration.
      </>
    ),
    bullets: [,
    ],
  },
  {
    n: '03',
    title: 'Inside the Scar',
    type: '3D / AR MECHANISM-OF-ACTION EXPERIENCE',
    icon: Box,
    visual: 'ar',
    alt: 'A translucent 3D AR cube floating above the skin surface in green and blue',
    desc:       <>
        <span className="font-bold">Entry point: Website / E-commerce / Clinic Drop Cards → Interactive Experience → Product Consideration</span>
        <br />
        Inside Your Scar can be integrated directly into the NewGel+ website as an educational experience that helps users understand what is happening beneath the surface of a scar and how silicone-based scar management works. The experience can also be promoted through e-commerce product pages, reaching consumers while they are actively considering a purchase, with social media used to drive additional traffic to the experience.
      </>,
    bullets: [
    ],
    tagline: 'See how silicone works .  beneath the surface',
  },/*
  {
n: '06',
    title: 'Scar Journey',
    type: 'WHATSAPP RECOVERY COMPANION',
    icon: MessageSquare,
    visual: 'whatsapp',
    alt: 'A WhatsApp-style chat conversation with care reminders and a patient reply',
    desc: 'A personalized WhatsApp recovery journey that stays with patients from their first purchase through the full scar-healing period. It sends timely reminders, care tips, progress check-ins, and practical guidance to help patients stay consistent with their NewGel+ routine. while introducing relevant features based on their recovery needs.',
    bullets: [
      (<><span className="font-bold">Weekly Care Reminders:</span> Personalized reminders to help patients stay consistent with their NewGel+ routine.</>),
      (<><span className="font-bold">Progress Check-ins:</span>  Patients can share updates and track their recovery journey over time.</>),
      (<><span className="font-bold">Beat the Sun: </span>A built-in feature that uses the day’s UV and weather conditions to explain how sun exposure can affect a healing scar and provide a personalized protection tip, naturally highlighting NewGel+ UV when relevant.</>),
      (<><span className="font-bold">Care Tips: </span>Simple, timely advice based on where the patient is in their recovery journey.</>),
      (<><span className="font-bold">Repurchase Reminder: </span>Timely notifications when patients may need to repurchase, helping maintain treatment continuity.</>),
    ],
  },
  {
    n: '07',
    title: 'Scar Streak & Score',
    type: 'GAMIFIED RECOVERY & LOYALTY JOURNEY',
    icon: Flame,
    visual: 'streak',
    alt: 'A gamified streak calendar with glowing green-blue completed days and a streak badge',
    desc: 'Patients build a Scar Streak by logging their daily routine and progress photos. Completing a full streak .  for example, finishing a full treatment cycle without missing a week .  unlocks a real reward: a discount on their next NewGel+ product or a free gift, redeemable directly through the Hub. Instead of a generic loyalty points system, the reward is tied to completing recovery, giving patients a concrete reason to finish treatment and repurchase.',
    bullets: [
      'Directly supports adherence across the full treatment window',
      'Turns four separate SKUs into one connected progression patients want to complete',
    ],
    tagline: 'Stay consistent. Build your streak. Unlock your next step',
  },*/

];

/* ---------------- nav ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <LogoSlot />
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <a href="#who" className="transition hover:text-white">Ebers</a>
          <a href="#diagnostic" className="transition hover:text-white">Diagnostic</a>
          <a href="#ideas" className="transition hover:text-white">Ideas</a>
          <a href="#conclusion" className="transition hover:text-white">Conclusion</a>
        </nav>
        <a href="#conclusion" className="btn-brand !px-5 !py-2.5 !text-xs">
          Let's Talk <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function LogoSlot({ className = '' }: { className?: string }) {
  return (
    <div
      aria-label="EBERS logo"
      className={`flex h-13 items-center justify-center overflow-hidden rounded-md bg-transparent ${className}`}
    >
      <img src={ebersLogo} alt="Ebers logo" className="h-full w-auto max-w-[80px] object-contain" />
    </div>
  );
}

/* ---------------- sections ---------------- */

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-ink-950" />
        <div className="absolute -left-1/4 top-0 h-[80vh] w-[80vh] rounded-full bg-brand-green/20 blur-[120px] animate-meshshift" />
        <div className="absolute -right-1/4 bottom-0 h-[80vh] w-[80vh] rounded-full bg-brand-blue/20 blur-[120px] animate-meshshift [animation-delay:-5s]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>
      <Visual variant="hero" alt="Bold abstract 3D orbs and gradient mesh in brand green and blue evoking an immersive digital studio" className="absolute inset-0 !rounded-none !border-0 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/20 to-ink-950" />

      <div className="container-x relative z-10 pt-28">
        <div className="max-w-3xl">
          <span className="eyebrow reveal"><Sparkles className="h-3.5 w-3.5" /> EBERS .  FROM VISUALIZATION TO IMMERSION</span>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            NewGel+ <span className="text-gradient">Patient Engagement</span> Proposal
          </h1>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-white/70 sm:text-xl">
            Digital &amp; Interactive Experiences for the UAE Scar Care Journey
          </p>
          <p className="reveal reveal-delay-3 mt-6 text-sm text-white/50">
            Prepared for: <span className="text-white/80">Metromed</span> &nbsp;|&nbsp; Scope: <span className="text-white/80">United Arab Emirates .  Scar Management Market</span> &nbsp;|&nbsp; September 2026
          </p>
          <div className="reveal reveal-delay-4 mt-10 flex flex-wrap items-center gap-4">
            <a href="#ideas" className="btn-brand">Explore the  Ideas <ArrowUpRight className="h-4 w-4" /></a>
            <a href="#who" className="btn-ghost">Who is Ebers</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="reveal max-w-3xl">
      <div className="flex items-center gap-3 text-brand-green-light">
        <span className="font-display text-sm font-bold tracking-widest">{index}</span>
        <span className="h-px w-10 bg-brand-green/50" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function WhoIsEbers() {
  return (
    <section id="who" className="relative py-12 sm:py-16">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading index="01" eyebrow="WHO IS EBERS" title={<>A digital studio built for <span className="text-gradient">immersion</span></>} />
            <p className="reveal reveal-delay-1 mt-7 text-lg leading-relaxed text-white/70">
              Ebers is a UK-incorporated digital studio, established in 2014, delivering immersive digital experiences .  VR, AR, 3D animation, and interactive content .  for organizations across the UAE, Egypt, Saudi Arabia, and beyond. We specialize in transforming complex ideas into clear, engaging experiences for healthcare, education, and industry, partnering with brands including AstraZeneca, Hikma, and Merck. We build the content, tools, and experiences that turn clinical credibility into patient understanding and pharmacy-shelf confidence.
            </p>
            <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-2.5">
              {['VR', 'AR', '3D Animation', 'Interactive', 'Healthcare', 'Education'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70">{t}</span>
              ))}
            </div>
          </div>
          <Visual variant="studio" alt="Abstract composition of floating glass tiles and gradient orbs representing Ebers digital studio capabilities" className="reveal reveal-delay-1 aspect-[4/3] w-full" />
        </div>
      </div>
    </section>
  );
}

/*
function StatementOfNeed() {
  const bullets = [
    'Competitors pay pharmacists for shelf recommendation .  NewGel+ does not, and needs another way to win that moment',
    "Patients gravitate toward the lowest-priced option without understanding what they're giving up",
    "Patients don't know the difference between products, or how trusted NewGel+ actually is in the market",
  ];
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading index="02" eyebrow="STATEMENT OF NEED" title={<>Winning the moment that <span className="text-gradient">decides the sale</span></>} />
            <p className="reveal reveal-delay-1 mt-7 text-lg leading-relaxed text-white/70">
              NewGel+ is a clinically credible, FDA-registered scar management brand with a broad product range .  yet it is not the first product a pharmacist reaches for, or the first name a patient searches. As Dr. Mohamed (Metromed) confirmed directly, the priority is reaching the end user .  not just the prescriber .  through content that communicates value, trust-building way rather than direct claims.
            </p>
            <ul className="reveal reveal-delay-2 mt-7 space-y-3.5">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-white/75">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue-light" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <Visual variant="need" alt="Abstract shelf-gap metaphor showing product bars of varying heights with the brand-green bar standing tallest" className="reveal aspect-[4/3] w-full lg:order-last" />
        </div>
      </div>
    </section>
  );
}
*/

/*
function Objective() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading index="03" eyebrow="OBJECTIVE" title={<>A direct, ongoing relationship with the <span className="text-gradient">end user</span></>} />
            <p className="reveal reveal-delay-1 mt-7 text-lg leading-relaxed text-white/70">
              To build owned digital experiences that educate, engage, and guide the patient through their full scar recovery journey .  closing the awareness and trust gap identified in our research, and giving Metromed a direct, ongoing relationship with the end user instead of a one-time shelf transaction.
            </p>
          </div>
          <Visual variant="objective" alt="Abstract outcome diagram: a funnel narrowing toward a target point in brand green and blue" className="reveal reveal-delay-1 aspect-[4/3] w-full" />
        </div>
      </div>
    </section>
  );
}
*/

function Diagnostic() {
  const found = [
    (
      <>
        <span className="font-bold">NewGel+ already has a strong clinical foundation.</span>
        <br />
        With a portfolio built around medical-grade silicone scar management and solutions addressing different patient needs.
      </>
    ),
    (
      <>
        <span className="font-bold">The portfolio requires clearer navigation.</span>
        <br />
        Different formats and variants—including silicone gel, Vitamin E formulations, UV protection and silicone sheets—create an opportunity to better guide patients toward the most relevant solution for their scar and lifestyle.
      </>
    ),
    (
      <>
        <span className="font-bold">NewGel+ is available through UAE e-commerce and pharmacy channels.</span>
        <br />
        Availability alone does not guarantee differentiation at the moment consumers are comparing scar-care alternatives.
      </>
    ),
    (
      <>
        <span className="font-bold">Scar management is an ongoing journey rather than a one-time interaction.</span>
        <br />
        NewGel+ guidance indicates that visible improvement can take several weeks, while treatment may continue for approximately 3 months for newer scars and up to 6 months for older scars—creating multiple opportunities to support adherence.
      </>
    ),
  ];
  const improve = [
    (
      <>
        <span className="font-bold">Strengthen visibility at high-intent moments</span>
        <br />
        Make NewGel+ more discoverable and compelling when consumers are actively searching, comparing or preparing to purchase scar-care products.
      </>
    ),
    (
      <>
        <span className="font-bold">Turn clinical credentials into clear consumer value</span>
        <br />
        Translate medical-grade silicone, UV protection and other product features into simple, relevant reasons to choose NewGel+.
      </>
    ),
    (
      <>
        <span className="font-bold">Simplify product selection through personalization</span>
        <br />
        Help patients answer a critical question: “Which NewGel+ product is right for my scar?” using scar type, location, age, exposure and relevant patient needs.
      </>
    ),
    (
      <>
        <span className="font-bold">Extend engagement beyond the initial purchase</span>
        <br />
        Support patients throughout a treatment journey that can extend from several weeks to 3–6 months, reinforcing correct use, consistency and adherence.
      </>
    ),
  ];
  return (
    <section id="diagnostic" className="relative py-12 sm:py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[120px]" />
      </div>
      <div className="container-x">
        <SectionHeading index="02" eyebrow="DIAGNOSTIC" title={<>Why NewGel+ isn't the <span className="text-gradient">first choice</span> today</>} />
        <p className="reveal reveal-delay-1 mt-7 max-w-3xl text-lg leading-relaxed text-white/70">
          NewGel+ already offers a credible, medical-grade silicone scar-management portfolio with solutions designed for different scar needs. However, in a competitive UAE market, strong product credentials alone may not be enough. The opportunity is to make NewGel+ easier to discover, easier to understand and easier to choose across the moments that influence purchase from clinic recommendation and pharmacy shelves to search, e-commerce and ongoing treatment.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="reveal glass-dark rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue-light"><Search className="h-5 w-5" /></span>
              <h3 className="font-display text-xl font-bold text-white">What We Found</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {found.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-white/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue-light" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal reveal-delay-1 glass-dark rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green-light"><Lightbulb className="h-5 w-5" /></span>
              <h3 className="font-display text-xl font-bold text-white">Areas That Need Improvement</h3>
            </div>
            <ul className="mt-5 space-y-3.5">
              {improve.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-white/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green-light" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Visual variant="diagnostic" alt="Abstract comparison chart showing search interest bars with competitors far ahead of NewGel+" className="reveal mt-6 aspect-[16/7] w-full" />

        <div className="reveal mt-8 overflow-hidden rounded-2xl border border-brand-green/30 bg-gradient-to-r from-brand-green/15 via-ink-900 to-brand-blue/15 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-green-light" />
            <p className="text-lg font-medium leading-relaxed text-white">
              NewGel+ needs to own the patient's understanding of their scar .  before, during, and after purchase .  through indirect, trust-led digital experiences rather than direct product claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- accordion ---------------- */

function IdeaCard({ idea, isOpen, onToggle }: { idea: Idea; isOpen: boolean; onToggle: () => void }) {
  const Icon = idea.icon;
  return (
    <div className="reveal">
      <div
        className={`rounded-2xl border transition-colors duration-300 ${
          isOpen ? 'border-brand-green/40 bg-ink-850' : 'border-white/10 bg-ink-900/60 hover:border-white/20'
        }`}
      >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
      >
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
          isOpen ? 'bg-gradient-to-br from-brand-green to-brand-blue text-ink-950' : 'bg-white/5 text-brand-green-light'
        }`}>
          <Icon className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold text-brand-green-light">{idea.n}</span>
            <span className="hidden h-px w-6 bg-white/15 sm:block" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue-light">{idea.type}</span>
          </div>
          <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-white sm:text-xl">{idea.title}</h3>
        </div>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          isOpen ? 'rotate-180 border-brand-green/50 bg-brand-green/10 text-brand-green-light' : 'border-white/15 text-white/60'
        }`}>
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>

      <div className={`accordion-content min-h-0 ${isOpen ? 'is-open' : ''}`}>
        <div className="acc-inner">
          <div className="grid gap-7 px-5 pb-7 sm:px-7 lg:grid-cols-2 lg:gap-10">
            <div>
              <p className="text-base leading-relaxed text-white/75">{idea.desc}</p>
              <ul className="mt-5 space-y-3">
                {idea.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-white/70">
                    <Plus className="mt-0.5 h-4 w-4 shrink-0 rotate-45 text-brand-green-light" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {idea.tagline && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue-light">
                  <Sparkles className="h-4 w-4" /> {idea.tagline}
                </div>
              )}
            </div>
            <Visual variant={idea.visual} alt={idea.alt} className="aspect-[4/3] w-full" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

function Ideas() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="ideas" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[60vh] w-[60vh] rounded-full bg-brand-green/10 blur-[120px]" />
      </div>
      <div className="container-x">
        <SectionHeading index="03" eyebrow="THE IDEAS" title={<>Three digital &amp; interactive <span className="text-gradient">concepts</span></>} />
        <p className="reveal reveal-delay-1 mt-7 max-w-3xl text-lg leading-relaxed text-white/70">
          These concepts work as one connected patient journey, powered by a dedicated social media content strategy. Each idea will have its own creative content videos, reels, and educational posts—designed to attract patients from Facebook, Instagram, YouTube, and TikTok into the NewGel+ Hub.
          <br /><br />
          From there, the ecosystem moves patients through awareness and education → product consideration and purchase → adherence → retention and repurchase, with each digital experience supporting the next step in the journey.
          <br /><br />
          <span className="font-bold">Social Media → NewGel+ Hub → Patient Journey → Purchase → Adherence → Retention</span>

        </p>

        <div className="reveal reveal-delay-2 mt-8 flex justify-center">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(72,214,173,0.06)]">
            <img src={infoImage} alt="Info graphic" className="h-auto w-full rounded-xl object-cover" />
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {IDEAS.map((idea, i) => (
            <IdeaCard key={idea.n} idea={idea} isOpen={open.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section id="conclusion" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading index="04" eyebrow="CONCLUSION" title={<>From invisible to <span className="text-gradient">first choice</span></>} />
            <p className="reveal reveal-delay-1 mt-7 text-lg leading-relaxed text-white/70">
              These Three ideas respond directly to the gaps our research identified .  but ideas alone will not move NewGel+ from invisible to first choice. NewGel+ needs a well-crafted plan built on research: a dedicated SEO strategy to win the searches competitors currently own, and a structured plan to connect every idea into one patient journey. We would like to arrange a very urgent meeting to walk through our full analysis and align on next steps.
            </p>
            <div className="reveal reveal-delay-2 mt-9">
              <div className="relative overflow-hidden rounded-2xl border border-brand-green/30 bg-gradient-to-r from-brand-green/15 via-ink-900 to-brand-blue/15 p-6 sm:p-8">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-green/20 blur-2xl" />
                <p className="relative text-lg font-semibold leading-relaxed text-white sm:text-xl">
                  Let's get 30 minutes on the calendar to walk you through this .  happy to tailor anything before we move forward.
                </p>
                <a href="#top" className="btn-brand mt-6">
                  Let's Talk <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <Visual variant="conclusion" alt="Abstract closing visual: concentric rings around a glowing brand orb suggesting a next step" className="reveal reveal-delay-1 aspect-[4/3] w-full" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-x py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <LogoSlot className="mb-4" />
            <p className="max-w-md text-sm text-white/60">
              This proposal was crafted and developed by Ebers .  From Visualization to Immersion.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm text-white/50 md:items-end">
            <a href="#top" className="inline-flex items-center gap-2 transition hover:text-white">
              Back to top <ArrowUp className="h-4 w-4" />
            </a>
            <span className="text-white/30">© 2026 Ebers. Prepared for Metromed.</span>
            <span className="text-white/30">Contact: info@ebers.uk</span>
          </div>
        </div>
        <div className="hr-brand mt-10" />
      </div>
    </footer>
  );
}

/* ---------------- app ---------------- */

export default function App() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} id="top" className="relative">
      <Nav />
      <main>
        <Hero />
        <WhoIsEbers />
        {/* <StatementOfNeed /> */}
        {/* <Objective /> */}
        <Diagnostic />
        <Ideas />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}
