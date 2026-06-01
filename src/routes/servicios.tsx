import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cog, Wrench, Drill, Hammer, Sparkles, Layers, Ruler, Settings2 } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — AXIS Maquinados" },
      { name: "description", content: "Torneado, fresado CNC, rectificado, roscado y acabados industriales bajo plano." },
      { property: "og:title", content: "Servicios de Maquinado CNC — AXIS" },
      { property: "og:description", content: "Capacidades completas de taller: de prototipo a producción en serie." },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  { icon: Cog, title: "Torneado CNC", desc: "Piezas cilíndricas, ejes, bujes, casquillos. Capacidad hasta Ø 350 mm × 1500 mm.", spec: "Ø 5 – 350 mm" },
  { icon: Wrench, title: "Fresado 3 ejes", desc: "Placas, bloques y soportes con geometrías estándar.", spec: "800 × 500 × 500 mm" },
  { icon: Settings2, title: "Fresado 5 ejes", desc: "Piezas complejas en una sola sujeción, sin reproceso.", spec: "Tolerancia ±0.01" },
  { icon: Drill, title: "Barrenado y roscado", desc: "Roscado interior y exterior métrico, UNC, UNF y NPT.", spec: "M2 – M64" },
  { icon: Layers, title: "Rectificado", desc: "Acabado superficial fino para piezas críticas.", spec: "Ra 0.4 µm" },
  { icon: Hammer, title: "Soldadura y ensamble", desc: "TIG y MIG en acero, inoxidable y aluminio.", spec: "Cert. soldador" },
  { icon: Sparkles, title: "Acabados", desc: "Anodizado, pavonado, niquelado, pintura electrostática.", spec: "+12 acabados" },
  { icon: Ruler, title: "Inspección dimensional", desc: "Reporte CMM con cada lote de producción.", spec: "Mitutoyo CMM" },
];

const process = [
  { n: "01", t: "Plano y cotización", d: "Envías tu archivo CAD o boceto. Respondemos en 24 h con tiempos y precio." },
  { n: "02", t: "Programación CAM", d: "Generamos trayectorias optimizadas y validamos en simulación." },
  { n: "03", t: "Maquinado", d: "Producción en CNC con monitoreo y verificación en proceso." },
  { n: "04", t: "QA y entrega", d: "Reporte dimensional y empaque listo para envío nacional." },
];

function ServiciosPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
          <div className="mono text-xs uppercase text-primary mb-4">Servicios · Capacidades</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-3xl">
            Todo el proceso, <span className="text-gradient-ember">bajo un mismo techo.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Desde el plano hasta la pieza terminada con acabado, empacada y lista para producción.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map(({ icon: Icon, title, desc, spec }) => (
            <div key={title} className="group bg-background p-8 hover:bg-card transition-colors flex flex-col">
              <Icon className="h-8 w-8 text-primary mb-6" />
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              <div className="mono text-[10px] uppercase text-primary mt-6 pt-4 border-t border-border/60">{spec}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mono text-xs uppercase text-primary mb-3">El proceso</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">Cómo trabajamos</h2>
          <div className="grid md:grid-cols-4 gap-px bg-border">
            {process.map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="font-display text-5xl font-bold text-primary mb-4">{s.n}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold">¿Tu pieza encaja?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Mándanos el plano y te decimos en 24 h.</p>
        <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)] hover:opacity-90 transition">
          Cotizar ahora <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}