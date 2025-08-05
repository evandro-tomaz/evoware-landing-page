import Image from "next/image"
import { ExternalLink, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce TechStore",
      category: "Desenvolvimento Web",
      description: "Loja online completa com sistema de pagamento integrado e dashboard administrativo.",
      image: "/modern-ecommerce-dark.png",
      results: "+300% vendas online",
      tags: ["Next.js", "E-commerce", "SEO"],
    },
    {
      title: "Campanha Digital MedCare",
      category: "Marketing Digital",
      description: "Estratégia completa de marketing digital para clínica médica com foco em conversão.",
      image: "/modern-medical-website.png",
      results: "+250% leads qualificados",
      tags: ["Google Ads", "Landing Page", "CRO"],
    },
    {
      title: "Branding FitLife",
      category: "Redes Sociais",
      description: "Gestão completa de redes sociais para academia com crescimento orgânico.",
      image: "/fitness-gym-branding.png",
      results: "+500% engajamento",
      tags: ["Instagram", "Facebook", "Content"],
    },
    {
      title: "SaaS Dashboard Analytics",
      category: "Desenvolvimento Web",
      description: "Plataforma SaaS com dashboard avançado de analytics e relatórios em tempo real.",
      image: "/saas-dashboard-analytics-dark.png",
      results: "+180% retenção usuários",
      tags: ["React", "Dashboard", "Analytics"],
    },
    {
      title: "Campanha RestaurantePro",
      category: "Tráfego Pago",
      description: "Campanhas de tráfego pago para rede de restaurantes com foco em delivery.",
      image: "/restaurant-delivery-app.png",
      results: "+400% pedidos online",
      tags: ["Meta Ads", "Google Ads", "Delivery"],
    },
    {
      title: "Portal Educacional EduTech",
      category: "Desenvolvimento Web",
      description: "Plataforma educacional com sistema de cursos online e gamificação.",
      image: "/educational-platform-interface.png",
      results: "+1000 alunos ativos",
      tags: ["LMS", "Gamification", "Mobile"],
    },
  ]

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Nosso{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados extraordinários que alcançamos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex items-center mb-4">
                  <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold text-sm">{project.results}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Ver Detalhes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
