import { Helmet } from 'react-helmet-async'
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import ScrollAnimation from '../components/ScrollAnimation'
import { useState } from 'react'

const Contact = () => {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formsubmit.co/seth_dev_fs@proton.me', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
        setTimeout(() => setFormStatus(''), 5000)
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      setFormStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+351 912 004 595',
      link: 'https://wa.me/351912004595',
      color: 'text-[#25D366]',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'seth_dev_fs@proton.me',
      link: 'mailto:seth_dev_fs@proton.me',
      color: 'text-accent-purple',
    },
    {
      icon: <FaInstagram />,
      title: 'Instagram',
      value: '@seth_dev_fs',
      link: 'https://www.instagram.com/seth_dev_fs/',
      color: 'text-[#E4405F]',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'Vila Nova de Famalicão',
      link: 'https://www.google.com/maps/place/Vila+Nova+de+Famelic%C3%A3o',
      color: 'text-accent-gold',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Contacto | FS Web Design - Entre em Contacto</title>
        <meta
          name="description"
          content="Contacte FS Web Design em Vila Nova de Famalicão. Web designer profissional para negócios locais. WhatsApp: +351 912 004 595 | Resposta em 24h"
        />
        <link rel="canonical" href="https://fswebdesign.vercel.app/contacto" />
      </Helmet>

      <section className="section-container pt-32">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Vamos <span className="gradient-text">Conversar</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Tem um projeto em mente? Preencha o formulário abaixo ou entre em
              contacto direto. Respondo em menos de 24 horas.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollAnimation delay={0.1}>
            <div className="card">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Enviar Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden Fields for FormSubmit */}
                <input type="hidden" name="_subject" value="Novo contacto - FS Web Design" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-secondary text-sm font-medium mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="O seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-secondary text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-text-secondary text-sm font-medium mb-2"
                  >
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="+351 912 345 678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-text-secondary text-sm font-medium mb-2"
                  >
                    Tipo de Serviço
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent-purple transition-colors"
                  >
                    <option value="landing">Landing Page</option>
                    <option value="website">Website Completo</option>
                    <option value="premium">Solução Premium</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-secondary text-sm font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent-purple transition-colors resize-none"
                    placeholder="Conte-me sobre o seu projeto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-gradient w-full"
                >
                  {formStatus === 'sending' ? 'A enviar...' : 'Enviar Mensagem'}
                </button>

                {formStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/50 text-green-500 px-4 py-3 rounded-lg text-center">
                    Mensagem enviada com sucesso! Entrarei em contacto em breve.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-lg text-center">
                    Erro ao enviar mensagem. Por favor, tente novamente ou contacte
                    diretamente via WhatsApp.
                  </div>
                )}
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation delay={0.2}>
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Informações de Contacto
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`${info.color} text-2xl flex-shrink-0 mt-1`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-text-primary font-semibold mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent-purple transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-text-secondary">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 text-text-secondary text-sm">
                  <p>Segunda a Sexta: 9h - 19h</p>
                  <p>Sábado: 10h - 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <p className="text-text-secondary text-sm">
                    Respondo a todas as mensagens em menos de 24 horas (dias úteis)
                  </p>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-accent-purple/10 to-accent-gold/10 border-accent-purple/30">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Consulta Gratuita
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Agende uma chamada gratuita de 30 minutos para discutir o seu
                  projeto sem compromisso.
                </p>
                <a
                  href="https://wa.me/351912004595?text=Olá! Gostaria de agendar uma consulta gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient inline-block text-center"
                >
                  Agendar no WhatsApp
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Google Maps */}
        <ScrollAnimation delay={0.3}>
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary text-center mb-8">
              Onde Estou <span className="gradient-text">Localizado</span>
            </h2>
            <div className="card overflow-hidden p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48004.89348755588!2d-8.551349!3d41.408300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24fda095c2a60b%3A0x400ebbde49110d0!2sVila%20Nova%20de%20Famelic%C3%A3o!5e0!3m2!1spt-PT!2spt!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização FS Web Design - Vila Nova de Famalicão"
              ></iframe>
              <div className="p-6 bg-bg-secondary border-t border-border-subtle">
                <p className="text-text-secondary text-center">
                  <strong className="text-text-primary">Sediado em Vila Nova de Famalicão</strong> — Atendimento presencial ou remoto em todo o distrito de Braga e Porto.
                  Reuniões presenciais disponíveis conforme necessário.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}

export default Contact
