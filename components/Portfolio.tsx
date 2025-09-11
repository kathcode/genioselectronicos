import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  { title: "Taller de IoT para escuelas", img: "/portfolio1.jpg" },
  { title: "App educativa de electrónica", img: "/portfolio2.jpg" },
  { title: "Sitio web con identidad pastel", img: "/portfolio3.jpg" },
]

export function Portfolio() {
  return (
    <section id="portafolio" className="container py-16">
      <h2 className="text-3xl font-semibold text-center">Portafolio</h2>
      <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
        Algunos ejemplos representativos de nuestro trabajo.
      </p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={p.img} alt={p.title} fill className="object-cover" />
            </div>
            <CardContent>
              <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
