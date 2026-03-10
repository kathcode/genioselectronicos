import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <section id="inicio" className="relative">
      <div className="relative h-[68vh] w-full">
        <Image
          src="/banner.png"
          alt="Equipo creativo trabajando con dispositivos electrónicos"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-2xl rounded-2xl bg-background/70 p-6 md:p-8 shadow-lg">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Genios Electrónicos
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                Talleres, servicios y soluciones creativas en tecnología para
                impulsar tus ideas.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#taller">
                  <Button className="w-full md:w-auto">
                    Reserva un taller
                  </Button>
                </a>
                <a href="#servicios">
                  <Button variant="secondary" className="w-full md:w-auto">
                    Ver servicios
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
