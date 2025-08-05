import Link from "next/link"
import { Zap, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  const services = [
    "Desenvolvimento Web",
    "Marketing Digital",
    "Redes Sociais",
    "Tráfego Pago",
    "SEO & Analytics",
    "Automação",
  ]

  const company = ["Sobre Nós", "Portfólio", "Depoimentos", "Blog", "Carreira", "Contato"]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                <div className="absolute inset-0 bg-blue-500 blur-sm opacity-30"></div>
              </div>
              <span className="text-xl font-bold text-white">Evoware</span>
              <span className="text-sm text-blue-400 font-medium">Tecnologia</span>
            </Link>
            <p className="text-gray-300 max-w-sm">
              Transformamos negócios através de soluções digitais inovadoras e estratégias de marketing eficazes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contato@evoware.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+55 (18) 99100-7353</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Guararapes, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 sm:mt-8 sm:pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Evoware Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
