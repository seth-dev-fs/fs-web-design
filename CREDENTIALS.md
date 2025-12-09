# Credenciais e Informações do Projeto

## Informações de Contacto (Configuradas no Site)

### Email
- **Principal:** seth_dev_fs@proton.me
- **Usado em:** Formulário de contacto (FormSubmit.co)
- **Localização:** `src/pages/Contact.jsx` linha ~15

### WhatsApp
- **Número:** +351 912 004 595
- **Formato código:** 351912004595 (sem espaços)
- **Localizações no código:**
  1. `src/components/WhatsAppButton.jsx` - linha 4
  2. `src/components/Footer.jsx` - linha 52
  3. `src/pages/Contact.jsx` - linha 26

### Instagram
- **Handle:** @fs_webdesigner
- **URL:** https://instagram.com/fs_webdesigner
- **Localizações no código:**
  1. `src/components/Footer.jsx` - linha 63
  2. `src/pages/Contact.jsx` - linha 36

---

## Serviços Configurados

### FormSubmit.co (Formulário de Contacto)
- **Serviço:** Gratuito
- **URL:** https://formsubmit.co/
- **Email destino:** seth_dev_fs@proton.me
- **Ativação:**
  1. Fazer primeiro envio no formulário
  2. Verificar email de confirmação
  3. Clicar no link para ativar
- **Features ativadas:**
  - Subject: "Novo contacto - FS Web Design"
  - Template: Table format
  - Captcha: Desativado
  - Redirect: Sem redirect (handled pelo React)

### Vercel (Hosting)
- **Plano:** Hobby (Gratuito)
- **URL Default:** fswebdesign.vercel.app (após deploy)
- **Login:** Usar GitHub/GitLab/Email
- **Dashboard:** https://vercel.com/dashboard
- **Features incluídas:**
  - SSL automático
  - CDN global
  - Deploy automático via Git
  - 100GB bandwidth/mês
  - Analytics básico

---

## Informações do Negócio

### Identidade
- **Nome:** FS Web Design
- **Owner:** Fábio Sousa
- **Tipo:** Portfolio Pessoal + Web Design Agency
- **Localização:** Portugal

### Serviços Oferecidos
1. **Landing Page** - €250
2. **Website Completo** - €350-500
3. **Soluções Premium** - €600-1000+

### Projetos Showcase
1. Barbershop Demo - https://barbershop-demo-navy.vercel.app/
2. Mesa Portuguesa - https://mesa-portuguesa.vercel.app/
3. Coach Fitness PT - https://coach-fitness-pt.vercel.app/
4. Bella Salon - (em desenvolvimento)
5. Slot para projeto futuro

---

## Tech Stack Detalhado

### Frontend
- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.3
- **Styling:** Tailwind CSS 3.4.10
- **Router:** React Router DOM 6.26.1
- **Animations:** Framer Motion 11.5.4
- **Icons:** React Icons 5.3.0
- **SEO:** React Helmet Async 2.0.5

### Dependencies Completas
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.1",
  "react-icons": "^5.3.0",
  "framer-motion": "^11.5.4",
  "react-helmet-async": "^2.0.5"
}
```

### Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.45",
  "tailwindcss": "^3.4.10",
  "vite": "^5.4.3"
}
```

---

## URLs Importantes

### Desenvolvimento
- **Local:** http://localhost:3000
- **Vite Dev Server:** Port 3000 (configurado)

### Produção (Após Deploy)
- **Main:** fswebdesign.vercel.app
- **Sitemap:** fswebdesign.vercel.app/sitemap.xml
- **Robots:** fswebdesign.vercel.app/robots.txt

### Páginas
- Home: /
- Portfolio: /portfolio
- Sobre: /sobre
- Serviços: /servicos
- Contacto: /contacto

---

## Cores do Brand (Design System)

### Principais
```css
--bg-primary: #0A0A0A       /* Preto profundo */
--bg-secondary: #121212     /* Cards */
--bg-tertiary: #1A1A1A      /* Hover states */
```

### Acentos
```css
--accent-purple: #8B5CF6    /* Roxo primary */
--accent-gold: #D4AF37      /* Dourado secondary */
--accent-purple-dark: #7C3AED
--accent-gold-dark: #B8941F
```

### Texto
```css
--text-primary: #F5F5F5     /* Branco principal */
--text-secondary: #A3A3A3   /* Cinza claro */
--text-muted: #737373       /* Cinza escuro */
```

### Bordas e Efeitos
```css
--border-subtle: #262626
--glow-purple: rgba(139, 92, 246, 0.3)
--glow-gold: rgba(212, 175, 55, 0.3)
```

---

## Fontes

### Google Fonts
- **Font Family:** Inter
- **Weights usados:** 300, 400, 500, 600, 700, 800
- **URL:** https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap
- **Configuração:** `index.html` + `tailwind.config.js`

---

## Imagens (Placeholders)

### Source: Unsplash
Todas as imagens são placeholders do Unsplash. Substituir por imagens reais:

**Portfolio Projects:**
- Barbershop: `https://images.unsplash.com/photo-1585747860715-2ba37e788b70`
- Mesa Portuguesa: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4`
- Coach Fitness: `https://images.unsplash.com/photo-1534438327276-14e5300c3a48`
- Bella Salon: `https://images.unsplash.com/photo-1560066984-138dadb4c035`
- Futuro: `https://images.unsplash.com/photo-1460925895917-afdab827c52f`

**About Page:**
- Avatar: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2`

---

## SEO Configuration

### Meta Tags Base
- **Title Pattern:** "Página | FS Web Design - Descrição"
- **Author:** Fábio Sousa - FS Web Design
- **Keywords:** web design portugal, web developer, react developer, nextjs, websites profissionais, landing pages, portfolio web design

### Open Graph
- **Type:** website
- **Locale:** pt_PT
- **Site Name:** FS Web Design
- **Image:** /og-image.jpg (adicionar no futuro)

### Schema.org (Futuro)
Adicionar LocalBusiness markup para melhor SEO local:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FS Web Design",
  "description": "Web Design e Development para negócios locais",
  "url": "https://fswebdesign.vercel.app",
  "telephone": "+351912004595",
  "email": "seth_dev_fs@proton.me",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PT"
  }
}
```

---

## Estatísticas do Projeto

### Código
- **Total ficheiros:** 30+
- **Linhas de código:** 1,631+ (src/)
- **Componentes React:** 14
- **Páginas:** 5
- **Tamanho estimado build:** ~200KB (gzipped)

### Performance Targets
- **Lighthouse Performance:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Total Blocking Time:** < 300ms

---

## Segurança

### Headers (vercel.json)
```json
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

### HTTPS
- Automático via Vercel
- SSL/TLS certificate gratuito
- HTTP → HTTPS redirect automático

### Formulário
- FormSubmit.co handle spam
- Captcha invisível (opcional)
- Rate limiting via FormSubmit

---

## Backup e Versionamento

### Git
```bash
# Inicializar repositório
git init
git add .
git commit -m "Initial commit: FS Web Design Portfolio"

# Conectar com GitHub
git remote add origin https://github.com/USERNAME/fs-web-design.git
git push -u origin main
```

### Branches Sugeridas
- `main` - Produção
- `dev` - Desenvolvimento
- `feature/*` - Novas features

---

## Manutenção

### Atualizar Dependências
```bash
# Ver outdated
npm outdated

# Atualizar todas
npm update

# Atualizar major versions (cuidado!)
npm install react@latest react-dom@latest
```

### Monitorização
- Vercel Analytics (dashboard)
- Google Analytics (opcional)
- Error tracking: Sentry (opcional)

---

## Próximas Features (Roadmap)

### Curto Prazo
- [ ] Adicionar imagens reais dos projetos
- [ ] Foto real do Fábio na página Sobre
- [ ] Testimonials de clientes
- [ ] Favicon personalizado

### Médio Prazo
- [ ] Blog section
- [ ] Casos de estudo detalhados
- [ ] Newsletter signup
- [ ] Multi-idioma (EN)

### Longo Prazo
- [ ] Sistema de booking online
- [ ] Client portal
- [ ] Live chat
- [ ] PWA (Progressive Web App)

---

## Contacto do Desenvolvedor

**Este projeto foi desenvolvido seguindo o sistema de 5 agents:**
1. ✅ Project Planner
2. ✅ Design Architect
3. ✅ Frontend Developer
4. ✅ Content Optimizer
5. ✅ QA Tester

**Status:** COMPLETO E PRONTO PARA PRODUÇÃO

---

**IMPORTANTE:** Guarde este ficheiro em local seguro!

Contém todas as informações necessárias para manter e atualizar o website.
