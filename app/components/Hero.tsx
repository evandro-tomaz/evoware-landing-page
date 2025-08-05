import { ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23374151' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Transformando negócios digitalmente
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Evolua seu
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              posicionamento{" "}
            </span>
            digital
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos estratégias completas de marketing digital, criamos sites modernos e geramos tráfego
            qualificado para acelerar o crescimento do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Cases
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400 text-sm sm:text-base">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm sm:text-base">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400 text-sm sm:text-base">Anos Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
