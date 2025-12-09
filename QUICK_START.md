# Quick Start Guide - FS Web Design

## Começar em 5 Minutos

### 1. Instalar e Rodar

```bash
cd fs-web-design
npm install
npm run dev
```

Abrir: http://localhost:3000

### 2. Deploy Vercel (3 comandos)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Pronto! Seu site está online.

---

## Personalizar Antes do Deploy

### Trocar Email do Formulário

**Ficheiro:** `src/pages/Contact.jsx` (linha ~15)

```javascript
// TROCAR ESTE EMAIL:
fetch('https://formsubmit.co/seth_dev_fs@proton.me', {
// PELO SEU:
fetch('https://formsubmit.co/seu_email@exemplo.com', {
```

### Trocar Número WhatsApp

**3 ficheiros para atualizar:**

1. `src/components/WhatsAppButton.jsx` (linha 4)
```javascript
const phoneNumber = '351912004595' // Seu número aqui
```

2. `src/components/Footer.jsx` (linha 52)
```javascript
href="https://wa.me/351912004595" // Seu número aqui
```

3. `src/pages/Contact.jsx` (linha 26)
```javascript
value: '+351 912 004 595', // Seu número aqui
link: 'https://wa.me/351912004595', // Seu número aqui
```

### Trocar Instagram

**2 ficheiros:**

1. `src/components/Footer.jsx` (linha 63)
2. `src/pages/Contact.jsx` (linha 36)

```javascript
// TROCAR:
href="https://instagram.com/fs_webdesigner"
value: '@fs_webdesigner'
// PELO SEU
```

### Adicionar Seus Projetos

**Ficheiro:** `src/pages/Portfolio.jsx` (linha 7-50)

```javascript
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição...',
    image: 'URL_da_imagem',
    link: 'URL_do_projeto',
    tech: ['React', 'Tailwind', 'etc'],
  },
  // ... mais projetos
]
```

**Dica:** Use Unsplash para imagens gratuitas: https://unsplash.com/

---

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build produção
npm run build

# Preview build
npm run preview

# Deploy Vercel
vercel --prod
```

---

## Estrutura Simplificada

```
fs-web-design/
├── src/
│   ├── pages/         # As 5 páginas
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   │
│   ├── components/    # Componentes reutilizáveis
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   │
│   └── App.jsx        # Router principal
│
├── public/            # Ficheiros estáticos
└── index.html         # HTML base
```

---

## Checklist Pré-Deploy

- [ ] npm install funcionou
- [ ] npm run dev funciona
- [ ] Email trocado (Contact.jsx)
- [ ] WhatsApp trocado (3 ficheiros)
- [ ] Instagram atualizado
- [ ] Projetos atualizados (Portfolio.jsx)
- [ ] Testado em mobile (Chrome DevTools)

---

## Deploy em 3 Passos

```bash
# 1. Install Vercel
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

Vercel dará URL tipo: `fswebdesign.vercel.app`

---

## Ativar Formulário

1. Fazer deploy
2. Ir ao site ao vivo
3. Enviar primeiro teste no formulário
4. Verificar email
5. Clicar link de confirmação FormSubmit
6. Pronto! Formulário ativo

---

## Problemas?

### Erro ao instalar
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Rotas não funcionam
Verificar que `vercel.json` existe.

### Build falha
```bash
npm run build
# Ver erros no terminal
```

---

## Próximos Passos

1. **Deploy** → `vercel --prod`
2. **Ativar formulário** → Primeiro envio
3. **Testar tudo** → Em dispositivos reais
4. **Domínio próprio** → Conectar no Vercel (opcional)
5. **Google Analytics** → Adicionar tracking (opcional)

---

## Links Importantes

- **Vercel Dashboard:** https://vercel.com/dashboard
- **FormSubmit.co:** https://formsubmit.co/
- **Unsplash (imagens):** https://unsplash.com/
- **Namecheap (domínios):** https://www.namecheap.com/

---

## Suporte

Leia documentação detalhada:
- **DEPLOY.md** - Guia completo de deploy
- **README.md** - Documentação técnica
- **PROJECT_SUMMARY.md** - Visão geral completa

---

**Boa sorte com o FS Web Design!** 🚀
