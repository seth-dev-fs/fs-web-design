import { Helmet } from 'react-helmet-async'
import { FiPhone, FiMail, FiMapPin, FiCheck } from 'react-icons/fi'
import { FaWhatsapp, FaLeaf } from 'react-icons/fa'
import ScrollAnimation from '../../components/ScrollAnimation'

const ErvanariaCentral = () => {
  const products = [
    {
      name: 'Chá Verde Bio',
      category: 'Chás e Infusões',
      benefits: 'Antioxidante natural, acelera metabolismo',
      price: '€4.50',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80',
    },
    {
      name: 'Mel de Eucalipto',
      category: 'Mel e Própolis',
      benefits: 'Propriedades anti-inflamatórias',
      price: '€7.90',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784720?w=500&q=80',
    },
    {
      name: 'Óleo Essencial Lavanda',
      category: 'Óleos Essenciais',
      benefits: 'Relaxante, ajuda no sono',
      price: '€12.50',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80',
    },
    {
      name: 'Gengibre em Pó',
      category: 'Especiarias',
      benefits: 'Anti-inflamatório, digestivo',
      price: '€3.20',
      image: 'https://images.unsplash.com/photo-1599898532921-7eb3afa0f013?w=500&q=80',
    },
    {
      name: 'Cúrcuma Bio',
      category: 'Especiarias',
      benefits: 'Antioxidante, anti-inflamatório',
      price: '€5.80',
      image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc768?w=500&q=80',
    },
    {
      name: 'Camomila Flor',
      category: 'Chás e Infusões',
      benefits: 'Calmante, ajuda digestão',
      price: '€3.90',
      image: 'https://images.unsplash.com/photo-1563822249366-7b559c4b49d4?w=500&q=80',
    },
  ]

  const categories = [
    { name: 'Chás e Infusões', icon: '🍵' },
    { name: 'Mel e Própolis', icon: '🍯' },
    { name: 'Óleos Essenciais', icon: '💧' },
    { name: 'Especiarias', icon: '🌶️' },
    { name: 'Suplementos', icon: '💊' },
    { name: 'Cosméticos Naturais', icon: '🧴' },
  ]

  return (
    <>
      <Helmet>
        <title>Ervanária Central - Produtos Naturais na Trofa</title>
        <meta
          name="description"
          content="Ervanária Central na Trofa. Chás, mel, óleos essenciais, especiarias e produtos naturais de qualidade. Visite-nos!"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="section-container relative z-10 text-center">
          <ScrollAnimation>
            <div className="mb-6">
              <FaLeaf className="text-6xl text-green-400 mx-auto mb-4" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ervanária Central
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
              Produtos naturais de qualidade para o seu bem-estar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#produtos"
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                Ver Produtos
              </a>
              <a
                href="#contacto"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30"
              >
                Contactar
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Categories */}
      <section className="section-container py-20 bg-gray-50">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossas <span className="text-green-600">Categorias</span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800">{category.name}</h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="section-container py-20">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Produtos em <span className="text-green-600">Destaque</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Seleção dos nossos produtos mais procurados. Todos naturais e de alta qualidade.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-green-600 font-semibold mb-2 uppercase tracking-wide">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex items-start">
                    <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {product.benefits}
                  </p>
                  <a
                    href="https://wa.me/351913872772?text=Olá!%20Gostaria%20de%20encomendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    Encomendar
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-container py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80"
              alt="Ervanária"
              className="rounded-2xl shadow-2xl"
            />
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sobre a <span className="text-green-600">Ervanária Central</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Há mais de 15 anos a servir a comunidade da Trofa com produtos naturais
                de excelência. A nossa missão é promover o bem-estar através da natureza.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Trabalhamos apenas com fornecedores certificados e produtos de origem
                controlada. Acreditamos que a natureza tem a resposta para uma vida
                mais saudável e equilibrada.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FiCheck className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Produtos Certificados</h4>
                    <p className="text-gray-600 text-sm">
                      Todos os nossos produtos são certificados e de origem natural
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheck className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Aconselhamento Personalizado</h4>
                    <p className="text-gray-600 text-sm">
                      Equipa especializada pronta para aconselhar o melhor para si
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FiCheck className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Entrega ao Domicílio</h4>
                    <p className="text-gray-600 text-sm">
                      Fazemos entregas na zona da Trofa e arredores
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="section-container py-20">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Entre em <span className="text-green-600">Contacto</span>
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ScrollAnimation delay={0.1}>
            <a
              href="https://wa.me/351913872772"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <FaWhatsapp className="text-3xl text-green-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-semibold">913 872 772</p>
            </a>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="text-3xl text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Telefone</h3>
              <p className="text-green-600 font-semibold">913 872 772</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-3xl text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Localização</h3>
              <p className="text-gray-600">Trofa, Portugal</p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.4}>
          <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Visite a Nossa Loja!
            </h3>
            <p className="text-green-50 mb-6 text-lg">
              Estamos abertos de Segunda a Sábado, das 9h às 19h.
              Venha conhecer todos os nossos produtos!
            </p>
            <a
              href="https://wa.me/351913872772?text=Olá!%20Gostaria%20de%20mais%20informações"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors duration-300"
            >
              Falar Connosco
            </a>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer Demo */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="section-container text-center">
          <p className="text-sm">
            © 2024 Ervanária Central - Todos os direitos reservados
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Website desenvolvido por{' '}
            <a href="/" className="text-green-400 hover:text-green-300">
              FS Web Design
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default ErvanariaCentral
