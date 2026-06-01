import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Cog, Ruler, Wrench, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-cnc.jpg";
import workshopImg from "@/assets/workshop.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXIS Maquinados — Taller de Maquinado Industrial CNC" },
      { name: "description", content: "Maquinado CNC de precisión: torneado, fresado, piezas a medida en acero, aluminio, bronce y plásticos técnicos." },
      { property: "og:title", content: "AXIS Maquinados — Precisión en cada pieza" },
      { property: "og:description", content: "Taller industrial con CNC de 3 y 5 ejes. Cotización en 24h." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Torno CNC maquinando pieza de acero" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="mono text-xs uppercase text-primary">Taller CNC · Est. 2014</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl">
            Precisión que <br/>
            <span className="text-gradient-ember">se mide en micras.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Maquinado industrial bajo plano para industria automotriz, aeroespacial y energía.
            Tornos y centros CNC operados por técnicos con más de una década de experiencia.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contacto" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)] hover:opacity-90 transition">
              Solicitar cotización <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/proyectos" className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/50 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:border-primary transition">
              Ver proyectos recientes
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-3xl">
            {[
              ["±0.01", "mm tolerancia"],
              ["1,200+", "piezas / mes"],
              ["48 h", "tiempo respuesta"],
              ["10 yr", "experiencia"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background p-5">
                <div className="font-display text-3xl font-bold text-primary">{n}</div>
                <div className="mono text-[10px] uppercase text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="mono text-xs uppercase text-primary mb-3">01 — Qué hacemos</div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Capacidades del taller</h2>
          </div>
          <Link to="/servicios" className="mono text-xs uppercase text-muted-foreground hover:text-primary inline-flex items-center gap-2">
            Ver todos los servicios <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { icon: Cog, title: "Torneado CNC", desc: "Piezas cilíndricas hasta Ø 350 mm con acabado espejo." },
            { icon: Wrench, title: "Fresado 3 y 5 ejes", desc: "Geometrías complejas en una sola sujeción." },
            { icon: Ruler, title: "Prototipado rápido", desc: "Primera pieza en 48 horas desde el plano." },
            { icon: ShieldCheck, title: "Control de calidad", desc: "Verificación dimensional con CMM y micrómetros." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-background p-8 hover:bg-card transition-colors">
              <Icon className="h-7 w-7 text-primary mb-6" />
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <div className="mono text-xs uppercase text-primary mb-3">02 — Trabajos recientes</div>
              <h2 className="text-4xl md:text-5xl font-bold">Del taller, esta semana</h2>
            </div>
            <Link to="/proyectos" className="mono text-xs uppercase text-muted-foreground hover:text-primary inline-flex items-center gap-2">
              Galería completa <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: p1, tag: "ALUMINIO 6061", title: "Bloque de soporte hidráulico", date: "06 / 2026" },
              { img: p2, tag: "ACERO INOX 304", title: "Fresado de bastidor", date: "05 / 2026" },
              { img: p3, tag: "BRONCE SAE 660", title: "Lote de bujes torneados", date: "05 / 2026" },
            ].map((p) => (
              <article key={p.title} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="pt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mono text-[10px] uppercase text-primary mb-1">{p.tag}</div>
                    <h3 className="font-display font-semibold">{p.title}</h3>
                  </div>
                  <span className="mono text-[10px] text-muted-foreground whitespace-nowrap mt-1">{p.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP / ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={workshopImg} alt="Planta de maquinado AXIS" width={1600} height={1000} loading="lazy" className="w-full aspect-[4/3] object-cover" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground p-6 max-w-[220px]">
            <div className="font-display text-3xl font-bold">14</div>
            <div className="mono text-[10px] uppercase mt-1">centros CNC activos en planta</div>
          </div>
        </div>
        <div>
          <div className="mono text-xs uppercase text-primary mb-3">03 — El taller</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Operadores, no operarios.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Programamos, ajustamos y verificamos cada lote internamente. Trabajamos con planos en
            PDF, STEP o IGES — y si traes una idea sin plano, nuestro ingeniero te ayuda a llevarla
            a producción.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cada pieza sale del taller con su reporte dimensional. Sin sorpresas, sin reproceso.
          </p>
          <div className="grid grid-cols-2 gap-px bg-border">
            {[["CAM", "Fusion 360 / Mastercam"], ["CAD", "SolidWorks · STEP · IGES"], ["QA", "CMM Mitutoyo"], ["ENTREGA", "Paquetería nacional"]].map(([k, v]) => (
              <div key={k} className="bg-background p-4">
                <div className="mono text-[10px] uppercase text-muted-foreground">{k}</div>
                <div className="text-sm font-medium mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
            ¿Tienes un plano? <span className="text-gradient-ember">Lo cotizamos hoy.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Súbenos tu archivo o cuéntanos qué necesitas. Respondemos en menos de 24 horas hábiles.
          </p>
          <Link to="/contacto" className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-ember)] hover:opacity-90 transition">
            Iniciar cotización <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
