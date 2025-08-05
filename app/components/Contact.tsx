"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@evoware.tech",
      link: "mailto:contato@evoware.tech",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999",
      link: "tel:+5511999999999",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Vamos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              conversar
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Entre em contato conosco e receba um orçamento personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Solicite seu orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-300">Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 p-2 h-10 sm:p-3 sm:h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 p-2 h-10 sm:p-3 sm:h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Seu telefone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 p-2 h-10 sm:p-3 sm:h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Sua empresa"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 p-2 h-10 sm:p-3 sm:h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Conte-nos sobre seu projeto..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Entre em contato</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Estamos aqui para ajudar você a alcançar seus objetivos digitais. Nossa equipe está pronta para discutir
                seu projeto e criar uma estratégia personalizada.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <a href={info.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-2">Horário de Atendimento</h4>
              <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
              <p className="text-gray-300">Sábado: 9h às 12h</p>
              <p className="text-blue-400 mt-2 font-medium">Resposta em até 2 horas úteis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
