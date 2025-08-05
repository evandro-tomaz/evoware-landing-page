import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      position: "CEO, TechStart",
      company: "Startup de Tecnologia",
      content:
        "A Evoware transformou completamente nossa presença digital. Em 6 meses, aumentamos nosso faturamento em 300% com as estratégias implementadas.",
      rating: 5,
      image: "/professional-businessman-portrait.png",
    },
    {
      name: "Ana Costa",
      position: "Diretora de Marketing",
      company: "MedCare Clínicas",
      content:
        "Profissionais excepcionais! O site que desenvolveram é lindo e funcional. Nossos agendamentos online aumentaram 250% no primeiro mês.",
      rating: 5,
      image: "/professional-businesswoman-portrait.png",
    },
    {
      name: "Roberto Mendes",
      position: "Proprietário",
      company: "FitLife Academia",
      content:
        "A gestão das nossas redes sociais ficou impecável. O engajamento cresceu 500% e conseguimos atrair muito mais alunos para a academia.",
      rating: 5,
      image: "/fitness-gym-owner-portrait.png",
    },
    {
      name: "Mariana Santos",
      position: "Fundadora",
      company: "EcoStore",
      content:
        "O e-commerce que criaram superou todas as expectativas. Design moderno, rápido e com excelente taxa de conversão. Recomendo muito!",
      rating: 5,
      image: "/female-entrepreneur-portrait.png",
    },
    {
      name: "João Oliveira",
      position: "Gerente Comercial",
      company: "AutoPeças Pro",
      content:
        "As campanhas de tráfego pago trouxeram resultados incríveis. ROI de 400% no primeiro trimestre. Equipe muito competente e dedicada.",
      rating: 5,
      image: "/placeholder-46ykm.png",
    },
    {
      name: "Luciana Ferreira",
      position: "Diretora",
      company: "EduTech Online",
      content:
        "A plataforma educacional desenvolvida é fantástica. Interface intuitiva e recursos avançados que nossos alunos adoram usar.",
      rating: 5,
      image: "/education-director-portrait.png",
    },
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            O que nossos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">clientes</span>{" "}
            dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Depoimentos reais de clientes que transformaram seus negócios conosco
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <p className="text-blue-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <div className="flex -space-x-2 mr-4">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <Image
                  key={index}
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-gray-800"
                />
              ))}
            </div>
            <span className="text-gray-300">
              <span className="text-white font-semibold">150+</span> clientes satisfeitos
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
