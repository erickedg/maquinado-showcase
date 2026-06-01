import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/materiales")({
  head: () => ({
    meta: [
      { title: "Materiales y Acabados — AXIS Maquinados" },
      { name: "description", content: "Materiales que maquinamos: aceros, aluminios, bronces, inoxidables y plásticos técnicos. Acabados disponibles." },
      { property: "og:title", content: "Materiales y Acabados — AXIS" },
      { property: "og:description", content: "Catálogo de materiales y acabados industriales que ofrecemos." },
    ],
  }),
  component: MaterialesPage,
});

const groups = [
  {
    name: "Aceros al carbono",
    items: [
      { code: "1018", desc: "Acero estructural, fácil maquinado y soldadura." },
      { code: "1045", desc: "Medio carbono, ejes y piezas con resistencia media." },
      { code: "4140", desc: "Aleado, alta resistencia. Templable." },
      { code: "A36", desc: "Estructural genérico para soportes y placas." },
    ],
  },
  {
    name: "Aceros inoxidables",
    items: [
      { code: "304", desc: "Anticorrosivo general, industria alimenticia." },
      { code: "316", desc: "Resistente a cloruros, ambiente marino y químico." },
      { code: "17-4 PH", desc: "Endurecible por precipitación, alta resistencia." },
    ],
  },
  {
    name: "Aluminios",
    items: [
      { code: "6061-T6", desc: "Versátil, estructural, anodizable." },
      { code: "7075-T6", desc: "Alta resistencia mecánica para aeroespacial." },
      { code: "2024", desc: "Aleado con cobre, alta resistencia a la fatiga." },
    ],
  },
  {
    name: "Bronces y latones",
    items: [
      { code: "SAE 660", desc: "Bujes, casquillos y piezas con autolubricación." },
      { code: "C36000", desc: "Latón de libre maquinado, conexiones." },
    ],
  },
  {
    name: "Plásticos técnicos",
    items: [
      { code: "Nylamid", desc: "Engranes, rodillos y guías mecánicas." },
      { code: "Teflón (PTFE)", desc: "Sellos y aplicaciones químicas." },
      { code: "Delrin (POM)", desc: "Piezas de precisión, baja fricción." },
    ],
  },
];

const finishes = [
  { name: "As-machined", desc: "Acabado directo de máquina, Ra ~ 1.6 µm" },
  { name: "Pulido espejo", desc: "Brillo alto, Ra < 0.4 µm" },
  { name: "Sandblast", desc: "Mate uniforme, ideal previo a anodizado" },
  { name: "Anodizado", desc: "Natural, negro, rojo, azul (aluminio)" },
  { name: "Pavonado", desc: "Protección contra óxido en aceros" },
  { name: "Niquelado", desc: "Resistencia química y estética" },
  { name: "Cincado", desc: "Anticorrosivo económico" },
  { name: "Pintura electrostática", desc: "Acabado RAL a elección" },
];

function MaterialesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
          <div className="mono text-xs uppercase text-primary mb-4">Materiales · Acabados</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-3xl">
            Maquinamos casi <span className="text-gradient-ember">cualquier metal.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Si tu material no está en la lista, pregúntanos. Trabajamos con proveedores certificados y entregamos certificado de material a solicitud.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold mb-12">Catálogo de materiales</h2>
        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="flex items-baseline gap-4 mb-5">
                <h3 className="font-display text-xl font-semibold">{g.name}</h3>
                <div className="flex-1 h-px bg-border" />
                <span className="mono text-xs text-muted-foreground">{g.items.length} grados</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                {g.items.map((it) => (
                  <div key={it.code} className="bg-background p-5">
                    <div className="mono text-xs text-primary mb-2">{it.code}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mono text-xs uppercase text-primary mb-3">Acabados</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Terminados disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {finishes.map((f) => (
              <div key={f.name} className="bg-background p-6">
                <h3 className="font-display font-semibold mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}