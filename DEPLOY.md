# Guia de Deploy - FS Web Design

## Pré-requisitos

- Node.js 18+ instalado
- Conta Vercel (gratuita)
- Git instalado (opcional, mas recomendado)

## Opção 1: Deploy Rápido via Vercel CLI (RECOMENDADO)

### Passo 1: Instalar dependências

```bash
cd fs-web-design
npm install
```

### Passo 2: Testar localmente

```bash
npm run dev
```

Abra http://localhost:3000 e verifique se tudo funciona.

### Passo 3: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 4: Login na Vercel

```bash
vercel login
```

Escolha seu método de autenticação (GitHub, GitLab, Bitbucket ou Email).

### Passo 5: Deploy

```bash
vercel
```

Responda às perguntas:
- Set up and deploy? **Y**
- Which scope? (escolha sua conta)
- Link to existing project? **N**
- What's your project's name? **fs-web-design**
- In which directory is your code located? **./**
- Want to override settings? **N**

O Vercel irá:
1. Detectar automaticamente que é um projeto Vite
2. Fazer upload dos ficheiros
3. Build do projeto
4. Deploy para produção
5. Fornecer URL (ex: fs-web-design.vercel.app)

### Passo 6: Deploy para produção

```bash
vercel --prod
```

---

## Opção 2: Deploy via GitHub + Vercel (PROFISSIONAL)

### Passo 1: Criar repositório GitHub

1. Ir a github.com e criar novo repositório
2. Nome: **fs-web-design**
3. Privado ou Público (sua escolha)

### Passo 2: Fazer push do código

```bash
cd fs-web-design
git init
git add .
git commit -m "Initial commit: FS Web Design Portfolio"
git branch -M main
git remote add origin https://github.com/SEU_USERNAME/fs-web-design.git
git push -u origin main
```

### Passo 3: Conectar com Vercel

1. Ir a [vercel.com/new](https://vercel.com/new)
2. Clicar em "Import Git Repository"
3. Selecionar seu repositório **fs-web-design**
4. Vercel detectará automaticamente as configurações
5. Clicar em **Deploy**

### Passo 4: Configurar domínio (opcional)

1. Nas configurações do projeto
2. Ir para "Domains"
3. Adicionar domínio personalizado

---

## Opção 3: Deploy Manual (Drag & Drop)

### Passo 1: Build local

```bash
cd fs-web-design
npm install
npm run build
```

Isto cria a pasta `dist/` com os ficheiros prontos para produção.

### Passo 2: Deploy via interface

1. Ir a [vercel.com/new](https://vercel.com/new)
2. Arrastar a pasta **dist/** para a interface
3. Vercel fará o upload e deploy automaticamente

---

## Configurações Importantes

### Email do Formulário de Contacto

O formulário usa FormSubmit.co. Para ativar:

1. Abrir `src/pages/Contact.jsx`
2. Linha ~15: Verificar email está correto:
```javascript
const response = await fetch('https://formsubmit.co/seth_dev_fs@proton.me', {
```

3. No primeiro envio, FormSubmit enviará email de confirmação
4. Clicar no link de confirmação para ativar

### WhatsApp Number

Verificar em 3 ficheiros que o número está correto:

1. `src/components/WhatsAppButton.jsx` - linha 4
2. `src/components/Footer.jsx` - linha 52
3. `src/pages/Contact.jsx` - linha 26

### Analytics (Opcional)

Para adicionar Google Analytics:

1. Ir a analytics.google.com
2. Criar propriedade
3. Copiar ID (G-XXXXXXXXXX)
4. Adicionar em `index.html` antes do </head>:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Domínio Personalizado

### Opção 1: Comprar domínio

Recomendações:
- **Namecheap** (€8-12/ano)
- **Porkbun** (€7-10/ano)
- **GoDaddy** (€10-15/ano)

Sugestões de domínio:
- fswebdesign.pt
- fabiosousa.pt
- fs-webdesign.com

### Opção 2: Conectar domínio à Vercel

1. No painel Vercel, ir para Settings > Domains
2. Adicionar domínio
3. Seguir instruções para configurar DNS:
   - **Tipo:** A
   - **Name:** @
   - **Value:** 76.76.21.21

   - **Tipo:** CNAME
   - **Name:** www
   - **Value:** cname.vercel-dns.com

4. Aguardar propagação DNS (até 48h, normalmente 10-30 min)

---

## Verificação Pós-Deploy

### Checklist:

- [ ] Site carrega corretamente
- [ ] Todas as páginas funcionam
- [ ] Navegação funciona
- [ ] Formulário de contacto envia emails
- [ ] WhatsApp button funciona
- [ ] Links para projetos funcionam
- [ ] Site é responsivo (testar mobile)
- [ ] Meta tags estão corretas (verificar com view-source)
- [ ] Sitemap acessível em /sitemap.xml
- [ ] Robots.txt acessível em /robots.txt

### Testar SEO:

1. Google PageSpeed Insights: https://pagespeed.web.dev/
2. Verificar meta tags: view-source:SEU_DOMINIO
3. Testar mobile: https://search.google.com/test/mobile-friendly

---

## Atualizações Futuras

### Via Vercel CLI:

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das alterações"
vercel --prod
```

### Via GitHub:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

Vercel fará deploy automaticamente a cada push!

---

## Problemas Comuns

### Build falha

```bash
# Limpar cache e reinstalar
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Rotas não funcionam (404)

Verificar que `vercel.json` existe com rewrites configurados.

### Formulário não envia

1. Verificar email em Contact.jsx
2. Confirmar email no FormSubmit.co
3. Verificar console do browser por erros

### WhatsApp não abre

Verificar formato do número: 351912004595 (sem espaços ou +)

---

## Suporte

Se tiver problemas:

1. Verificar logs no dashboard Vercel
2. Testar build local: `npm run build`
3. Verificar console do browser (F12)

---

## Custos

### Vercel (Hobby - GRÁTIS):
- ✅ Domínio .vercel.app incluído
- ✅ SSL automático
- ✅ 100GB bandwidth/mês
- ✅ Builds ilimitadas
- ✅ Deploy automático

### Custos opcionais:
- Domínio personalizado: €8-15/ano
- Vercel Pro (se precisar): $20/mês

---

**Pronto para dar vida ao FS Web Design!**

Para qualquer dúvida, consulte a documentação:
- Vercel: https://vercel.com/docs
- Vite: https://vitejs.dev/
- React: https://react.dev/
