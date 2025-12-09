# FS Web Design - Portfolio Profissional

Website portfolio profissional para FS Web Design, desenvolvido com React, Vite e Tailwind CSS.

## Características

- Design minimalista dark premium
- Totalmente responsivo (mobile-first)
- Animações suaves com Framer Motion
- SEO otimizado
- Performance elevada
- Formulário de contacto funcional
- WhatsApp floating button
- Portfolio showcase interativo

## Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** React Icons
- **SEO:** React Helmet Async
- **Form:** FormSubmit.co

## Instalação e Setup

### 1. Instalar Dependências

```bash
npm install
```

### 2. Desenvolvimento Local

```bash
npm run dev
```

O website estará disponível em `http://localhost:3000`

### 3. Build para Produção

```bash
npm run build
```

### 4. Preview da Build

```bash
npm run preview
```

## Deploy no Vercel

### Método 1: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

### Método 2: Via GitHub

1. Criar repositório no GitHub
2. Fazer push do código:
```bash
git init
git add .
git commit -m "Initial commit - FS Web Design"
git branch -M main
git remote add origin https://github.com/SEU_USERNAME/fs-web-design.git
git push -u origin main
```

3. Ir a [vercel.com](https://vercel.com)
4. Importar o repositório
5. Vercel detectará automaticamente o Vite
6. Clicar em "Deploy"

### Método 3: Via Interface Vercel

1. Ir a [vercel.com/new](https://vercel.com/new)
2. Fazer upload da pasta `fs-web-design`
3. Vercel configurará automaticamente
4. Clicar em "Deploy"

## Configuração do Domínio

Após deploy, você pode:
1. Usar domínio gratuito da Vercel (fswebdesign.vercel.app)
2. Conectar domínio personalizado nas configurações do projeto

## Personalização

### Cores
Editar em `tailwind.config.js`:
```javascript
colors: {
  'bg-primary': '#0A0A0A',
  'accent-purple': '#8B5CF6',
  'accent-gold': '#D4AF37',
  // ...
}
```

### Contactos
Atualizar em:
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`
- `src/pages/Contact.jsx`

### Projetos
Editar arrays de projetos em:
- `src/components/FeaturedProjects.jsx`
- `src/pages/Portfolio.jsx`

### Email do Formulário
Alterar em `src/pages/Contact.jsx`:
```javascript
const response = await fetch('https://formsubmit.co/SEU_EMAIL@exemplo.com', {
```

## Estrutura do Projeto

```
fs-web-design/
├── public/           # Ficheiros estáticos
├── src/
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Páginas da aplicação
│   ├── App.jsx       # Componente principal
│   ├── main.jsx      # Entry point
│   └── index.css     # Estilos globais
├── index.html        # HTML template
└── package.json      # Dependências
```

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle Size: < 200KB (gzipped)

## Browser Support

- Chrome (último)
- Firefox (último)
- Safari (último)
- Edge (último)

## Licença

© 2025 FS Web Design. Todos os direitos reservados.

## Contacto

- **Email:** seth_dev_fs@proton.me
- **WhatsApp:** +351 912 004 595
- **Instagram:** @fs_webdesigner

---

Desenvolvido com React + Tailwind CSS
