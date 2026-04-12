# Verny.cl — Sitio Web Corporativo

Sitio web principal de **Verny**, empresa chilena de automatización e inteligencia artificial. Single Page Application de alto nivel visual orientada a la conversión, que presenta todos los productos y servicios de Verny.

- URL de producción: `https://www.verny.cl`
- Repositorio: `github.com/Vernycore/verny.cl`
- Stack: Next.js 16, Tailwind CSS v4, Framer Motion, shadcn/ui, TypeScript

---

## Requisitos previos

- Node.js 18+
- Cuenta en [Vercel](https://vercel.com)

---

## 1. Desarrollo local

```bash
npm install
npm run dev
```

Disponible en: `http://localhost:3000`

---

## 2. Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# Webhook para formulario de contacto (opcional)
NEXT_PUBLIC_WEBHOOK_URL=https://tu-webhook.com/contacto
```

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_WEBHOOK_URL` | Endpoint donde se envían los datos del formulario de contacto vía POST |

---

## 3. Deploy en Vercel

El proyecto está conectado a Vercel con deploy automático en cada push a `main`.

### Deploy manual

```bash
npm run build
```

O desde el dashboard de Vercel conectando el repositorio de GitHub.

### Configurar dominio personalizado

En **Settings > Domains** del proyecto en Vercel:
1. Agregar `www.verny.cl`
2. Configurar los registros DNS según las instrucciones de Vercel:

| Tipo | Nombre | Valor |
|---|---|---|
| `CNAME` | `www` | `cname.vercel-dns.com` |
| `A` | `@` | `76.76.21.21` |

---

## 4. Estructura del proyecto

```
verny.cl/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Página principal (ensamblaje de secciones)
│   │   ├── layout.tsx            # Layout raíz con metadata SEO
│   │   └── globals.css           # Design system: colores, tipografía, componentes base
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx        # Navegación sticky con glassmorphism
│       │   └── Footer.tsx        # Pie de página
│       ├── sections/
│       │   ├── Hero.tsx          # Hero con mockup iPhone animado
│       │   ├── Productos.tsx     # Showcase de productos con tabs
│       │   ├── Ecosistema.tsx    # Bento Grid ecosistema digital
│       │   ├── Proceso.tsx       # Proceso de trabajo en 4 pasos
│       │   └── Garantia.tsx      # Garantía, FAQ y formulario de contacto
│       └── ui/                   # Componentes shadcn/ui (button, accordion, dialog, tabs)
├── public/
│   └── logos/
│       ├── logo.png              # Logo horizontal principal
│       └── isotipo.png           # Isotipo de Verny
└── .env.local                    # Variables de entorno (no se sube al repo)
```

---

## 5. Secciones del sitio

| Sección | Componente | Descripción |
|---|---|---|
| Navbar | `Navbar.tsx` | Sticky con glassmorphism, menú mobile, links a secciones |
| Hero | `Hero.tsx` | Título + mockup iPhone con chat WhatsApp animado (rota entre rubros chilenos) |
| Productos | `Productos.tsx` | Tabs: VernyBot, VernyCalendar, Conectividad Pro |
| Ecosistema | `Ecosistema.tsx` | Bento Grid: SEO Local, Dashboards, Intranet, Rediseño Web |
| Proceso | `Proceso.tsx` | 4 pasos: Diagnóstico, Diseño, Implementación, Optimización |
| Garantía + FAQ | `Garantia.tsx` | Bloque de confianza, acordeones FAQ y formulario de contacto |
| Footer | `Footer.tsx` | Logo, copyright y links |

---

## 6. Design System

### Colores

| Color | Hex | Uso |
|---|---|---|
| Navy (principal) | `#1B2A5E` | Fondos oscuros, textos principales |
| Cyan (acento) | `#2EC4D4` | CTAs, bordes activos, highlights |
| Gris fondo | `#F9FAFB` | Fondo general de secciones claras |
| Blanco | `#FFFFFF` | Fondos de cards y secciones |

### Tipografía

- **Fuente:** Inter (Google Fonts via `next/font/google`)
- **Pesos:** 300, 400, 500, 600, 700, 800

### Componentes base (globals.css)

| Clase | Descripción |
|---|---|
| `.btn-primary` | Botón principal cyan sólido |
| `.btn-secondary` | Botón navy sólido |
| `.btn-outline` | Botón con borde cyan |
| `.btn-ghost` | Botón sin fondo |
| `.card` | Tarjeta blanca con borde y sombra suave |
| `.input` | Campo de formulario estilizado |
| `.badge-*` | Badges de estado (green, yellow, red, blue, gray) |

---

## 7. Tecnologías principales

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16 | Framework principal (App Router) |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | v4 | Estilos y design system |
| Framer Motion | latest | Animaciones y micro-interacciones |
| shadcn/ui | latest | Componentes UI (accordion, dialog, tabs) |
| Lucide React | latest | Iconografía |
