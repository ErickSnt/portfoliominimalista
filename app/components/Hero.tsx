'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="hero"
      //className="relative min-h-screen flex items-center justify-center px-6 py-20"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
    <Image
     src="/images/hero/Viewport.webp"
     alt="Background"
     fill
     priority
     className="object-cover opacity-60 -z-10 pointer-events-none"
  />
      <div className="max-w-4xl w-full text-center">
        {/* Nome */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-4 text-primary text-glow-neon"
        >
          Erick Meira
        </motion.h1>

        {/* Profissão */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-secondary mb-6"
        >
          Fullstack Developer e Artista 3D
        
        </motion.p>

        {/* Frase forte */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Transformando código em experiências digitais que unem tecnologia, criatividade e inovação.
Especializado em criar aplicações modernas com foco em IA, performance e design interativo.

        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-80 transition"
          >
            Ver Trabalhos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition"
          >
            Entre em Contato
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.svg
            className="w-6 h-6 text-secondary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </motion.svg>
        </motion.div>
      </div>
    </motion.section>
  )
}
