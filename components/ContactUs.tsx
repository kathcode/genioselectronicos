"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function ContactUs() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as any)
    console.log("Contacto:", data)
    setSent(true)
    form.reset()
  }

  return (
    <section id="contacto" className="container py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold">Contáctanos</h2>
          <p className="mt-3 text-muted-foreground">
            Escríbenos para asesorías, cotizaciones o colaboraciones.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p><strong>Correo:</strong> hola@genios-electronicos.com</p>
            <p><strong>Teléfono:</strong> +1 (555) 555-5555</p>
            <p><strong>Ubicación:</strong> Toronto, Canadá</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="grid gap-6 rounded-2xl border p-6 md:p-8 bg-card">
          <div>
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
          </div>
          <div>
            <Label htmlFor="email">Correo</Label>
            <Input id="email" type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
          </div>
          <div>
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea id="mensaje" name="mensaje" placeholder="¿En qué podemos ayudarte?" required />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Enviar mensaje</Button>
          </div>
          {sent && (
            <p className="text-sm text-green-700">
              ¡Gracias! Tu mensaje fue enviado.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
