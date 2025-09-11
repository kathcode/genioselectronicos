"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#taller", label: "Talleres" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          genios electronicos
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:underline underline-offset-4">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-2">
          <a href="#taller">
            <Button size="sm">Reservar taller</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
