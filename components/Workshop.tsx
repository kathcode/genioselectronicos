"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Workshop() {
  const [enviado, setEnviado] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as any)
    console.log("Solicitud de taller:", data)
    setEnviado(true)
    form.reset()
  }

  return (
    <section id="taller" className="container py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Reserva tu taller</h2>
        <p className="mt-3 text-center text-muted-foreground">
          Cuéntanos qué necesitas y coordinamos fechas y modalidad.
        </p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 rounded-2xl border p-6 md:p-8 bg-card">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>
            <div>
              <Label htmlFor="email">Correo</Label>
              <Input id="email" type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" name="telefono" placeholder="+1 555 555 5555" />
            </div>
            <div>
              <Label htmlFor="fecha">Fecha preferida</Label>
              <Input id="fecha" name="fecha" type="date" />
            </div>
          </div>

          <div>
            <Label htmlFor="tipo">Tipo de taller</Label>
            <Input id="tipo" name="tipo" placeholder="Ej. Introducción a Arduino" required />
          </div>

          <div>
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea id="mensaje" name="mensaje" placeholder="Cuéntanos objetivos, público y duración ideal" />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Solicitar reserva</Button>
          </div>

          {enviado && (
            <p className="text-sm text-green-700">
              ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
