import { Helmet } from 'react-helmet-async'
import { FiMapPin, FiCheck } from 'react-icons/fi'
import ScrollAnimation from '../components/ScrollAnimation'

const Areas = () => {
  const areas = [
    {
      city: 'Vila Nova de Famalicão',
      description: 'Web designer em Famalicão especializado em websites para restaurantes, barbearias, salões, ginásios e clínicas. Atendimento personalizado e presencial se necessário.',
      services: ['Websites profissionais', 'Otimização SEO', 'Manutenção mensal', 'Consultoria presencial'],
      highlight: true
    },
    {
      city: 'Santo Tirso',
      description: 'Criação de sites profissionais em Santo Tirso. Desenvolvimento web moderno para negócios locais que querem destacar-se online.',
      services: ['Design moderno', 'Performance otimizada', 'Mobile-first', 'Suporte técnico']
    },
    {
      city: 'Trofa',
      description: 'Websites responsivos para empresas na Trofa. Design personalizado e performance otimizada para conversão de visitantes em clientes.',
      services: ['Sites responsivos', 'Integração WhatsApp', 'Galeria de fotos', 'Formulários contacto']
    },
    {
      city: 'Maia',
      description: 'Serviços de web design na Maia. Sites profissionais com SEO incluído para aparecer no Google e gerar mais clientes.',
      services: ['SEO local', 'Google My Business', 'Redes sociais', 'Analytics']
    },
    {
      city: 'Vila do Conde',
      description: 'Desenvolvimento web profissional em Vila do Conde. Websites que convertem e trazem resultados reais para o seu negócio.',
      services: ['Landing pages', 'E-commerce básico', 'Agendamento online', 'Pagamentos']
    },
    {
      city: 'Póvoa de Varzim',
      description: 'Criação de websites na Póvoa de Varzim. Soluções digitais para restaurantes, turismo, comércio local e serviços.',
      services: ['Multi-idioma', 'Reservas online', 'Portfolio visual', 'Blog integrado']
    },
    {
      city: 'Guimarães',
      description: 'Web design em Guimarães com foco em performance e resultados. Sites modernos que destacam a sua marca online.',
      services: ['Identidade visual', 'Content marketing', 'Email marketing', 'Automações']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Áreas Servidas | Web Design em Famalicão, Santo Tirso, Trofa e Maia</title>
        <meta
          name="description"
          content="FS Web Design serve Vila Nova de Famalicão, Santo Tirso, Trofa, Maia, Vila do Conde, Póvoa de Varzim e Guimarães. Websites profissionais para negócios locais."
        />
        <meta name="keywords" content="web design famalicão, web designer santo tirso, websites trofa, criação sites maia, desenvolvimento web vila do conde" />
        <link rel="canonical" href="https://fswebdesign.vercel.app/areas" />
      </Helmet>

      <section className="section-container pt-32">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Áreas <span className="gradient-text">Servidas</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Serviços de web design profissional no distrito de Braga e Porto.
              Atendimento personalizado para negócios locais.
            </p>
          </div>
        </ScrollAnimation>

        {/* Intro */}
        <ScrollAnimation delay={0.1}>
          <div className="card mb-16 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-lg flex items-center justify-center">
                  <FiMapPin className="text-2xl text-accent-purple" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  Atendimento Local Personalizado
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  Oferecemos serviços de criação de websites profissionais em{' '}
                  <strong className="text-text-primary">Vila Nova de Famalicão</strong> e arredores.
                  Com presença local, podemos marcar reuniões presenciais, conhecer pessoalmente o seu negócio
                  e oferecer um serviço verdadeiramente personalizado.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {areas.map((area, index) => (
            <ScrollAnimation key={index} delay={0.1 + index * 0.05}>
              <div className={`card-hover h-full ${area.highlight ? 'ring-2 ring-accent-purple' : ''}`}>
                {area.highlight && (
                  <div className="inline-block px-3 py-1 bg-accent-purple text-white text-sm font-medium rounded-full mb-4">
                    Sede Principal
                  </div>
                )}

                <h3 className="text-2xl font-bold text-text-primary mb-3 flex items-center">
                  <FiMapPin className="text-accent-purple mr-2" />
                  {area.city}
                </h3>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {area.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-text-primary">Serviços incluem:</p>
                  <ul className="space-y-1">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-text-secondary flex items-center">
                        <FiCheck className="text-accent-gold mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Other Areas */}
        <ScrollAnimation delay={0.5}>
          <div className="card max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Outras Zonas
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Também atendemos clientes em outras zonas do distrito de{' '}
              <strong className="text-text-primary">Braga</strong> e{' '}
              <strong className="text-text-primary">Porto</strong>.
              Se o seu negócio está noutra localidade, não hesite em contactar!
            </p>
            <p className="text-sm text-text-secondary">
              Trabalhamos remotamente com eficiência e também oferecemos reuniões presenciais
              numa área alargada conforme necessário.
            </p>
          </div>
        </ScrollAnimation>

        {/* Why Local */}
        <ScrollAnimation delay={0.6}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-8">
              Porquê Escolher um Web Designer <span className="gradient-text">Local</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="font-bold text-text-primary mb-2">Atendimento Pessoal</h4>
                <p className="text-sm text-text-secondary">
                  Reuniões presenciais, conhecimento do mercado local e comunicação direta.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-bold text-text-primary mb-2">Resposta Rápida</h4>
                <p className="text-sm text-text-secondary">
                  Suporte local com resposta em português e no mesmo fuso horário.
                </p>
              </div>

              <div className="card text-center">
                <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="font-bold text-text-primary mb-2">SEO Local</h4>
                <p className="text-sm text-text-secondary">
                  Otimização para aparecer em buscas locais do Google na sua zona.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation delay={0.7}>
          <div className="card-hover text-center py-16 px-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Pronto para Ter um Website Profissional?
            </h3>
            <p className="text-text-secondary mb-8 text-lg">
              Contacte-nos para um orçamento gratuito e sem compromisso.
              Resposta em 24h!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/351912004595?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20website"
                className="btn-gradient"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: 912 004 595
              </a>
              <a href="/contacto" className="btn-outline">
                Formulário de Contacto
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}

export default Areas
