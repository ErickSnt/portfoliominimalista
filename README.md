# Portfólio Minimalista - Fullstack Developer

Um portfólio moderno, minimalista e responsivo construído com **Next.js**, **TailwindCSS** e **Framer Motion**.

## 🎯 Características

- ✨ Design minimalista e clean
- ⚡ Performance otimizada (Next.js 14)
- 🎨 Animações suaves com Framer Motion
- 📱 Totalmente responsivo (Mobile-first)
- 🔍 SEO otimizado
- 🎯 Scroll suave entre seções
- 🚀 Pronto para deploy na Vercel

## 📂 Estrutura do Projeto

```
portfolio-minimalista/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Navegação com menu mobile
│   │   ├── Hero.tsx          # Seção hero com apresentação
│   │   ├── Work.tsx          # Grid de 3 projetos principais
│   │   ├── Stack.tsx         # Stack tecnológico categorizado
│   │   ├── Contact.tsx       # Formulário de contato + redes
│   │   └── Footer.tsx        # Footer minimalista
│   ├── layout.tsx            # Layout root com metadados
│   ├── page.tsx              # Página principal
│   └── globals.css           # Estilos globais
├── package.json              # Dependências
├── tailwind.config.js        # Configuração Tailwind
├── tsconfig.json             # Configuração TypeScript
├── postcss.config.js         # Configuração PostCSS
├── next.config.js            # Configuração Next.js
└── README.md
```

## 🚀 Como Começar

### 1. Clonar o repositório

```bash
git clone https://github.com/usuario/portfolio-minimalista.git
cd portfolio-minimalista
```

### 2. Instalar dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Executar em desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador.

### 4. Build para produção

```bash
npm run build
npm start
```

## 🎨 Customização

### Alterar dados pessoais

Edite os seguintes arquivos:

- **Hero (Nome, profissão, frase)**: `app/components/Hero.tsx`
- **Projetos**: `app/components/Work.tsx`
- **Stack tecnológico**: `app/components/Stack.tsx`
- **Links sociais**: `app/components/Contact.tsx` e `app/components/Footer.tsx`

### Alterar cores

Modifique `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#000000',      // Cor principal
      secondary: '#666666',    // Cor secundária
      accent: '#1f1f1f',       // Cor de destaque
    },
  },
}
```

### Adicionar seções

1. Crie um novo componente em `app/components/`
2. Importe em `app/page.tsx`
3. Adicione link na navegação em `Navigation.tsx`

## 📦 Dependências

- **Next.js 14**: Framework React com otimizações automáticas
- **React 18**: Biblioteca UI
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Biblioteca de animações
- **TypeScript**: Tipagem estática

## 🌐 Deploy na Vercel

### 1. Push no GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Conectar à Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Configure conforme necessário (padrão já funciona)
5. Clique em "Deploy"

### Variáveis de ambiente (se necessário)

Se usar email ou APIs, adicione em Project Settings > Environment Variables

## 🔧 Otimizações de Performance

- ✅ Code splitting automático
- ✅ Image optimization
- ✅ CSS minificado
- ✅ JavaScript bundling otimizado
- ✅ Lazy loading de componentes
- ✅ Font optimization

## 📱 Responsividade

- Desktop: 1920px e acima
- Tablet: 768px - 1919px
- Mobile: até 767px

Testado em todos os breakpoints Tailwind.

## 🔍 SEO

- Metadados otimizados
- Open Graph tags
- Twitter Card
- Schema markup ready
- Sitemap automático (Next.js)
- Robots.txt ready

## ✏️ Editar conteúdo

### Metadados (Title, Description)

Edite `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Seu Nome - Profissão',
  description: 'Sua descrição...',
  // ... outros metadados
}
```

### Adicionar projetos

Em `app/components/Work.tsx`, modifique o array `projects`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição detalhada...',
    tags: ['Tech1', 'Tech2'],
    link: 'https://demo.com',
    github: 'https://github.com/user/repo',
  },
  // ... mais projetos
]
```

### Adicionar skills

Em `app/components/Stack.tsx`, modifique `techStack`:

```typescript
const techStack: TechCategory[] = [
  {
    name: 'Categoria',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
  // ... mais categorias
]
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um fork
2. Criar uma branch (`git checkout -b feature/improvement`)
3. Fazer commit das mudanças (`git commit -m 'Add improvement'`)
4. Push para a branch (`git push origin feature/improvement`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 💡 Dicas

- Use a navegação fixa para fácil acesso
- Customize as cores para refletir sua marca pessoal
- Mantenha o design minimalista para máxima legibilidade
- Teste em diferentes dispositivos antes de publicar
- Use imagens de alta qualidade para projetos

## 🐛 Problemas Comuns

**Porta 3000 já está em uso:**
```bash
npx kill-port 3000
npm run dev
```

**Erros de build:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Componentes não aparecem:**
- Certifique-se de que `'use client'` está no topo do arquivo
- Verifique os imports

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

## 🎉 Próximos Passos

1. ✏️ Edite `app/layout.tsx` com suas informações
2. 🖼️ Customize cores em `tailwind.config.js`
3. 📝 Adicione seus projetos em `Work.tsx`
4. 🛠️ Atualize seu stack em `Stack.tsx`
5. 📧 Configure formulário de contato
6. 🚀 Deploy na Vercel

---

Feito com ❤️ e ⚡ por um desenvolvedor como você.
