import { Helmet } from 'react-helmet-async'
import { FiCheck, FiZap, FiLayers, FiCode } from 'react-icons/fi'
import ScrollAnimation from '../components/ScrollAnimation'
import { useState } from 'react'

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const pricingPlans = [
    {
      name: 'Landing Page',
      icon: <FiZap />,
      price: '€250',
      description: 'Perfeito para campanhas e captação de leads',
      features: [
        'Design moderno e responsivo',
        'Página única otimizada',
        'Formulário de contacto',
        'Integração WhatsApp',
        'SEO básico',
        'Revisões ilimitadas',
        'Entrega em 5-7 dias',
      ],
      highlighted: false,
    },
    {
      name: 'Website Completo',
      icon: <FiLayers />,
      price: '€350-500',
      description: 'Website multi-página para o seu negócio',
      features: [
        'Tudo do plano Landing Page',
        'Até 5 páginas personalizadas',
        'Blog/Notícias (opcional)',
        'Galeria de imagens',
        'Google Maps integrado',
        'SEO avançado',
        'Google Analytics',
        'Entrega em 10-14 dias',
      ],
      highlighted: true,
    },
    {
      name: 'Soluções Premium',
      icon: <FiCode />,
      price: '€600-1000+',
      description: 'Funcionalidades avançadas e personalizadas',
      features: [
        'Tudo do plano Website Completo',
        'E-commerce completo',
        'Sistema de reservas online',
        'Área de clientes/login',
        'Integração com APIs',
        'Painel administrativo',
        'Suporte técnico prioritário',
        'Entrega personalizada',
      ],
      highlighted: false,
    },
  ]

  const faqs = [
    {
      question: 'Quanto tempo demora a criar um website?',
      answer:
        'Depende da complexidade do projeto. Uma landing page simples pode estar pronta em 5-7 dias, enquanto um website completo pode demorar 10-14 dias. Projetos premium são avaliados caso a caso.',
    },
    {
      question: 'O que está incluído no preço?',
      answer:
        'O preço inclui design, desenvolvimento, otimização SEO, formulários de contacto, integração com redes sociais e todas as revisões necessárias até ficar satisfeito com o resultado.',
    },
    {
      question: 'Preciso de comprar hosting e domínio?',
      answer:
        'Sim, o hosting e domínio são da sua responsabilidade. Posso ajudar a escolher e configurar as melhores opções (recomendo Vercel para hosting gratuito e Namecheap para domínios).',
    },
    {
      question: 'O website será responsivo (mobile-friendly)?',
      answer:
        'Absolutamente! Todos os websites que desenvolvo são 100% responsivos e otimizados para todos os dispositivos - desktop, tablet e mobile.',
    },
    {
      question: 'Oferecem suporte após o lançamento?',
      answer:
        'Sim! Ofereço 30 dias de suporte gratuito após o lançamento para pequenos ajustes e correções. Para suporte contínuo, posso criar um plano de manutenção personalizado.',
    },
    {
      question: 'Posso fazer alterações ao website sozinho?',
      answer:
        'Sim, posso criar o website com um CMS simples ou fornecer documentação para que possa fazer alterações básicas de conteúdo. Para alterações mais complexas, estou sempre disponível.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Serviços | FS Web Design - Criação de Websites na Trofa</title>
        <meta
          name="description"
          content="Web design na Trofa: Landing Pages (€250), Websites Completos (€350-500), Soluções Premium (€600-1000). Atendimento em Braga e Porto."
        />
        <link rel="canonical" href="https://fswebdesign.vercel.app/servicos" />
      </Helmet>

      <section className="section-container pt-32">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Serviços & <span className="gradient-text">Preços</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Escolha o plano perfeito para o seu negócio. Todos os planos
              incluem design moderno, código de qualidade e suporte completo.
            </p>
          </div>
        </ScrollAnimation>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div
                className={`card h-full flex flex-col ${
                  plan.highlighted
                    ? 'border-accent-purple shadow-glow-purple scale-105'
                    : 'hover:border-accent-purple/50'
                } transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-accent-purple to-accent-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block self-start">
                    MAIS POPULAR
                  </div>
                )}

                <div className="text-accent-purple text-4xl mb-4">{plan.icon}</div>

                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {plan.name}
                </h3>

                <p className="text-text-secondary text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FiCheck className="text-accent-purple text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contacto"
                  className={
                    plan.highlighted ? 'btn-gradient w-full text-center' : 'btn-outline w-full text-center'
                  }
                >
                  Começar Projeto
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Services */}
        <ScrollAnimation delay={0.4}>
          <div className="card mb-24 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Serviços Adicionais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <FiCheck className="text-accent-purple text-xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-text-primary font-semibold mb-1">
                    Manutenção Mensal
                  </h4>
                  <p className="text-text-secondary text-sm">
                    A partir de €50/mês - Atualizações, backups e suporte contínuo
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheck className="text-accent-purple text-xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-text-primary font-semibold mb-1">
                    SEO Avançado
                  </h4>
                  <p className="text-text-secondary text-sm">
                    A partir de €150 - Otimização completa para motores de busca
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheck className="text-accent-purple text-xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-text-primary font-semibold mb-1">
                    Content Creation
                  </h4>
                  <p className="text-text-secondary text-sm">
                    A partir de €100 - Textos profissionais e otimizados
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheck className="text-accent-purple text-xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-text-primary font-semibold mb-1">
                    Migração de Website
                  </h4>
                  <p className="text-text-secondary text-sm">
                    A partir de €200 - Migração segura do seu website atual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* FAQ Section */}
        <ScrollAnimation delay={0.5}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left flex justify-between items-start"
                  >
                    <h4 className="text-text-primary font-semibold pr-4">
                      {faq.question}
                    </h4>
                    <span
                      className={`text-accent-purple text-2xl transition-transform ${
                        openFaq === index ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <p className="text-text-secondary mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Final CTA */}
        <ScrollAnimation delay={0.6}>
          <div className="card-hover text-center py-16 px-8 max-w-3xl mx-auto mt-24">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Ainda com dúvidas?
            </h3>
            <p className="text-text-secondary mb-8 text-lg">
              Entre em contacto para uma consulta gratuita e sem compromisso.
              Vamos discutir o seu projeto e encontrar a melhor solução.
            </p>
            <a href="/contacto" className="btn-gradient">
              Falar Comigo
            </a>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}

export default Services
