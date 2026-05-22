'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'


interface SocialLink {
  name: string
  url: string
  icon: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ErickSnt',
    icon: '→',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/erick-meira-955104119',
    icon: '→',
  },

  {
    name: 'Email',
    url: 'https://mail.google.com/mail/u/0/?fs=1&to=ericksm703@hotmail.com',
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
      //className="py-20 px-6 bg-accent/5 "
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
    <Image
     src="/images/contact/WebsiteV2.webp"
     alt="Background"
     fill
     priority
     className="object-cover opacity-20 -z-10 pointer-events-none"
    />
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
                placeholder="Função em implementação, favor entrar em contato pelo e-mail 'ericksm703@hotmail.com' "
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
            className="flex flex-col justify-top space-y-4"
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
                  //className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-primary/100 hover:bg-accent/10 hover:border-primary transition group"
                  className="
                    flex items-center gap-4
                    p-4 rounded-xl
                    bg-gray-100 bg-card/80
                    backdrop-blur-md
                    border border-border
                    hover:border-primary
                    hover:bg-accent/10
                    hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
                    transition-all duration-300
                    group
                    "
               >
                  <span className="text-2xl text-primary">{link.icon}</span>
                  <div>
                    <p className="font-medium text-primary">{link.name}</p>

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
