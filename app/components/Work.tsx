'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  images: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Criação de Cenários Gamificados para a ONEE',
    description:
      'Criação de Cenário imersivo em VR para a Olimpíada Nacional de Eficiência Energética, utilizando Unity Engine, modelagem 3D e computação gráfica para uma experiência interativa e educativa.',
    tags: ['Unity Engine', 'Graphic Computation', 'C#', '.NET', 'Blender'],
    link: 'https://ericksm.artstation.com/',
    images: [
      '/images/work/TabuleiroONEE.jpg',
      '/images/work/Tabuleiro2ONEE.jpg',
      '/images/work/UI.jpg',
    ],
  },

  {
    id: 2,
    title: 'Criação de Avatares ONC',
    description:
      'Criação dos avatares para a campanha da Olimpiada Nacional de Ciências no ano de 2023 e 2024.',
    tags: ['React Native', 'Firebase', 'Expo', 'Redux'],
    link: 'https://exemplo.com',
    images: [
      '/images/work/cartaz-onc-2023-2.webp',
      '/images/work/ONC2023.jpeg',
      '/images/work/V2_cartaz-onc-2024 (1).jpg',
      '/images/work/ONC2024.jpg',
    ],
  },

  { 
    id: 3,
    title: 'UI Jogos Avaliativos OBAdm em 2024',
    description:
      'Mecanismo 3D com física realista, partículas e renderização otimizada para VR.',
    tags: ['Unity', 'Gdscript', 'HLSL', 'Photoshop','Godot Engine'],
    link: 'https://exemplo.com',
    images: [
      '/images/work/V2_OBADCellMockup.jpg',
      '/images/work/V2_AdmgamesMockupV2.jpg',
      '/images/work/V2_AnaliseEmpresarialMockup_v2.jpg',
      '/images/work/V2_BrancoTabuleiroSustentavelMockup (1).jpg',
    ],
  },
    { 
    id: 4,
    title: 'Imersão Gamificada ONC SNCT 2023/2024/2025',
    description:
      'Atividade em gamificada em realidade virtual apresentada na Semana Nacional de Ciência e Tecnologia nas edições de 2023, 2024 e 2025. Apresentado no stand da ONC. ',
    tags: ['Unity', 'Gdscript', 'HLSL', 'Photoshop','Godot Engine'],
    link: 'https://exemplo.com',
    images: [
      '/images/work/ONCgamification.jpg',
      '/images/work/ONC_Game_0000_Image Sequence_007_0000.jpg',
      '/images/work/ONC_Game_0001_Image Sequence_005_0000.jpg',
      '/images/work/ONC_Game_0002_Layer 0.jpg',
    ],
  },
      { 
    id: 5,
    title: 'UI Jogos Avaliativos OBAdm em 2024',
    description:
      'Mecanismo 3D com física realista, partículas e renderização otimizada para VR.',
    tags: ['Unity', 'Gdscript', 'HLSL', 'Photoshop','Godot Engine'],
    link: 'https://exemplo.com',
    images: [
      '/images/work/project3.jpg',
      '/images/work/OBAdm.jpg',
      '/images/work/project2.jpg',
    ],
  },
      { 
    id: 6,
    title: 'UI Jogos Avaliativos OBAdm em 2024',
    description:
      'Mecanismo 3D com física realista, partículas e renderização otimizada para VR.',
    tags: ['Unity', 'Gdscript', 'HLSL', 'Photoshop','Godot Engine'],
    link: 'https://exemplo.com',
    images: [
      '/images/work/project3.jpg',
      '/images/work/OBAdm.jpg',
      '/images/work/project2.jpg',
    ],
  },
]

export default function Work() {
  const [currentImages, setCurrentImages] = useState<number[]>(
    projects.map(() => 0)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((current, index) => {
          const totalImages = projects[index].images.length
          return (current + 1) % totalImages
        })
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
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
            Projetos que unem tecnologia, arte digital e experiências
            interativas contemporâneas.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500">

                {/* Carrosel */}
                <div className="relative w-full h-56 overflow-hidden">

                  <motion.div
                    key={currentImages[projectIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        project.images[currentImages[projectIndex]]
                      }
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentImages[projectIndex] === index
                            ? 'bg-white w-6'
                            : 'bg-white/50 w-2'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">

                  <h3 className="text-xl font-bold text-primary mb-3">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent/10 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                    >
                      Ver Projeto
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}