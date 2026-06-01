import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Cotización y Contacto — AXIS Maquinados" },
      { name: "description", content: "Solicita cotización de tu pieza maquinada. Respondemos en menos de 24 horas." },
      { property: "og:title", content: "Cotización rápida — AXIS Maquinados" },
      { property: "og:description", content: "Envía tu plano y recibe tiempos y precio en 24h." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
          <div className="mono text-xs uppercase text-primary mb-4">Contacto · Cotización</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] max-w-3xl">
            Cuéntanos qué <span className="text-gradient-ember">necesitas maquinar.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Respondemos cotizaciones en menos de 24 horas hábiles. Si tienes plano, mejor —
            si no, lo platicamos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-5 gap-12">
        {/* FORM */}
        <div className="lg:col-span-3">
          {sent ? (
            <div className="border border-primary/50 bg-primary/5 p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold mb-2">Solicitud recibida</h2>
              <p className="text-muted-foreground">Te contactamos en las próximas 24 horas hábiles al correo que indicaste.</p>
              <button onClick={() => setSent(false)} className="mt-6 mono text-xs uppercase text-primary hover:underline">
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Nombre" name="nombre" required />
                <Field label="Empresa" name="empresa" />
                <Field label="Correo" name="email" type="email" required />
                <Field label="Teléfono" name="tel" type="tel" />
              </div>

              <div>
                <label className="mono text-[10px] uppercase text-muted-foreground block mb-2">Tipo de servicio</label>
                <select required className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary">
                  <option>Torneado CNC</option>
                  <option>Fresado CNC</option>
                  <option>Prototipo</option>
                  <option>Producción en serie</option>
                  <option>Otro / no estoy seguro</option>
                </select>
              </div>

              <div>
                <label className="mono text-[10px] uppercase text-muted-foreground block mb-2">Cantidad estimada</label>
                <input
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
                  placeholder="Ej: 1 prototipo, 50 piezas, 1000+"
                />
              </div>

              <div>
                <label className="mono text-[10px] uppercase text-muted-foreground block mb-2">Descripción del proyecto</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
                  placeholder="Material, tolerancias, plazo, acabado deseado…"
                />
              </div>

              <div>
                <label className="mono text-[10px] uppercase text-muted-foreground block mb-2">Plano o archivo (opcional)</label>
                <div className="border border-dashed border-border rounded-sm p-6 text-center text-sm text-muted-foreground hover:border-primary transition cursor-pointer">
                  Arrastra tu archivo PDF, STEP o IGES aquí
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-ember)] hover:opacity-90 transition"
              >
                Enviar solicitud <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        {/* INFO */}
        <aside className="lg:col-span-2 space-y-px bg-border flex flex-col">
          {[
            { icon: Mail, t: "Correo directo", v: "cotizaciones@axis-mx.com" },
            { icon: Phone, t: "WhatsApp / Tel", v: "+52 81 0000 0000" },
            { icon: MapPin, t: "Planta", v: "Parque Industrial, Apodaca, Nuevo León" },
            { icon: Clock, t: "Horario", v: "L–V 8:00 a 18:00 · S 9:00 a 14:00" },
          ].map(({ icon: Icon, t, v }) => (
            <div key={t} className="bg-card p-6 flex gap-4">
              <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="mono text-[10px] uppercase text-muted-foreground mb-1">{t}</div>
                <div className="text-sm font-medium">{v}</div>
              </div>
            </div>
          ))}
          <div className="bg-primary text-primary-foreground p-6">
            <div className="mono text-[10px] uppercase mb-2">Respuesta garantizada</div>
            <div className="font-display text-3xl font-bold">&lt; 24 h</div>
            <p className="text-sm mt-2 opacity-90">Si tu cotización es urgente, llámanos directamente.</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mono text-[10px] uppercase text-muted-foreground block mb-2">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}