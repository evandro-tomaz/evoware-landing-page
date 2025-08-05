import { Globe, TrendingUp, Users, Zap, Target, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites modernos, responsivos e otimizados para conversão. Landing pages de alta performance.",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Máxima"],
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estratégias completas de marketing para aumentar sua presença online e gerar mais leads.",
      features: ["Google Ads", "Facebook Ads", "Email Marketing"],
    },
    {
      icon: Users,
      title: "Redes Sociais",
      description: "Gestão profissional das suas redes sociais com conteúdo estratégico e engajamento.",
      features: ["Gestão de Conteúdo", "Design Gráfico", "Análise de Métricas"],
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      description: "Campanhas de tráfego pago otimizadas para maximizar seu ROI e gerar resultados.",
      features: ["Google Ads", "Meta Ads", "LinkedIn Ads"],
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description: "Análise de dados e business intelligence para tomada de decisões estratégicas.",
      features: ["Google Analytics", "Dashboards", "Relatórios"],
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Automação de processos de marketing e vendas para otimizar sua operação.",
      features: ["CRM Integration", "Email Automation", "Lead Scoring"],
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas de marketing digital e desenvolvimento web para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl sm:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm sm:text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
