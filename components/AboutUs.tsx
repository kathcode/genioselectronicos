import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function AboutUs() {
  return (
    <section id="nosotros" className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-semibold">Quiénes somos</h2>
          <p className="mt-4 text-muted-foreground">
            En <strong>genios electronicos</strong> combinamos creatividad y experiencia técnica para
            diseñar, construir y explicar tecnología de una manera clara y práctica.
          </p>
          <p className="mt-3 text-muted-foreground">
            Ofrecemos talleres y servicios a medida para emprendedores, equipos y escuelas.
            Nuestro enfoque es 100% práctico y orientado a resultados.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Nuestro enfoque</CardTitle>
            <CardDescription>Lo que nos hace diferentes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl bg-accent/40 p-4">
              Explicaciones en lenguaje sencillo y ejemplos reales.
            </div>
            <div className="rounded-xl bg-secondary/40 p-4">
              Materiales de apoyo y plantillas listas para usar.
            </div>
            <div className="rounded-xl bg-primary/20 p-4">
              Acompañamiento después del taller para asegurar resultados.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
