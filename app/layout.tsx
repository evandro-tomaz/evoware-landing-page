import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evoware Tecnologia - Transformando Negócios Digitalmente",
  description:
    "Desenvolvemos estratégias completas de marketing digital, criamos sites modernos e geramos tráfego qualificado para acelerar o crescimento do seu negócio.",
  keywords: "marketing digital, desenvolvimento web, tráfego pago, redes sociais, SEO, landing pages",
  authors: [{ name: "Evoware Tecnologia" }],
  openGraph: {
    title: "Evoware Tecnologia - Transformando Negócios Digitalmente",
    description: "Soluções completas de marketing digital e desenvolvimento web para impulsionar seu negócio.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evoware Tecnologia",
    description: "Transformando negócios através de soluções digitais inovadoras.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
