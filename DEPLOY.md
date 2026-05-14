# 🚀 Guia Completo de Deploy na Vercel

## ⚡ Por que Vercel?

- ✅ Deploy automático a cada push no GitHub
- ✅ Performance otimizada globalmente
- ✅ SSL/HTTPS automático
- ✅ Domínio grátis (.vercel.app)
- ✅ Monitoramento de performance
- ✅ Preview builds para PRs
- ✅ Serverless Functions built-in

---

## 📋 Pré-requisitos

- [ ] Projeto pronto no GitHub
- [ ] Conta no GitHub
- [ ] Conta na Vercel (gratuita)
- [ ] Next.js configurado corretamente

---

## 🔧 Configuração Local (Antes de Deploy)

### 1. Inicializar repositório Git

```bash
# Na pasta do projeto
git init
git add .
git commit -m "Initial commit: Portfólio minimalista"
```

### 2. Verificar configurações

**Verificar `next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Adicione se necessário:
  // i18n: { locales: ['pt-BR'], defaultLocale: 'pt-BR' },
}
module.exports = nextConfig
```

**Verificar `package.json`:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 3. Build local para testar

```bash
npm run build
npm start
```

Visitar `http://localhost:3000` e verificar se tudo funciona.

---

## 📤 Upload para GitHub

### Opção A: Primeiro commit (Recomendado)

```bash
# Criar repositório no GitHub primeiro
# https://github.com/new

# Depois clonar ou conectar
git remote add origin https://github.com/seu-usuario/portfolio-minimalista.git
git branch -M main
git push -u origin main
```

### Opção B: GitHub CLI (Se tiver instalado)

```bash
gh repo create portfolio-minimalista --public --source=. --remote=origin
git push -u origin main
```

**Verificar:**
```bash
git remote -v
# origin  https://github.com/seu-usuario/portfolio-minimalista.git (fetch)
# origin  https://github.com/seu-usuario/portfolio-minimalista.git (push)
```

---

## 🌐 Deploy na Vercel

### Passo 1: Acessar Vercel

1. Ir para [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** (ou **"Sign In"** se já tem conta)
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel a acessar sua conta GitHub

### Passo 2: Criar Novo Projeto

1. Clique em **"New Project"**
2. Procure por `portfolio-minimalista`
3. Clique em **"Import"**

### Passo 3: Configurar Projeto

**Framework Preset:**
- ✅ Vercel detecta automaticamente Next.js
- Não precisa alterar nada

**Build and Output Settings:**
- Build Command: `next build` (padrão)
- Output Directory: `.next` (padrão)
- Install Command: `npm install` (padrão)

**Environment Variables:**
- Se não tiver variáveis, deixe em branco
- Se tiver (API keys, etc), adicione aqui

### Passo 4: Deploy

1. Clique em **"Deploy"**
2. Aguarde a build completar (~2-3 minutos)
3. Veja o link do seu portfólio! 🎉

---

## 🔗 Domínio Personalizado

### Opção A: Usar Vercel Domain (Recomendado para começar)

1. Na dashboard do projeto
2. Vá para **"Settings"** → **"Domains"**
3. Vercel fornece domínio automático em `.vercel.app`

### Opção B: Conectar Domínio Próprio

#### Se comprou em Vercel:

1. **"Settings"** → **"Domains"**
2. Clique em **"Add"**
3. Digite seu domínio
4. Siga as instruções

#### Se comprou em outra registradora (Registro.br, GoDaddy, etc):

**Passo 1: Configurar DNS**

Na Vercel:
1. **Settings** → **Domains** → **Add**
2. Digite seu domínio
3. Copie os **Nameservers** da Vercel:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```

No seu registrador:
1. Acesse o painel de DNS
2. Altere os Nameservers para os da Vercel
3. Aguarde propagação (até 48h, geralmente 1-2h)

**Passo 2: Verificar**

```bash
# Terminal
nslookup seu-dominio.com
# Ou use: https://mxtoolbox.com
```

---

## ⚙️ Configurações Pós-Deploy

### 1. Verificar Certificado SSL

✅ Vercel configura automaticamente HTTPS

Visitar `https://seu-dominio.com` (com HTTPS)

### 2. Redirects e Headers (Opcional)

Edite `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge'
          },
        ],
      },
    ]
  },
}
module.exports = nextConfig
```

### 3. Analytics (Opcional)

Na dashboard Vercel:
1. **Analytics** → **Enable Web Analytics**
2. Vercel rastreia performance automaticamente

### 4. Sitemap e Robots (Opcional)

Crie `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seu-dominio.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://seu-dominio.com#work',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
```

---

## 🔄 Workflow: Fazer Mudanças

Depois de deployado, o workflow é simples:

### 1. Fazer mudanças localmente

```bash
# Edite os arquivos
# Ex: app/components/Hero.tsx
```

### 2. Testar localmente

```bash
npm run dev
# Verificar em http://localhost:3000
```

### 3. Commit e Push

```bash
git add .
git commit -m "Update: Nova descrição do projeto"
git push origin main
```

### 4. Deploy automático

✅ Vercel detecta o push automaticamente  
✅ Inicia build  
✅ Deploy em ~2-3 minutos  
✅ Seu portfólio atualizado!

---

## 🧪 Preview Deployment

Vercel cria preview URLs para cada branch:

```bash
# Criar nova branch para feature
git checkout -b feature/nova-secao

# Fazer mudanças
# ...

# Push
git push origin feature/nova-secao

# Vercel cria URL de preview automaticamente
# Você vê no GitHub: "Visit Preview" button
```

---

## 📊 Monitoramento

### Dashboard Vercel

1. Acesse sua project na Vercel
2. **Analytics** → Veja:
   - Visitantes únicos
   - Requisições
   - Performance
   - Erros

### Build Logs

Se build falhar:
1. Vá para **"Deployments"**
2. Clique no deployment falhado
3. Veja logs detalhados
4. Corrija e faça novo push

---

## 🆘 Troubleshooting Deploy

| Problema | Solução |
|----------|---------|
| Build falha | Verificar logs em Deployments |
| Página branca | Testar `npm run build` localmente |
| Domínio não resolve | Aguardar propagação DNS (48h) |
| Erro 404 em rotas | Verificar estrutura de pastas |
| Lento | Verificar Analytics e otimizar |

---

## 🔒 Segurança

### Boas práticas pós-deploy:

1. **Não commitar secrets**
   - Use `.env.local` (não versionado)
   - Use Environment Variables no Vercel

2. **Exemplo:** Se usar API key:

```typescript
// ❌ ERRADO
const API_KEY = "sk_live_123456789"

// ✅ CORRETO
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
```

No Vercel:
- Settings → Environment Variables
- Adicione: `NEXT_PUBLIC_API_KEY=sk_live_123456789`

3. **Proteção de rota (Opcional)**

Se quiser proteger com senha:

```bash
npm install next-auth
```

---

## 📈 Próximos Passos

- [ ] Deploy inicial na Vercel
- [ ] Configurar domínio personalizado
- [ ] Adicionar Analytics
- [ ] Monitorar performance
- [ ] Fazer backup do código
- [ ] Configurar notificações (opcional)

---

## 🎯 Checklist Final

- [ ] Repositório GitHub criado
- [ ] Código sincronizado no GitHub
- [ ] Conta Vercel criada
- [ ] Projeto importado na Vercel
- [ ] Build completo com sucesso
- [ ] Site acessível em domínio
- [ ] SSL/HTTPS funcionando
- [ ] Responsividade verificada
- [ ] Todos os links funcionam
- [ ] Analytics configurado (opcional)

---

## 💬 Dúvidas Frequentes

**P: Quanto custa o deploy?**  
R: Vercel é gratuito para projetos pessoais!

**P: Quanto tempo leva para fazer deploy?**  
R: Geralmente 2-5 minutos da hora do push

**P: Posso usar banco de dados?**  
R: Sim! Vercel suporta Serverless Functions + Firebase, MongoDB, PostgreSQL, etc

**P: Como configure variáveis de ambiente?**  
R: Settings → Environment Variables na dashboard Vercel

**P: Como vejo logs de erro?**  
R: Deployments → clique no deploy → veja logs

---

**Versão:** 1.0.0  
**Última atualização:** 2024  
**Dúvidas?** Acesse [vercel.com/docs](https://vercel.com/docs)
