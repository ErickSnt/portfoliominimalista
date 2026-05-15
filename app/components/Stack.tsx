'use client'

import { motion } from 'framer-motion'

interface TechCategory {
  name: string
  skills: string[]
}

const techStack: TechCategory[] = [
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
      'Python',
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
      'AWS',
      'Vercel',
      'CI/CD',
      'Linux',
      'Nginx',
    ],
  },
  {
    name: 'Outras Tecnologias',
    skills: [
      'GraphQL',
      'REST APIs',
      'Prisma ORM',
      'Firebase',
      'Redis',
      'WebSockets',
      'Webpack',
      'Vite',
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.section
      id="stack"
      className="py-20 px-6"
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
            Ferramentas, linguagens e frameworks que utilizo para criar soluções
            modernas e escaláveis.
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {techStack.map((category) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="space-y-4"
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold text-primary">
                {category.name}
              </h3>

              {/* Skills Grid */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-accent/10 border border-accent/20 text-sm font-medium text-primary rounded-lg hover:bg-accent/20 transition cursor-default"
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
  )
}
