# genios electronicos — Landing (Next.js + Tailwind + shadcn/ui)

**Idioma de la UI:** Español  
**Paleta:** Pastel con azul como primario

## Instrucciones rápidas

1. **Crear proyecto (si aún no lo tienes):**
   ```bash
   npx create-next-app@latest genios-electronicos-landing --ts --app --eslint --src-dir=false --tailwind
   cd genios-electronicos-landing
   ```

2. **Copiar los archivos de esta carpeta** dentro de tu proyecto (sobrescribe `app/`, `components/`, `lib/`, `public/`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`, `package.json`).

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **(Opcional) Instalar/actualizar shadcn/ui vía CLI** si deseas más componentes:
   ```bash
   # si usas el CLI oficial
   npx shadcn-ui@latest init
   ```

5. **Ejecutar:**
   ```bash
   npm run dev
   ```
   Abre http://localhost:3000

## Notas

- Los formularios de **Talleres** y **Contacto** hacen un `console.log` con los datos como ejemplo. Conéctalos a tu backend o a un servicio (Formspree, Resend, etc.).
- La paleta pastel está configurada con variables CSS en `app/globals.css` y se usa en `tailwind.config.ts` al estilo shadcn.
- Las secciones están en archivos separados dentro de `components/` y se importan en `app/page.tsx`.
- La imagen del banner y del portafolio son *placeholders* en `/public`. Reemplázalas libremente.
