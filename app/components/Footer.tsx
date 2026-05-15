'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="border-t border-gray-200 py-12 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">Erick Meira</h3>
            <p className="text-sm text-secondary">
              Fullstack Developer & Creative Technologist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-primary mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'Trabalhos', 'Stack', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-secondary hover:text-primary transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-primary mb-4">Social</h4>
            <ul className="space-y-2">
              {[
                { name: 'GitHub', url: 'https://github.com/ErickSnt'},
                { name: 'LinkedIn', url: 'https://linkedin.com' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:text-primary transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-secondary">
            © {currentYear} Seu Nome. Todos os direitos reservados. • Feito com
            Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
