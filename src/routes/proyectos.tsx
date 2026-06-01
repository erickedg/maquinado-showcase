import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — AXIS Maquinados" },
      { name: "description", content: "Galería de piezas recientes maquinadas en nuestro taller CNC." },
      { property: "og:title", content: "Proyectos recientes — AXIS" },
      { property: "og:description", content: "Casos reales de torneado, fresado y acabados industriales." },
    ],
  }),
  component: ProyectosPage,
});

const filters = ["Todos", "Torneado", "Fresado", "Producción", "Prototipo"] as const;
type Filter = (typeof filters)[number];

const projects = [
  { img: p1, tag: "Fresado", title: "Bloque soporte hidráulico", mat: "Aluminio 6061-T6", finish: "Anodizado natural", date: "Jun 2026", qty: "1 pieza" },
  { img: p2, tag: "Fresado", title: "Bastidor de prensa", mat: "Acero inox 304", finish: "Pulido satinado", date: "May 2026", qty: "4 piezas" },
  { img: p3, tag: "Torneado", title: "Lote de bujes para reductor", mat: "Bronce SAE 660", finish: "Maquinado fino", date: "May 2026", qty: "120 piezas" },
  { img: p4, tag: "Producción", title: "Engranes inspeccionados", mat: "Acero 4140 templado", finish: "Rectificado", date: "Abr 2026", qty: "48 piezas" },
  { img: p1, tag: "Prototipo", title: "Carcasa para electrónica", mat: "Aluminio 7075", finish: "Sandblast + anodizado negro", date: "Abr 2026", qty: "2 piezas" },
  { img: p2, tag: "Fresado", title: "Placa de montaje custom", mat: "Acero A36", finish: "Pavonado", date: "Mar 2026", qty: "8 piezas" },
] as const;

function ProyectosPage() {
  const [active, setActive] = useState<Filter>("Todos");
  const list = active === "Todos" ? projects : projects.filter((p) => p.tag === active || (active === "Producción" && Number(p.qty.split(" ")[0]) > 10));

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
          <div className="mono text-xs uppercase text-primary mb-4">Proyectos · Galería</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-3xl">
            Trabajos reales <span className="text-gradient-ember">salidos de nuestro taller.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Cada pieza con su material, acabado y cantidad. Actualizamos esta galería semanalmente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`mono text-xs uppercase px-4 py-2 rounded-sm border transition ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <article key={i} className="group bg-card border border-border hover:border-primary/60 transition-colors">
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 mono text-[10px] uppercase bg-background/80 backdrop-blur px-2 py-1 border border-border">{p.tag}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display font-semibold leading-tight">{p.title}</h3>
                  <span className="mono text-[10px] text-muted-foreground whitespace-nowrap">{p.date}</span>
                </div>
                <dl className="grid grid-cols-3 gap-px bg-border text-xs">
                  <div className="bg-card p-2.5">
                    <dt className="mono text-[9px] uppercase text-muted-foreground">Material</dt>
                    <dd className="mt-0.5 text-foreground">{p.mat}</dd>
                  </div>
                  <div className="bg-card p-2.5">
                    <dt className="mono text-[9px] uppercase text-muted-foreground">Acabado</dt>
                    <dd className="mt-0.5 text-foreground">{p.finish}</dd>
                  </div>
                  <div className="bg-card p-2.5">
                    <dt className="mono text-[9px] uppercase text-muted-foreground">Cantidad</dt>
                    <dd className="mt-0.5 text-foreground">{p.qty}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mono text-xs uppercase text-primary mb-3">Lo que dicen</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 max-w-2xl">Reseñas de clientes que confían en AXIS</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { q: "Entregaron 200 piezas con tolerancia de ±0.02 sin una sola devolución. Excelente comunicación.", a: "Ing. Roberto S.", c: "Automotriz Tier 2" },
              { q: "Resolvieron un prototipo complicado en 3 días. Otros talleres me cotizaban 2 semanas.", a: "Laura M.", c: "Startup robótica" },
              { q: "El reporte dimensional viene en cada lote. Eso vale oro para nuestra auditoría ISO.", a: "Carlos P.", c: "Energía industrial" },
            ].map((t, i) => (
              <div key={i} className="bg-background p-8">
                <div className="text-primary text-2xl mb-4">★★★★★</div>
                <p className="leading-relaxed mb-6">"{t.q}"</p>
                <div className="mono text-xs">
                  <div className="text-foreground uppercase">{t.a}</div>
                  <div className="text-muted-foreground mt-0.5">{t.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}