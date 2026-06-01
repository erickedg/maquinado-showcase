import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
              AX
            </div>
            <span className="font-display font-bold tracking-tight">AXIS Maquinados</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Taller de maquinado industrial especializado en piezas de precisión bajo plano.
            Torneado y fresado CNC, prototipos y producción en serie con tolerancias estrictas.
          </p>
          <p className="mono text-xs text-muted-foreground mt-6">
            ISO 9001 · TOLERANCIAS ±0.01 MM · ENTREGAS EN 48H
          </p>
        </div>

        <div>
          <h4 className="mono text-xs uppercase text-muted-foreground mb-4">Sitio</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/servicios" className="hover:text-primary">Servicios</Link></li>
            <li><Link to="/proyectos" className="hover:text-primary">Proyectos</Link></li>
            <li><Link to="/materiales" className="hover:text-primary">Materiales</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Cotización</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mono text-xs uppercase text-muted-foreground mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contacto@axis-mx.com</li>
            <li>+52 81 0000 0000</li>
            <li>Parque Industrial,<br/>Nuevo León, MX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground mono">
          <span>© {new Date().getFullYear()} AXIS MAQUINADOS · TODOS LOS DERECHOS RESERVADOS</span>
          <span>HECHO CON PRECISIÓN EN MÉXICO</span>
        </div>
      </div>
    </footer>
  );
}