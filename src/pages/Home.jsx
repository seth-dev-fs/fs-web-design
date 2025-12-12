import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import ServicesPreview from '../components/ServicesPreview'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FS Web Design | Web Designer em Vila Nova de Famalicão</title>
        <meta
          name="description"
          content="Web Designer em Vila Nova de Famalicão especializado em websites profissionais para negócios locais em Braga e Porto. Transforme visitantes em clientes com design moderno."
        />
        <link rel="canonical" href="https://fswebdesign.vercel.app/" />
      </Helmet>

      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <ContactCTA />
    </>
  )
}

export default Home
