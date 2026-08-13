import type { ReactNode } from 'react';
import whoIsEbersImage from '../../Images/who is ebers.jpeg';
import statementOfNeedImage from '../../Images/Statement of Need.jpeg';
import objectiveImage from '../../Images/Objective.jpeg';
import diagnosticImage from '../../Images/Diagnostic.jpeg';
import ideaOneImage from '../../Images/Idea-1.jpeg';
import ideaTwoImage from '../../Images/idea- 2.jpeg';
import ideaThreeImage from '../../Images/idea- 3.jpeg';
import ideaEightImage from '../../Images/idea- 8.jpeg';
import ideaFourImage from '../../Images/idea- 4.jpeg';
import ideaFiveImage from '../../Images/idea- 5.jpeg';
import ideaSixImage from '../../Images/idea- 6.jpeg';
import ideaSevenImage from '../../Images/idea- 7.jpeg';
import conclusionImage from '../../Images/Conclusion.jpeg';

/**
 * Visual — a consistent abstract 3D/gradient/glassmorphism illustration.
 * Each `variant` is a distinct composition, but all share the same color
 * treatment (brand green/blue accents on dark) and rendering style so the
 * page reads as one cohesive visual system.
 *
 * (Image generation is not available on this plan; these hand-built SVG/CSS
 *  compositions stand in as on-brand generated illustrations.)
 */
type Variant =
  | 'hero'
  | 'studio'
  | 'need'
  | 'objective'
  | 'diagnostic'
  | 'hub'
  | 'new'
  | 'scan'
  | 'whatsapp'
  | 'uv'
  | 'ar'
  | 'streak'
  | 'weather'
  | 'conclusion';

export default function Visual({
  variant,
  alt,
  className = '',
}: {
  variant: Variant;
  alt: string;
  className?: string;
}) {
  const imageMap: Record<string, string | null> = {
    studio: whoIsEbersImage,
    need: statementOfNeedImage,
    objective: objectiveImage,
    diagnostic: diagnosticImage,
    hub: ideaOneImage,
    scan: ideaTwoImage,
    whatsapp: ideaThreeImage,
    new: ideaEightImage,
    uv: ideaFourImage,
    ar: ideaFiveImage,
    streak: ideaSixImage,
    weather: ideaSevenImage,
    conclusion: conclusionImage,
  };

  const imageSrc = imageMap[variant];

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 ${className}`}
    >
      {/* shared ambient base */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-1/4 top-1/4 h-2/3 w-2/3 rounded-full bg-brand-green/25 blur-3xl animate-meshshift" />
        <div className="absolute -right-1/4 bottom-0 h-2/3 w-2/3 rounded-full bg-brand-blue/25 blur-3xl animate-meshshift [animation-delay:-4s]" />
      </div>
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:28px_28px]" />
      {imageSrc ? (
        <img src={imageSrc} alt={alt} className="absolute inset-0 h-full w-full object-contain p-2" />
      ) : (
        <Scene variant={variant} />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
    </div>
  );
}

function Scene({ variant }: { variant: Variant }) {
  switch (variant) {
    case 'hero':
      return <HeroScene />;
    case 'studio':
      return <StudioScene />;
    case 'need':
      return <NeedScene />;
    case 'objective':
      return <ObjectiveScene />;
    case 'diagnostic':
      return <DiagnosticScene />;
    case 'hub':
      return <HubScene />;
    case 'scan':
      return <ScanScene />;
    case 'whatsapp':
      return <WhatsappScene />;
    case 'uv':
      return <UvScene />;
    case 'ar':
      return <ArScene />;
    case 'streak':
      return <StreakScene />;
    case 'weather':
      return <WeatherScene />;
    case 'conclusion':
      return <ConclusionScene />;
    default:
      return null;
  }
}

/* ---------- shared primitives ---------- */

function Orb({
  className = '',
  size = 220,
  from = '#77B72A',
  to = '#0082C2',
  spin = false,
}: {
  className?: string;
  size?: number;
  from?: string;
  to?: string;
  spin?: boolean;
}) {
  return (
    <div
      className={`absolute rounded-full ${spin ? 'animate-spin-slow' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 32% 28%, ${from} 0%, ${to} 55%, rgba(0,0,0,0.55) 100%)`,
        boxShadow: `0 30px 80px -20px ${to}99, inset -10px -14px 40px rgba(0,0,0,0.45), inset 8px 10px 30px rgba(255,255,255,0.18)`,
      }}
    />
  );
}

function GlassTile({
  className = '',
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-xl border border-white/15 bg-white/10 backdrop-blur-md ${className}`}
      style={{ boxShadow: '0 20px 50px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.25)' }}
    >
      {children}
    </div>
  );
}

function Ring({
  className = '',
  size = 240,
  color = 'rgba(119,183,42,0.5)',
  width = 2,
}: {
  className?: string;
  size?: number;
  color?: string;
  width?: number;
}) {
  return (
    <div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        border: `${width}px solid ${color}`,
        boxShadow: `0 0 30px -6px ${color}`,
      }}
    />
  );
}

/* ---------- scenes ---------- */

function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Orb className="left-[8%] top-[12%] animate-floaty" size={260} from="#A4D86A" to="#0082C2" />
      <Orb className="right-[6%] bottom-[8%] animate-floaty2 [animation-delay:-2s]" size={180} from="#4FB3E0" to="#77B72A" />
      <Ring className="left-[20%] bottom-[6%]" size={300} color="rgba(0,130,194,0.35)" />
      <Ring className="right-[18%] top-[10%]" size={160} color="rgba(119,183,42,0.45)" width={1.5} />
      {/* scan line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-60" />
      <div className="absolute left-0 right-0 top-1/2 h-24 -translate-y-1/2 bg-gradient-to-b from-transparent via-brand-green/10 to-transparent" />
      <GlassTile className="left-[40%] top-[55%] px-4 py-2.5 text-[11px] font-semibold tracking-widest text-white/80">
        SCAR · SCAN · IMMERSIVE
      </GlassTile>
    </div>
  );
}

function StudioScene() {
  return (
    <div className="absolute inset-0">
      <Orb className="left-[10%] top-[14%] animate-floaty" size={200} from="#77B72A" to="#0082C2" />
      <GlassTile className="right-[8%] top-[16%] h-24 w-40">
        <div className="flex h-full flex-col justify-center gap-1.5 px-3">
          <div className="h-1.5 w-3/4 rounded bg-white/40" />
          <div className="h-1.5 w-1/2 rounded bg-brand-green/70" />
          <div className="h-1.5 w-2/3 rounded bg-white/25" />
        </div>
      </GlassTile>
      <GlassTile className="bottom-[12%] left-[16%] h-20 w-28">
        <div className="flex h-full items-center justify-center">
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-sm" style={{ background: i % 2 ? '#77B72A' : '#0082C2', opacity: 0.7 }} />
            ))}
          </div>
        </div>
      </GlassTile>
      <Ring className="right-[20%] bottom-[14%]" size={140} color="rgba(0,130,194,0.4)" />
    </div>
  );
}

function NeedScene() {
  return (
    <div className="absolute inset-0">
      {/* shelf / gap metaphor */}
      <div className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="h-2 w-full rounded bg-white/15" />
          <div className="mt-3 flex items-end justify-between gap-2">
            <div className="h-16 w-1/4 rounded-t-md bg-gradient-to-t from-brand-blue/70 to-brand-blue/30" />
            <div className="h-24 w-1/4 rounded-t-md bg-gradient-to-t from-brand-green/80 to-brand-green/40 shadow-glow-green" />
            <div className="h-12 w-1/4 rounded-t-md bg-gradient-to-t from-white/40 to-white/10" />
          </div>
          <div className="mt-2 h-2 w-full rounded bg-white/15" />
        </div>
      </div>
      <Orb className="left-[6%] top-[10%] animate-floaty" size={120} from="#4FB3E0" to="#0082C2" />
      <Ring className="right-[8%] bottom-[10%]" size={130} color="rgba(119,183,42,0.4)" />
    </div>
  );
}

function ObjectiveScene() {
  return (
    <div className="absolute inset-0">
      {/* funnel / outcome diagram */}
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="obj-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#77B72A" />
            <stop offset="100%" stopColor="#0082C2" />
          </linearGradient>
        </defs>
        <path d="M40 40 H260 L180 110 L180 170 L120 170 L120 110 Z" fill="url(#obj-g)" opacity="0.85" />
        <path d="M40 40 H260 L180 110 L180 170 L120 170 L120 110 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <circle cx="150" cy="80" r="6" fill="#fff" />
        <circle cx="150" cy="140" r="5" fill="#fff" opacity="0.8" />
      </svg>
      <Orb className="right-[8%] top-[12%] animate-floaty" size={90} from="#A4D86A" to="#0082C2" />
    </div>
  );
}

function DiagnosticScene() {
  return (
    <div className="absolute inset-0">
      {/* abstract comparison chart / search gap */}
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dg-g" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#77B72A" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#77B72A" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="dg-b" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0082C2" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0082C2" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="20" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.08)" />
        ))}
        <rect x="40" y="150" width="34" height="30" rx="4" fill="url(#dg-g)" />
        <rect x="90" y="60" width="34" height="120" rx="4" fill="url(#dg-b)" />
        <rect x="140" y="120" width="34" height="60" rx="4" fill="url(#dg-g)" />
        <rect x="190" y="30" width="34" height="150" rx="4" fill="url(#dg-b)" />
        <rect x="240" y="170" width="34" height="10" rx="4" fill="rgba(255,255,255,0.25)" />
      </svg>
      <GlassTile className="left-[6%] top-[10%] px-3 py-1.5 text-[10px] font-semibold tracking-widest text-white/80">
        SEARCH INTEREST
      </GlassTile>
    </div>
  );
}

function HubScene() {
  return (
    <div className="absolute inset-0">
      {/* central hub with spokes */}
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full">
        <g stroke="rgba(255,255,255,0.25)" strokeWidth="1.5">
          <line x1="150" y1="100" x2="60" y2="40" />
          <line x1="150" y1="100" x2="240" y2="40" />
          <line x1="150" y1="100" x2="50" y2="150" />
          <line x1="150" y1="100" x2="250" y2="150" />
          <line x1="150" y1="100" x2="150" y2="180" />
        </g>
        <circle cx="150" cy="100" r="26" fill="#77B72A" opacity="0.9" />
        <circle cx="150" cy="100" r="26" fill="none" stroke="#fff" strokeOpacity="0.5" />
        {[
          [60, 40],
          [240, 40],
          [50, 150],
          [250, 150],
          [150, 180],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="12" fill="#0082C2" opacity="0.7" />
        ))}
      </svg>
      <Orb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-floaty" size={70} from="#A4D86A" to="#77B72A" />
    </div>
  );
}

function ScanScene() {
  return (
    <div className="absolute inset-0">
      {/* phone scan frame */}
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-brand-green/70 bg-ink-800/60 shadow-glow">
        <div className="absolute inset-3 rounded-xl border border-white/15">
          <div className="absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-blue/60" />
          <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/20" />
        </div>
        <div className="absolute left-2 right-2 top-1/2 h-0.5 bg-brand-green shadow-glow" />
      </div>
      <Ring className="right-[10%] top-[12%]" size={90} color="rgba(119,183,42,0.4)" />
      <Orb className="left-[8%] bottom-[12%] animate-floaty" size={80} from="#4FB3E0" to="#0082C2" />
    </div>
  );
}

function WhatsappScene() {
  return (
    <div className="absolute inset-0">
      {/* chat bubbles */}
      <div className="absolute left-[12%] top-[18%] flex flex-col gap-2.5">
        <div className="max-w-[60%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-[11px] text-white/80 backdrop-blur">
          Time for your evening application
        </div>
        <div className="ml-auto max-w-[55%] rounded-2xl rounded-br-sm bg-brand-green/80 px-3 py-2 text-[11px] text-ink-950">
          Done!
        </div>
        <div className="max-w-[65%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-[11px] text-white/80 backdrop-blur">
          Share a progress photo
        </div>
      </div>
      <Orb className="right-[10%] bottom-[14%] animate-floaty2" size={110} from="#A4D86A" to="#0082C2" />
      <Ring className="right-[20%] top-[14%]" size={70} color="rgba(0,130,194,0.4)" />
    </div>
  );
}

function UvScene() {
  return (
    <div className="absolute inset-0">
      {/* sun + uv gradient overlay */}
      <Orb className="left-[12%] top-[14%] animate-floaty" size={120} from="#A4D86A" to="#0082C2" spin />
      <div className="absolute right-[10%] top-[20%] h-40 w-28 rounded-xl border border-white/15 bg-gradient-to-b from-brand-blue/40 to-brand-green/30 backdrop-blur">
        <div className="flex h-full flex-col justify-end gap-1 p-2.5">
          <div className="h-1.5 w-3/4 rounded bg-white/50" />
          <div className="h-1.5 w-1/2 rounded bg-white/30" />
        </div>
      </div>
      {/* uv rays */}
      <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full opacity-50">
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="80"
            y1="70"
            x2={80 + Math.cos((i / 8) * Math.PI * 2) * 130}
            y2={70 + Math.sin((i / 8) * Math.PI * 2) * 130}
            stroke="rgba(119,183,42,0.4)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

function ArScene() {
  return (
    <div className="absolute inset-0">
      {/* AR cube over skin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-28 w-28 animate-floaty" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateY(30deg)' }}>
          <div className="absolute inset-0 border-2 border-brand-green/70 bg-brand-green/10 [transform:translateZ(56px)]" />
          <div className="absolute inset-0 border-2 border-brand-blue/70 bg-brand-blue/10 [transform:rotateY(180deg)_translateZ(56px)]" />
          <div className="absolute inset-0 border-2 border-brand-green/50 bg-brand-green/5 [transform:rotateY(90deg)_translateZ(56px)]" />
          <div className="absolute inset-0 border-2 border-brand-blue/50 bg-brand-blue/5 [transform:rotateY(-90deg)_translateZ(56px)]" />
          <div className="absolute inset-0 border-2 border-brand-green/50 [transform:rotateX(90deg)_translateZ(56px)]" />
          <div className="absolute inset-0 border-2 border-brand-blue/50 [transform:rotateX(-90deg)_translateZ(56px)]" />
        </div>
      </div>
      <Ring className="left-[10%] top-[14%]" size={80} color="rgba(119,183,42,0.4)" />
      <Ring className="right-[12%] bottom-[14%]" size={60} color="rgba(0,130,194,0.4)" />
    </div>
  );
}

function StreakScene() {
  return (
    <div className="absolute inset-0">
      {/* streak calendar + flame */}
      <div className="absolute left-[12%] top-[16%] grid grid-cols-5 gap-1.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-5 rounded-md"
            style={{
              background: i < 8 ? 'linear-gradient(135deg,#77B72A,#0082C2)' : 'rgba(255,255,255,0.1)',
              boxShadow: i < 8 ? '0 0 12px -2px rgba(119,183,42,0.6)' : 'none',
            }}
          />
        ))}
      </div>
      <Orb className="right-[14%] bottom-[14%] animate-floaty" size={90} from="#A4D86A" to="#77B72A" />
      <GlassTile className="right-[12%] top-[16%] px-3 py-1.5 text-[11px] font-bold text-brand-green-light">
        28-DAY STREAK
      </GlassTile>
    </div>
  );
}

function WeatherScene() {
  return (
    <div className="absolute inset-0">
      {/* weather card */}
      <GlassTile className="left-1/2 top-1/2 h-32 w-44 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-full flex-col justify-center px-4">
          <div className="text-[10px] font-semibold tracking-widest text-white/60">UV INDEX · 7</div>
          <div className="mt-1 text-2xl font-bold text-white">High</div>
          <div className="mt-1 text-[11px] text-brand-green-light">Use NewGel UV today</div>
          <div className="mt-2 h-1 w-full rounded bg-white/10">
            <div className="h-1 w-3/4 rounded bg-gradient-to-r from-brand-green to-brand-blue" />
          </div>
        </div>
      </GlassTile>
      <Orb className="left-[10%] top-[14%] animate-floaty2" size={80} from="#4FB3E0" to="#0082C2" spin />
      <Ring className="right-[10%] bottom-[12%]" size={70} color="rgba(119,183,42,0.4)" />
    </div>
  );
}

function ConclusionScene() {
  return (
    <div className="absolute inset-0">
      <Orb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-floaty" size={200} from="#A4D86A" to="#0082C2" />
      <Ring className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={260} color="rgba(119,183,42,0.35)" />
      <Ring className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={330} color="rgba(0,130,194,0.25)" />
      <GlassTile className="left-[14%] bottom-[16%] px-3 py-1.5 text-[10px] font-semibold tracking-widest text-white/80">
        NEXT STEP
      </GlassTile>
    </div>
  );
}

