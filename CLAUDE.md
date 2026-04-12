# Proyecto: Verny.cl — Sitio Web Corporativo

Stack: Next.js 16 · Tailwind CSS v4 · Framer Motion · shadcn/ui · TypeScript  
Repo: github.com/Vernycore/verny.cl  
Deploy: Vercel (auto-deploy en push a `main`)  
Dominio: www.verny.cl

---

## Reglas del proyecto

### README
Cada vez que se agregue una sección, componente o funcionalidad relevante al proyecto, actualizar el `README.md` con:
- Descripción del cambio en la tabla de **Secciones del sitio** o **Tecnologías**
- Si se agregan variables de entorno nuevas, documentarlas en la sección correspondiente
- Mantener la estructura actual del README: descripción, requisitos, desarrollo local, variables de entorno, deploy, estructura de carpetas, secciones, design system y tecnologías

### Design System
- Colores base: navy `#1B2A5E` y cyan `#2EC4D4`. No introducir colores fuera de la paleta sin consultar
- Tipografía: Inter únicamente, cargada vía `next/font/google`
- Usar clases del design system (`.btn-primary`, `.card`, `.input`, etc.) antes de escribir estilos inline
- Componentes en `src/components/sections/` para secciones de página y `src/components/layout/` para elementos estructurales

### Git
- Hacer commit y push a `main` después de cada cambio significativo
- Verificar que `npm run build` pasa sin errores antes de hacer push
- Mensajes de commit en español, descriptivos y con Co-Authored-By al final

---

## Workflow Orchestration

### 1. Plan Mode Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy to keep main context window clean

- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop

- After ANY correction from the user: update 'tasks/lessons.md' with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done

- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)

- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests -> then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to 'tasks/todo.md' with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review to 'tasks/todo.md'
6. **Capture Lessons**: Update 'tasks/lessons.md' after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.
