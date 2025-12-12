import { Helmet } from 'react-helmet-async'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiVercel,
  SiFigma,
} from 'react-icons/si'
import ScrollAnimation from '../components/ScrollAnimation'

const About = () => {
  const techStack = [
    { name: 'React', icon: <FaReact />, color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-text-primary' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-[#3178C6]' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-[#339933]' },
    { name: 'Firebase', icon: <SiFirebase />, color: 'text-[#FFCA28]' },
    { name: 'Vercel', icon: <SiVercel />, color: 'text-text-primary' },
    { name: 'Figma', icon: <SiFigma />, color: 'text-[#F24E1E]' },
  ]

  const stats = [
    { number: '5+', label: 'Projetos Completos' },
    { number: '20+', label: 'Anos na Continental' },
    { number: '100%', label: 'Dedicação' },
    { number: '24h', label: 'Tempo de Resposta' },
  ]

  return (
    <>
      <Helmet>
        <title>Sobre | FS Web Design - Fábio Sousa Web Designer</title>
        <meta
          name="description"
          content="Conheça Fábio Sousa, web designer na Trofa especializado em React e Next.js. Criando websites profissionais para negócios locais em Braga e Porto."
        />
        <link rel="canonical" href="https://fswebdesign.vercel.app/sobre" />
      </Helmet>

      <section className="section-container pt-32">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Sobre <span className="gradient-text">Mim</span>
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Desenvolvedor apaixonado por criar experiências digitais que fazem
              a diferença
            </p>
          </div>
        </ScrollAnimation>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <ScrollAnimation delay={0.1}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden card-hover">
                <picture>
                  <source srcSet="/fabio-profissional.webp" type="image/webp" />
                  <img
                    src="/fabio-profissional.jpg"
                    alt="Fábio Sousa - Web Designer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </picture>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-purple/20 rounded-full blur-3xl -z-10" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-text-primary">
                Olá, sou o Fábio Sousa
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Tenho 41 anos, sou casado e pai orgulhoso de duas filhas maravilhosas.
                  A família é o meu centro — e também a minha maior motivação para evoluir
                  e construir algo com significado.
                </p>
                <p>
                  Desde criança que a tecnologia faz parte da minha vida. Desmontava
                  brinquedos para perceber como funcionavam. Mais tarde vieram os computadores,
                  os componentes, as experiências. Sempre tive essa curiosidade de perceber,
                  testar e melhorar tudo o que envolvesse tecnologia.
                </p>
                <p>
                  Estou há mais de 20 anos na Continental Mabor, onde aprendi o valor da
                  consistência, do trabalho bem feito e da evolução contínua. Mas a tecnologia
                  nunca ficou para trás. Com o tempo, senti a necessidade de voltar a aprender,
                  de criar algo meu.
                </p>
                <p>
                  Estudei HTML, CSS e JavaScript, e comecei a explorar o mundo do web design.
                  Hoje utilizo React, Next.js e inteligência artificial como aliada criativa,
                  desenvolvendo websites modernos, funcionais e orientados para resultados.
                </p>
                <p>
                  Crio sites para barbearias, salões de beleza, ginásios, restaurantes e pequenos
                  negócios que querem marcar presença online de forma profissional — sem complicações,
                  mas com identidade e propósito.
                </p>
                <p>
                  Estou a construir esta nova etapa com a mesma dedicação que sempre tive:
                  aprender todos os dias, entregar trabalho com qualidade e ajudar negócios
                  reais a crescer no digital.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Stats */}
        <ScrollAnimation delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Tech Stack */}
        <ScrollAnimation delay={0.4}>
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <ScrollAnimation key={index} delay={0.4 + index * 0.05}>
                  <div className="card-hover flex flex-col items-center justify-center p-8 space-y-3">
                    <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
                    <span className="text-text-primary font-medium">
                      {tech.name}
                    </span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation delay={0.6}>
          <div className="card-hover text-center py-16 px-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Vamos trabalhar juntos?
            </h3>
            <p className="text-text-secondary mb-8 text-lg">
              Estou sempre aberto a novos projetos e colaborações. Entre em
              contacto e vamos criar algo incrível.
            </p>
            <a href="/contacto" className="btn-gradient">
              Entrar em Contacto
            </a>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}

export default About
