'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Plataforma SaaS E-Commerce',
    description:
      'Plataforma de e-commerce full-featured com painel administrativo, integração de pagamentos e análise de vendas em tempo real.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    link: 'https://exemplo.com',
    github: 'https://github.com/usuario/saas-ecommerce',
  },
  {
    id: 2,
    title: 'Aplicativo Mobile React Native',
    description:
      'Aplicativo mobile nativo para iOS e Android com autenticação, geolocalização e sincronização em tempo real com backend.',
    tags: ['React Native', 'Firebase', 'Expo', 'Redux'],
    link: 'https://exemplo.com',
    github: 'https://github.com/usuario/mobile-app',
  },
  {
    id: 3,
    title: 'Engine 3D Interativa',
    description:
      'Mecanismo de jogo 3D com física realista, sistema de partículas e renderização otimizada para VR.',
    tags: ['Unity', 'C#', 'HLSL', 'Blender'],
    link: 'https://exemplo.com',
    github: 'https://github.com/usuario/3d-engine',
  },
]

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.section
      id="work"
      className="py-20 px-6 bg-accent/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={cardVariants}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Trabalhos em Destaque
          </h2>
          <p className="text-lg text-secondary max-w-2xl">
            Seleção de projetos que demonstram minha experiência em full stack
            development, design e otimização de performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className="h-full bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                {/* Projeto Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-xs font-medium text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white rounded-lg transition"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
