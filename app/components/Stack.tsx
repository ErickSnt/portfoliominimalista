'use client'

import { motion } from 'framer-motion'

interface TechCategory {
  name: string
  skills: string[]
}


const techStack: TechCategory[] = [
  {
    name: 'Formação Acadêmica',
    skills: [
      'Mestrado em Ciência da Computação, linha de pesquisa em Computação Gráfica - UFBA (Cursando)',
      'Análise e Desenvolvimento de Sistemas - Estácio (2022-2025',
      'Bacharelado em Artes Plásticas - UFBA (2015-2021)',
      'Mobilidade Acadêmica - Universidade do Porto, Portugal (2019-2020)',
    ],
  },
    {
    name: 'Fullstack Developer',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'TailwindCSS',
      'Git',
      'Python',
      'Django',
      'Flask',
      
    ],
  },
  {
    name: 'Mobile & Desktop',
    skills: [
      'React Native',
      'Expo',
      'MAUI',
      'C#',
      '.NET',
      'Swift',
      'Kotlin',
    ],
  },
  {
    name: 'Game Development',
    skills: [
      'Unity',
      'C#',
      'Godot Engine',
      'Blender',
      'Unreal Engine',
    ],
  },
  {
    name: 'Design & 3D',
    skills: [
      'Photoshop',
      'Blender',
      'Figma',
      'Z Brush',
      'Substance Painter',
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      'GitHub',
      'GitLab',
      'Docker',
      'Vercel',
      'Linux',
      'Git',
      
    ],
  },
]

export default function Stack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

return (
  <motion.section
    id="stack"
    className="py-20 px-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={containerVariants}
  >
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <motion.div
        variants={categoryVariants}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Stack Tecnológico
        </h2>

        <p className="text-lg text-secondary max-w-2xl">
          Ferramentas, linguagens e frameworks que utilizo para criar
          soluções modernas e escaláveis.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        variants={containerVariants}
      >
        {techStack.map((category) => (
          <motion.div
            key={category.name}
            variants={categoryVariants}
            className={
              category.name === 'Formação Acadêmica'
                ? 'space-y-7 md:col-span-2 lg:col-span-3'
                : 'space-y-7'
            }
          >

            {/* Category Title */}
            <h3 className="text-xl font-bold text-primary tracking-tight">
              {category.name}
            </h3>

            {/* Skills */}
            <motion.div
              className={
                category.name === 'Formação Acadêmica'
                  ? 'flex flex-col gap-6'
                  : 'flex flex-wrap gap-4'
              }
              variants={containerVariants}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  whileHover={{ scale: 1.03 }}
                  className={
                    category.name === 'Formação Acadêmica'
                      ? `
                        text-base
                        leading-relaxed
                        tracking-wide
                        text-primary
                        border-l-2
                        border-accent
                        pl-5
                        py-1
                        opacity-90
                        hover:opacity-100
                        transition
                      `
                      : `
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-primary
                        rounded-lg
                        bg-accent/5
                        hover:bg-accent/20
                        transition
                        cursor-default
                      `
                  }
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  </motion.section>
)}
