import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GraduationCap, Code2, Palette, Rocket } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Talleres Educativos",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento y crecimiento",
    desc: "Estrategia, automatizaciones y mejores prácticas para escalar.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="container py-16">
      <h2 className="text-3xl font-semibold text-center">Servicios</h2>
      <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
        Soluciones integrales para llevar tus ideas del concepto al lanzamiento.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="hover:shadow-md transition-shadow">
            <CardHeader className="space-y-1">
              <Icon className="h-8 w-8" aria-hidden="true" color="#A6EBC9" />
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
