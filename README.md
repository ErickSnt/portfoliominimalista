Portfólio Minimalista

Um portfólio simples, rápido e responsivo feito com Next.js, Tailwind CSS e Framer Motion.

A ideia desse projeto foi criar um layout direto ao ponto, com foco em apresentação pessoal, projetos e experiência, sem excesso de elementos visuais.

Sobre o projeto:
```
-Layout minimalista
-Navegação suave entre seções
-Responsividade para mobile, tablet e desktop
-Animações leves
-Estrutura organizada para personalização
-SEO básico configurado
-Pronto para deploy na Vercel
-Estrutura do projeto

```
Estrutura:
```
portfolio-minimalista/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Work.tsx
│   │   ├── Stack.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│     └── Images/
│        ├── hero
│        ├── work
│        └── contact
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
├── next.config.js
└── README.md
```
```

Rodando o projeto
-Clonar o repositório
-git clone https://github.com/usuario/portfolio-minimalista.git
-cd portfolio-minimalista
-Instalar dependências
-npm install

ou

-yarn install
-Iniciar ambiente de desenvolvimento
-npm run dev
```
```
Depois disso, abra:

http://localhost:3000
Build de produção
npm run build
npm start
Personalização
Alterar informações pessoais

```
Os dados principais ficam nesses arquivos:
```


Hero.tsx → nome, descrição e apresentação
Work.tsx → projetos
Stack.tsx → tecnologias
Contact.tsx → contato e redes sociais

```
Alterar cores
```

No arquivo tailwind.config.js:

theme: {
  extend: {
    colors: {
      primary: '#000000',
      secondary: '#666666',
      accent: '#1f1f1f',
    },
  },
}

```
O projeto já possui:

```
-Metadata básica
-Open Graph
-Estrutura preparada para sitemap
-Robots.txt
-Configuração inicial para compartilhamento social
-Editando os projetos
```
```
Em Work.tsx:
```
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição do projeto',
    tags: ['Next.js', 'Tailwind'],
    link: 'https://demo.com',
    github: 'https://github.com/user/repo',
  },
]
```