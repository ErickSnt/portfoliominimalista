'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SocialLink {
  name: string
  url: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/usuario',
    icon: '→',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/usuario',
    icon: '→',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/usuario',
    icon: '→',
  },
  {
    name: 'Email',
    url: 'mailto:seu.email@exemplo.com',
    icon: '✉',
  },
]

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-accent/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Estou sempre aberto para novos projetos, colaborações e oportunidades.
            Fique à vontade para entrar em contato.
          </p>
        </motion.div>

        {/* Contact Form & Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {/* Form */}
          <motion.form
            variants={itemVariants}
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              // Adicionar lógica de envio de email
            }}
          >
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Nome
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                placeholder="Seu nome"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Mensagem
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition h-32 resize-none"
                placeholder="Sua mensagem..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-80 transition"
            >
              Enviar Mensagem
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center space-y-4"
          >
            <p className="text-secondary text-sm uppercase tracking-wider mb-6">
              Ou conecte-se através de:
            </p>

            <motion.div
              className="space-y-3"
              variants={containerVariants}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-accent/5 hover:border-primary transition group"
                >
                  <span className="text-2xl text-primary">{link.icon}</span>
                  <div>
                    <p className="font-medium text-primary">{link.name}</p>
                    <p className="text-sm text-secondary group-hover:text-primary transition">
                      Abrir →
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
